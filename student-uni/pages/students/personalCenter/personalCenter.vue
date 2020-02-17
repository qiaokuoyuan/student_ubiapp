<template>
	<view>
		<!-- 如果登陆显示上方头像 -->
		<view class="" v-if="isLogin && userLogo"><image :src="userLogo" mode=""></image></view>

		<!-- 如果没有登陆，显示登陆信息 -->

		<!-- 直接输入token -->
		<view class="" style="margin: 30rpx;">
			<uni-section title="当前头部cookie:"></uni-section>
			<view class="" style="margin: 30rpx;">{{ current_head_cookie }}</view>

			<uni-section title="修改cookie:"></uni-section>
			<view class="" style="margin: 30rpx;">
				<textarea maxlength="-1" v-model="input_head_cookie" placeholder="输入新cookie" />
				<button type="primary" @click="changeHeaderCookie()">确认修改</button>
			</view>
		</view>

		<!-- 如过登陆了，显示退出按钮 -->
		<view class="" v-if="!isLogin" style="margin: 40rpx;"><button type="primary">登陆</button></view>

		<!-- 如过登陆了，显示退出按钮 -->
		<view class="" v-if="isLogin" style="margin: 40rpx;"><button type="primary">退出登陆</button></view>
	</view>
</template>

<script>
import uniSection from '@/components/uni-section/uni-section.vue';
export default {
	components: {
		uniSection
	},
	onShow() {
		this.$store.dispatch('getUserInfo');
		this.getHeaderCookie();
	},

	computed: {
		// 是否已经登陆
		isLogin() {
			return this.$store.getters.getUserInfo.UserID;
		},

		userLogo() {
			return this.$store.getters.getUserInfo.Logo;
		}
	},
	data() {
		return {
			current_head_cookie: '',
			input_head_cookie: ''
		};
	},
	methods: {
		getHeaderCookie() {
			this.current_head_cookie = uni.getStorageSync('header_cookie');
			console.log('getHeaderCookie', this.current_head_cookie);
		},
		changeHeaderCookie() {
			console.log('input_head_cookie==>', this.input_head_cookie);
			uni.setStorageSync('header_cookie', this.input_head_cookie);
			this.getHeaderCookie();
		}
	}
};
</script>

<style></style>
