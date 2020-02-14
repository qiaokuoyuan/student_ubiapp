<template>
	<view>
		
		<uni-nav-bar left-icon="arrowleft" leftText="返回" @clickLeft="back()"></uni-nav-bar>
		this is offline
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	import http  from "@/common/request.js"
	
	export default {
		components:{
			uniNavBar
		},
		data() {
			return {
				// 回退时返回的地址
				returnUrl:"",
			}
		},
		
		onLoad(e){
			this.returnUrl=e.returnUrl
			this.test()
		},
		methods: {
			
			test(){
				console.log("测试 接口 test")
				http.request("http://ve.cnki.net/coeduApi/api/UserExtended/GetUser?userId=").then(r=>{
					
					console.log('测试 接口 返回',r)
				})
			},
			
			back(){
				
				let courseId=uni.getStorageSync("courseId")
				let url=`/pages/students/doStudy/doStudy?courseId=${courseId}`				
				uni.redirectTo({
					url:url
				})
			}
		}
	}
</script>

<style>

</style>
