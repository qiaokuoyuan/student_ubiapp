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
					Cookie: "token=5a6ac8346c404120bfa68f2053148f96;SID=012011;CNZZDATA1277770830=366119379-1581834224-http%253A%252F%252Fve.cnki.net%252F%7C1581834224;UM_distinctid=1704cab6c9524e-0427fcbff74525-b383f66-100200-1704cab6c961d9",
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
