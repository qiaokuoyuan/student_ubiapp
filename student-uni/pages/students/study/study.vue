<template>
	<view>
		<!-- 头部导航 -->
		<scroll-view id="tab-bar" class="scroll-h" :scroll-x="true" :show-scrollbar="false">
			<view v-for="(tab, index) in navList" :key="tab.Id" class="uni-tab-item" :id="tab.Id" @click="changeTab(tab)">
				<text class="uni-tab-item-title" :class="currentTab == tab.Id ? 'uni-tab-item-title-active' : ''">{{ tab.CourseClassName }}</text>
			</view>
		</scroll-view>

		<!-- 水平分割线 -->
		<view class="line-h"></view>

		<!-- 筛选和排序 -->
		<view class="uni-flex flex-row">
			<!-- 下拉菜单筛选 -->
			<view style="text-align: center; width: 300rpx;">
				<uni-combox label="" @click="currentTerm = ''" :candidates="terms" placeholder="currentTerm" v-model="currentTerm"></uni-combox>
			</view>
			<!-- <view class="uni-flex-item" style="text-align: center;">123</view>
			<view class="uni-flex-item" style="text-align: center;">123</view> -->
		</view>

		<!-- 测试按钮 -->
		<view class=""><button type="primary" @click="testAxios()">测试跨域</button></view>

		<!-- 测试按钮 -->
		
			<button type="primary" @click="toCourseDetail()">
				课程详情
				<!-- <navigator url="../course/courseDetail/courseDetail" open-type="navigate">详情</navigator> -->
			</button>

	</view>
</template>

<script>
import uniCombox from '@/components/uni-combox/uni-combox';

export default {
	components: { uniCombox },
	data() {
		return {
			// 当前tab
			currentTab: '',
			currentTerm: '',
			terms: ['1', '2', '3'],
			navList: [
				{ Id: 1, CourseClassName: '业务工作课' },
				{ Id: 2, CourseClassName: '业务工作课' },
				{ Id: 3, CourseClassName: '业务工作课' },
				{ Id: 4, CourseClassName: '业务工作课' }
			]
		};
	},
	methods: {
		toCourseDetail() {
			uni.navigateTo({
				url:"/pages/students/course/courseDetail/courseDetail"
			})
			
		},
		testAxios() {
			uni.request({
				url: '/api/Common/GetOpenCourseConfig',
				success: r => {
					console.log(r);
				}
			});
		},
		changeTab(tab) {
			this.currentTab = tab.Id;
		}
	}
};
</script>

<style>
/* #ifndef APP-PLUS */
page {
	width: 100%;
	min-height: 100%;
	display: flex;
}

/* #endif */

.tabs {
	flex: 1;
	flex-direction: column;
	overflow: hidden;
	background-color: #ffffff;
	/* #ifdef MP-ALIPAY || MP-BAIDU */
	height: 100vh;
	/* #endif */
}

.scroll-h {
	width: 750upx;
	height: 80upx;
	flex-direction: row;
	/* #ifndef APP-PLUS */
	white-space: nowrap;
	/* #endif */
	/* flex-wrap: nowrap; */
	/* border-color: #cccccc;
		border-bottom-style: solid;
		border-bottom-width: 1px; */
}

.line-h {
	height: 1upx;
	background-color: #cccccc;
}

.uni-tab-item {
	/* #ifndef APP-PLUS */
	display: inline-block;
	/* #endif */
	flex-wrap: nowrap;
	padding-left: 34upx;
	padding-right: 34upx;
}

.uni-tab-item-title {
	color: #555;
	font-size: 30upx;
	height: 80upx;
	line-height: 80upx;
	flex-wrap: nowrap;
	/* #ifndef APP-PLUS */
	white-space: nowrap;
	/* #endif */
}

.uni-tab-item-title-active {
	color: #007aff;
}

.swiper-box {
	flex: 1;
}

.swiper-item {
	flex: 1;
	flex-direction: row;
}

.scroll-v {
	flex: 1;
	/* #ifndef MP-ALIPAY */
	flex-direction: column;
	/* #endif */
	width: 750upx;
}

.update-tips {
	position: absolute;
	left: 0;
	top: 41px;
	right: 0;
	padding-top: 5px;
	padding-bottom: 5px;
	background-color: #fddd9b;
	align-items: center;
	justify-content: center;
	text-align: center;
}

.update-tips-text {
	font-size: 14px;
	color: #ffffff;
}

.refresh {
	width: 750upx;
	height: 64px;
	justify-content: center;
}

.refresh-view {
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: center;
}

.refresh-icon {
	width: 30px;
	height: 30px;
	transition-duration: 0.5s;
	transition-property: transform;
	transform: rotate(0deg);
	transform-origin: 15px 15px;
}

.refresh-icon-active {
	transform: rotate(180deg);
}

.loading-icon {
	width: 20px;
	height: 20px;
	margin-right: 5px;
	color: #999999;
}

.loading-text {
	margin-left: 2px;
	font-size: 16px;
	color: #999999;
}

.loading-more {
	align-items: center;
	justify-content: center;
	padding-top: 10px;
	padding-bottom: 10px;
	text-align: center;
}

.loading-more-text {
	font-size: 28upx;
	color: #999;
}
</style>
