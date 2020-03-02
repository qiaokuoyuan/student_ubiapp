import http from "./request.js"


// 将图片下载到临时路径并返回临时路径
async function getImgSrc() {
	let token = uni.getStorageInfoSync("token")
	let [err, res] = await uni.downloadFile({
		url: "http://ve.cnki.net/coeduApi/api/File/Down?fileCode=7e0c5c34-c131-42f5-ada5-b587fe0dd6e0.jpg&fileName=tp01.jpg",
		header: {
			appToken: token,
			appSid: "012011"
		}
	})

	let tempSrc = res.tempFilePath

	console.log("tempSrc", tempSrc)
	console.log("res", JSON.stringify(res))
	return "xxxxxxxxxxxx"
}

export  {getImgSrc}
