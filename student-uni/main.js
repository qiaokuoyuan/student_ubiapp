import Vue from 'vue'
import App from './App'

import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'
import uLink from '@/components/uLink.vue'
import store from './store'



Vue.config.productionTip = false


// 离线缓存文件信息映射关系key
Vue.prototype.offline_file_info_map_name = "offline_file_info_map_name"



Vue.prototype.fr = (r) => {
	try {
		console.log("原始返回值:", JSON.stringify(r))
		return r[1].data
	} catch (e) { 
		console.log("fr 转换异常:", e)
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
Vue.prototype.download_task_save_place="storage"


// 修改一个对象的属性,由于微信小程序无法将表达式写在标签里,可以使用该方法
Vue.prototype.changeAttr=(item,attr_name,attr_value)=>{
	item[attr_name]=attr_value
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

Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)
Vue.component('uLink', uLink)

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
