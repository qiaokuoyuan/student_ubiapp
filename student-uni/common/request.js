const base_url = "http://ve.cnki.net/coeduApi"    // "http://ve.cnki.net/coeduApi"    //http://3eda7bc9.ngrok.io
class HttpRequest {
	constructor() {
		console.log('HttpRequest');
	}

	request(options) {
		options.url = base_url + options.url;
		try {
			const token = uni.getStorageSync('header_cookie');
			if (token || 1) {
				options.header = {
					Cookie: "UM_distinctid=1704cab6c9524e-0427fcbff74525-b383f66-100200-1704cab6c961d9; DID=6d2ed024-ccd6-4e76-8f15-7cde11238a88; LLOGO_QIAOKUOYUAN=~/pic/8eaa9554-2d42-45cc-b0cb-20baa02021c0; LLOGO_STU_QIAOKUOYUAN=~/pic/d7f8515d-67b8-4d91-9b30-d1f4c499768d; SID=012011; LLOGO_A00001=~/pic/d62c892f-52f4-4013-bdcd-1f16702c2b0b; CNZZDATA1277770830=366119379-1581834224-http%253A%252F%252Fve.cnki.net%252F%7C1582080099; token=2a1b47bbb87944a3abb6d8587496a214",
									
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
