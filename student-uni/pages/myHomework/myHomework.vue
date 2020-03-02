<template>
	<view>
		<uni-nav-bar :statusBar="true" title="我的作业"></uni-nav-bar>
		<view class="">
			<!-- <button type="primary" @click="toTest()">测试地址</button> -->

			<view class="" v-for="(h, hi) in list_homework" :key="hi">
				<view class="" style="height: 100rpx; border-bottom: solid 1rpx #EEE8AA; padding:0 30rpx;">
					<text style="line-height: 100rpx;" @click="doHomework(h)">{{ h.Content }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import http from '@/common/request.js';
export default {
	components: {
		uniNavBar
	},
	data() {
		return {
			// 习题作业
			list_homework: []
		};
	},

	onShow() {
		this.reloadHomework();
	},
	methods: {
		toTest() {
			uni.navigateTo({
				url: '../students/doMyHomework/doMyHomework?homeworkId=137'

				// url:"../students/doHomework/doHomework?homeworkId=130"
			});
		},
		// 跳转到做作业
		doHomework(item) {
			let homeworkId = item.RedirectParameter;

			homeworkId = homeworkId.split(',')[0];

			console.log('homeworkId:', homeworkId);

			uni.navigateTo({
				url: '../students/doMyHomework/doMyHomework?homeworkId' + homeworkId
			});
		},
		// 刷新习题作业
		reloadHomework() {
			let that = this;

			let user = that.$store.getters.getUserInfo;

			http.request({
				url: '/api/Msg/GetMsgInfoByToUserId',
				method: 'GET',
				data: {
					userId: user.UserID,
					type: 37,
					page: 1,
					count: 999
				}
			}).then(r => {
				r = that.fr(r);
				if (r.Code == 200) {
					that.list_homework = r.Data || [];
				}
			});
		}
	}
};
</script>

<style></style>
