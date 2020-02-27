import Vue from 'vue'
import Vuex from 'vuex'

import http from '@/common/request.js';

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		islogin:false,
		hasLogin: false,
		loginProvider: "",
		openid: null,
		testvuex: false,
		colorIndex: 0,
		colorList: ['#FF0000', '#00FF00', '#0000FF'],
		userInfo: {},
		sid: "",
		token: ""
	},
	mutations: {
		
		setSid(state, v) {
			state.sid = v
		},
		setToken(state, v) {
			state.token = v
		},
		setUserInfo(state, v) {
			state.userInfo = v
		},
		login(state, provider) {
			state.hasLogin = true;
			state.loginProvider = provider;
		},

		setOpenid(state, openid) {
			state.openid = openid
		},
		setTestTrue(state) {
			state.testvuex = true
		},
		setTestFalse(state) {
			state.testvuex = false
		},
		setColorIndex(state, index) {
			state.colorIndex = index
		}
	},
	getters: {

		getToken(state) {
			return state.token
		},
		getSid(state) {
			return state.sid
		},

		currentColor(state) {
			return state.colorList[state.colorIndex]
		},

		getUserInfo(state) {
			return state.userInfo
		}
	},
	actions: {

		// 登出
		logout(commit, state) {
			console.log("logout")
			// state.userInfo = {
			// 	a: 1
			// }
			commit.commit('setUserInfo', {
				a: 1
			})
		},

		// 获取用户信息		
		getUserInfo(commit, state) {
			let that = this
			http.request({
				url: "/api/Student/StudentInfo",
				method: "post"
			}).then(r => {
				try {
					r = Vue.prototype.fr(r)
					r = r.Data.UserInfo

					commit.commit('setUserInfo', r)

				} catch (e) {
					commit.commit('setUserInfo', {})
					console.log(e)
				}
			})

		},


		// lazy loading openid
		getUserOpenId: async function({
			commit,
			state
		}) {
			return await new Promise((resolve, reject) => {
				if (state.openid) {
					resolve(state.openid)
				} else {
					uni.login({
						success: (data) => {
							commit('login')
							setTimeout(function() { //模拟异步请求服务器获取 openid
								const openid = '123456789'
								console.log('uni.request mock openid[' + openid + ']');
								commit('setOpenid', openid)
								resolve(openid)
							}, 1000)
						},
						fail: (err) => {
							console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err)
							reject(err)
						}
					})
				}
			})
		}
	}
})

export default store
