const base_url = "http://ve.cnki.net/coeduApi"
class HttpRequest {
	constructor() {
		console.log('HttpRequest');
	}

	request(options) {
		options.url = base_url + options.url;
		try {
			const token = uni.getStorageSync('token');
			if (token || 1)  {
				options.header = {
					Cookie: 'token=137d5b3376934bebad57c042f6a964fc',    			
				};
			}
		} catch (err) {
			console.log('切面错误',err)
		}
		console.log('options',JSON.stringify(options) )
		return uni.request(options);
	}
}

export default new HttpRequest;
