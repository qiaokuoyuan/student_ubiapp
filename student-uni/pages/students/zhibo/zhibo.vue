<template>
	<view>
		<!-- 标题 -->
		<uni-nav-bar :statusBar="true" title="我的直播课"></uni-nav-bar>

		<!-- 直播状态筛选 -->
		<view class="uni-flex uni-row">
			<view :class="[{ unselect: tab != 'doing' }, { select: tab == 'doing' }]" @click="tab = 'doing'">
				<text style="line-height: 100rpx; font-size: larger;">进行中</text>
			</view>

			<view :class="[{ unselect: tab != 'waiting' }, { select: tab == 'waiting' }]" @click="tab = 'waiting'">
				<text style="line-height: 100rpx; font-size: larger;">未开始</text>
			</view>
			<view :class="[{ unselect: tab != 'end' }, { select: tab == 'end' }]" @click="tab = 'end'"><text style="line-height: 100rpx; font-size: larger;">已结束</text></view>
		</view>

		<!-- 直播课程列表 -->
		<view>
			<view class="" v-for="(z, zi) in list_zhibo" :key="zi">
				<view
					@click="toZhibo(z)"
					style="height: 200rpx; background-color: #F0F0F0; border-bottom: solid #DDDDDD 1rpx;"
					class=""
					v-if="(tab == 'waiting' && z.LiveState == 1) || (tab == 'doing' && z.LiveState == 2) || (tab == 'end' && z.LiveState == 3)"
				>
					<!-- 直播课名称 -->
					<view class="" style="margin:20rpx 30rpx; overflow: hidden; font-size: x-large;">{{ z.LiveName }}</view>

					<!-- 课程名称 -->
					<view class="" style="margin:5rpx 30rpx; overflow: hidden; ">所属课程：{{ z.CourseName }}</view>
					<!-- 时间段 -->
					<view class="" style="margin:5rpx 30rpx; overflow: hidden; ">{{ z.StartTime.substring(0, 10) }}到{{ z.EndTime.substring(0, 10) }}</view>
				</view>
			</view>
		</view>

		<!-- 如果点击直播详情 -->
		<my-iframe :url="zhibo_url" v-if="show.zhibo_detail"></my-iframe>
	</view>
</template>

<script>
import http from '@/common/request.js';
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import myIframe from '@/components/myIframe/myIframe';

export default {
	data() {
		return {
			list_zhibo: [],

			// 直播状态 doing waiting end
			tab: 'doing',

			zhibo_url: '',
			show: {
				zhibo_detail: false
			}
		};
	},
	components: {
		uniNavBar,
		myIframe
	},

	onShow() {
		this.reload_zhibos();
	},
	methods: {
		// 去直播详情页面
		toZhibo(item) {
			// http://ve.cnki.net/Live/LiveApp/Index?cid=432

			let url = 'http://ve.cnki.net/Live/LiveApp/Index?cid=' + item.LiveId;

			plus.runtime.openURL(url);
		},
		// 刷新直播课程
		reload_zhibos() {
			let that = this;

			http.request({
				url: '/api/LiveCourse/GetLiveCourseList?IsStuPort=true&createState=2&liveState=5&isAsc=true&sortField=StartTime&pageSize=100&pageIndex=1'
			}).then(r => {
				r = that.fr(r);

				if (r.Code == 200) {
					that.list_zhibo = r.Data.Data || [];
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
	transition-duration: 1s;
}

.unselect {
	width: 100%;
	height: 100rpx;
	background-color: #faebd7;
	border-bottom: solid 5rpx #faebd7;
	text-align: center;
	transition-duration: 1s;
}
</style>
