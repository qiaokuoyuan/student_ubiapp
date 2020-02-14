const base_url = ""

class Request {
	constructor() {
		console.log("Request")
	}

	setToken(token) {
		uni.setStorageSync("token", token)
	}

	request(options) {
		options.url = base_url + options.url
		try {
			// 尝试获取token
			let token = uni.getStorageSync("token")
			if (token) {
				options.header = {
					Authorization: token
				}
			}
		} catch (err) {
			console.log('request 失败', err)
		}
		return uni.request(options)
	}
}
