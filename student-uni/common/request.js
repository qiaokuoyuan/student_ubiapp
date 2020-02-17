const base_url = "http://ve.cnki.net/coeduApi"
class HttpRequest {
	constructor() {
		console.log('HttpRequest');
	}

	request(options) {
		options.url = base_url + options.url;
		try {
			const token = uni.getStorageSync('header_cookie');
			if (token) {
				options.header = {
					Cookie: token,
					Connection: "keep-alive",					
					"Cache-Control": "no-cache",
					Accept: "*/*"
				};
			}
		} catch (err) {
			console.log('切面错误', err)
		}
		console.log('options', JSON.stringify(options))
		return uni.request(options);
	}
}

export default new HttpRequest;
