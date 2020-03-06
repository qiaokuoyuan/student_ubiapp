<template>
	<view>
		<uni-nav-bar :statusBar="true" title="我的作业"></uni-nav-bar>
		
		
		<view class="uni-flex uni-row">
			
			<view :class="[{ unselect: tab != 'all' }, { select: tab == 'all' }]" @click="tab = 'all'">
				<text style="line-height: 100rpx; font-size: larger;">全部(debug)</text>
			</view>
			
			<view :class="[{ unselect: tab != 'unfinished' }, { select: tab == 'unfinished' }]" @click="tab = 'unfinished'">
				<text style="line-height: 100rpx; font-size: larger;">未完成</text>
			</view>
			<view :class="[{ unselect: tab != 'finished' }, { select: tab == 'finished' }]" @click="tab = 'finished'">
				<text style="line-height: 100rpx; font-size: larger;">已完成</text>
			</view>
			
			
		</view>
		
		
		<view class="">
			<!-- <button type="primary" @click="toTest()">测试地址</button> -->

			<view class="" v-for="(h, hi) in list_homework" :key="hi">
				
				<!-- 已完成的 -->
				<view v-if="h.Extension=='已作答' && tab=='finished'" class="" style="height: 100rpx; border-bottom: solid 1rpx #EEE8AA; padding:0 30rpx;">
					<text style="line-height: 100rpx;" @click="doHomework(h)">{{ h.Content }}</text>
				</view>
				
				
				<!-- 未完成的 -->
				<view v-if="h.Extension=='未作答' && tab=='unfinished'" class="" style="height: 100rpx; border-bottom: solid 1rpx #EEE8AA; padding:0 30rpx;">
					<text style="line-height: 100rpx;" @click="doHomework(h)">{{ h.Content }}</text>
				</view>
				
				<!-- 全部 -->
				<view v-if=" tab=='all'" class="" style="height: 100rpx; border-bottom: solid 1rpx #EEE8AA; padding:0 30rpx;">
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
			// finished unfinished all
			tab:"all",
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
				url: '../students/doMyHomework/doMyHomework?homeworkId=' + homeworkId
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

<style>
.select {
	width: 100%;
	height: 100rpx;
	background-color: #00ced1;
	border-bottom: solid 5rpx #1e90ff;
	text-align: center;
}

.unselect {
	width: 100%;
	height: 100rpx;
	background-color: #faebd7;
	border-bottom: solid 5rpx #faebd7;
	text-align: center;
}
</style>
