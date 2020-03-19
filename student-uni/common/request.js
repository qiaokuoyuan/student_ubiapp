const base_url = "https://ve.cnki.net/coeduApi" // "http://ve.cnki.net/coeduApi"    //http://3eda7bc9.ngrok.io
class HttpRequest {
	constructor() {
		console.log('HttpRequest');
	}

	request(options) {
		options.url = base_url + options.url;

		console.log("请求接口:", options.url)
		// 获取token和sid
		let token = uni.getStorageSync("token")
		let sid = uni.getStorageSync("sid")
		
		
		uni.showLoading({
			mask:true
		})
	

		options.header = {
			// Cookie: "UM_distinctid=1704cab6c9524e-0427fcbff74525-b383f66-100200-1704cab6c961d9; DID=6d2ed024-ccd6-4e76-8f15-7cde11238a88; LLOGO_QIAOKUOYUAN=~/pic/8eaa9554-2d42-45cc-b0cb-20baa02021c0; LLOGO_STU_QIAOKUOYUAN=~/pic/d7f8515d-67b8-4d91-9b30-d1f4c499768d; LLOGO_A00001=~/pic/d62c892f-52f4-4013-bdcd-1f16702c2b0b; Ecp_ClientId=2200219164602271778; LLOGO_DENGGAOFENG=~/pic/d3ddb3b3-0760-4eb3-8e93-5f545c8883ef; KNET_SSO_COOKIE_DID=c6301f4e-c5a1-49e0-8359-73247c9fb8e1; Ecp_IpLoginFail=200225106.33.42.137; BID=67ed7ce9cab14b959e575da46a5c59d9; SID=012011; CNZZDATA1277770830=366119379-1581834224-http%253A%252F%252Fve.cnki.net%252F%7C1582697575; token=d893cef827fc4a8dba017c1aaa00870f",
			"Cache-Control": "no-cache",
			Accept: "*/*",
			"Content-Type": "application/json; charset=utf-8",
			appToken: token,
			appSid:"012011",			
		};


		// 如过不是以下几个请求,去除cookie
		if (options.url.indexOf("/api/nologin/getsign") >= 0 ||
			options.url.indexOf("/api/nologin/GetEncodePass") >= 0 ||
			options.url.indexOf("/sso/m/login") >= 0) {
			delete options.header.Cookie
		}



		console.log('接口参数和头信息:', JSON.stringify(options))
		return uni.request(options);
	}
}





export default new HttpRequest;
