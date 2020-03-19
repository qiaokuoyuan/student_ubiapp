import Vue from 'vue'
import App from './App'

import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'
import uLink from '@/components/uLink.vue'
import store from './store'
import http from "./common/request.js"




Vue.config.productionTip = false


// 离线缓存文件信息映射关系key
Vue.prototype.offline_file_info_map_name = "offline_file_info_map_name"

// 获取图片缓存后的src
Vue.prototype.cacheFile = (src, callback) => {

	let token = uni.getStorageInfoSync("token")
	uni.downloadFile({
		url: "http://ve.cnki.net/coeduApi/api/File/Down?fileCode=7e0c5c34-c131-42f5-ada5-b587fe0dd6e0.jpg&fileName=tp01.jpg",
		header: {
			appToken: token,
			appSid: "012011"
		},
		success(res) {
			console.log("cachedFile success==>", src, res.tempFilePath)
			callback(res.tempFilePath)
		},
		fail(res) {
			console.log("cachedFile fail==>", JSON.stringify(res))
		}
	})
}

// 文件上传地址
Vue.prototype.uploadDir = "http//ve.cnki.net/coeduApi/api/File/Upload"

Vue.prototype.fr = (r) => {
	try {
		uni.hideLoading()
		console.log("原始返回值(fr之前):", JSON.stringify(r))

		if (r[1].data.Code != 200) {
			uni.hideLoading()
			uni.showToast({
				title: "请求失败,请检查登陆状态",
				icon: "none"
			})
		}

		// 如果是401,清空登陆状态
		if (r[1].statusCode == 401) {
			// 如果出现问题,清空登陆状态
			
			console.log("401，清空登陆状态:")
			console.log("旧store:",store)
			store.state.UserInfo =""
			console.log("新store:",store)
			
			uni.switchTab({
				url:"pages/students/personalCenter/personalCenter"
			})
		}





		return r[1].data
	} catch (e) {
		console.log("fr 转换异常:", e)
		uni.hideLoading()
		uni.showToast({
			title: "您尚未登陆,请先登陆",
			icon: "none"
		})



		return r
	}
}

Vue.prototype.fhttp = (url) => {
	url = url || ''
	if (url.indexOf("http://") >= 0 || url.indexOf("https://") >= 0) {
		return url
	}

	if (url.indexOf('//') == 0) {
		return `${location.protocol}${url}`
	} else {
		return `${location.protocol}//${url}`
	}

}

// 文件下载信息存储位置 (storage/ golbalData)
Vue.prototype.download_task_save_place = "storage"


// 修改一个对象的属性,由于微信小程序无法将表达式写在标签里,可以使用该方法
Vue.prototype.changeAttr = (item, attr_name, attr_value) => {
	item[attr_name] = attr_value
}


// 扁平化结构转树接结构
Vue.prototype.toTree = (data) => {
	let result = [];
	if (!Array.isArray(data)) {
		return result;
	}
	data.forEach(item => {
		delete item.children;
	});
	let map = {};
	data.forEach(item => {
		map[item.id] = item;
	});
	data.forEach(item => {
		let parent = map[item.pId];
		if (parent) {
			(parent.children || (parent.children = [])).push(item);
		} else {
			result.push(item);
		}
	});
	return result;
}



Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}


Vue.prototype.listFilter = (list, f) => {
	let new_list = []
	list = list || []
	for (let i = 0; i < list.length; ++i) {
		if (f(list[i])) {
			new_list.push(list[i])
		}
	}
	return new_list
}


// 映射关系格式
// {
// 	fileId,
// 	fileName,
// 	path
// }

// 根据id获取文件存储路径
Vue.prototype.getSavedFilePathById = (fileId) => {
	let map = uni.getStorageSync(Vue.prototype.offline_file_info_map_name)
	for (let i = 0; i < map.length; ++i) {
		if (map[i].fileId == fileId) {
			return map[i].path
		}
	}
}

// 保存id和文件存储路径的映射关系
Vue.prototype.addIdToSavedFilePath = (fileId, path, filename) => {
	let map = uni.getStorageSync(Vue.prototype.offline_file_info_map_name)
	map.push({
		fileId: fileId,
		fileName: filename,
		path: path
	})
}

// 根据保存路径删除文件
Vue.prototype.delSavedFileByPath = (path) => {
	// 首先根据 id 找到映射关系
	let map = uni.getStorageSync(Vue.prototype.offline_file_info_map_name)
	map = Vue.prototype.listFilter(map, function(e) {
		return e.path != path
	})

	// 删除映射关系
	uni.setStorageSync(Vue.prototype.offline_file_info_map_name, map)

	// 删除文件实体	
	uni.removeSavedFile({
		filePath: path
	})
}

// 根据id删除文件
Vue.prototype.delSavedFileById = (fileId) => {

	// 获取文件path
	let path = Vue.prototype.setSavedFilePathById(fileId)

	// 通过path删除
	Vue.prototype.delSavedFileByPath(path)
}






Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)
Vue.component('uLink', uLink)

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
