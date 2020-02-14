<template>
	<view>
		
		<uni-nav-bar left-icon="arrowleft" leftText="返回" @clickLeft="back()"></uni-nav-bar>
		this is offline
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	
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
		},
		methods: {
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
