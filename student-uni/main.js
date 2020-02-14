import Vue from 'vue'
import App from './App'

import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'
import uLink from '@/components/uLink.vue'
import store from './store'



Vue.config.productionTip = false


// 离线缓存保存文件路径
Vue.prototype.offline_file_dir="/"


// 离线缓存保存文件临时路径
Vue.prototype.offline_file_cache_dir="/"




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
