<template>
	<view>
		<!-- 我的作品页面 -->

		<uni-nav-bar leftIcon="arrowleft" @clickLeft="back()" title="我的作品"></uni-nav-bar>

		<view class="" style="margin:30rpx">
			<view class="uni-flex uni-row" v-for="(a, ai) in list_myArtifact" :key="ai" style="margin:10rpx" @click="toArticatDetail(a)">
				<!-- 图片 -->
				<view class="">
					<!-- 如过已经上传封面 -->
					<image style="width: 200rpx; height:150rpx ;" v-if="a.Cover" :src="a.Cover" mode="scaleToFill"></image>
					<!-- 默认图片 -->
					<image style="width: 200rpx; height:150rpx ;" v-else src="../../../static/video.png" mode="scaleToFill"></image>
				</view>

				<view class="uni-flex uni-column" style="margin-left: 30rpx;">
					<!-- 作品名称 -->
					<view class="" style="height: 70rpx;">
						<text style="line-height: 70rpx;">{{ a.StudentWorkName }}</text>
					</view>

					<!-- 审核状态 -->
					<view class="" style="height: 70rpx;">
						<text style="line-height: 70rpx; color: #FFDAB9;" class="kcstatA" v-if="a.ReviewFlag == 1" >【已通过】</text>
						<text style="line-height: 70rpx; color: #BCEE68;" class="kcstatC" v-if="a.ReviewFlag == 2"> 【未通过】</text>
						<text style="line-height: 70rpx; color: #FFEC8B;" class="kcstatD" v-if="a.ReviewFlag == 99" >【草稿】</text>
						<text style="line-height: 70rpx; color: #FFC1C1;" class="kcstatE" v-if="a.ReviewFlag == 0" >【待审核】</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import http from '@/common/request.js';
import uniSection from '@/components/uni-section/uni-section.vue';
import uniIcons from '@/components/uni-icons/uni-icons.vue';
export default {
	created() {
		this.reloadMyArtifact();
	},

	components: {
		uniNavBar
	},

	data() {
		return {
			list_myArtifact: []
		};
	},
	methods: {
		// 跳转 我的作品详情
		toArticatDetail(item) {
			uni.navigateTo({
				url: '../myArtifactDetail/myArtifactDetail?id=' + item.StudentWorkCode
			});
		},
		back() {
			uni.navigateBack({});
		},
		// 刷新我的作品
		reloadMyArtifact() {
			let that = this;
			http.request({
				url: '/api/StudentWork/GetStudentStudentWorkList?semesterId=&search=&reviewFlag=100&paiXu=2&pageIndex=1&pageSize=999'
			}).then(r => {
				r = that.fr(r);
				if (r.Code == 200) {
					that.list_myArtifact = r.Data || [];
				}
			});
		}
	}
};
</script>

<style></style>
