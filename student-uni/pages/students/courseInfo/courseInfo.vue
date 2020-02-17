<template>
	<view>
		<!-- 头部导航 -->
		<uni-nav-bar leftIcon="arrowleft" @clickLeft="back()"></uni-nav-bar>

		<!-- 头部轮播图 -->

		<swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="4000">
			<swiper-item><view class="swiper-item uni-bg-red">A</view></swiper-item>
			<swiper-item><view class="swiper-item uni-bg-green">B</view></swiper-item>
			<swiper-item><view class="swiper-item uni-bg-blue">C</view></swiper-item>
		</swiper>

		<!-- 中间课程简介 -->
		<view class="">
			<uni-section :title="courseTitle" type="line"></uni-section>
			<view class="" style="margin: 30rpx;">
				<text>{{ courseDesc }}</text>
			</view>
		</view>

		<!-- 教师团队 -->
		<view class="">
			<uni-section title="教师团队" type="line"></uni-section>
			<view class="">
				<view class="uni-flex uni-row" v-for="(t, ti) in courseTeachers" :key="ti" style="margin: 30rpx;">
					<!-- 教师头像 -->

					<image v-if="t.Logo" :src="t.Logo" mode="scaleToFill" style="width: 120rpx; height: 120rpx;"></image>
					<image v-else src="../../../static/logo.png" mode="scaleToFill" style="width: 120rpx; height: 120rpx;"></image>

					<view class="uni-column" style="margin-top: 20rpx; margin-left: 30rpx;">
						<view class="">
							<text style="font-size: larger;">{{ t.RealName }}</text>
						</view>
						<view class="">
							<text>{{ t.Department }}</text>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 开始学习按钮 -->
		<button type="primary" style="margin: 40rpx;" @click="toLearnCourse()">开始学习</button>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import http from '@/common/request.js';
import uniSection from '@/components/uni-section/uni-section.vue';

export default {
	components: {
		uniNavBar,
		uniSection
	},

	data() {
		return {
			// 课程code
			courseCode: '',

			// 课程名称
			courseTitle: '',

			// 课程描述
			courseDesc: '',

			// 课程头部轮播图
			coureLogos: [],

			// 课程教师信息
			courseTeachers: []
		};
	},
	onLoad(o) {
		this.courseCode = o.courseCode;
		this.reloadCourseInfo();
	},

	methods: {
		// 跳转到课程学习页面
		toLearnCourse() {
			let that = this;
			uni.redirectTo({
				url: '../leanCourse/leanCourse?courseCode=' + that.courseCode
			});
		},
		// 获取课程信息
		reloadCourseInfo() {
			let that = this;
			
			uni.showLoading({
				mask:true
			})
			http.request({
				url: `/api/Course/GetCourseInfo?courseCode=${that.courseCode}`
			}).then(r => {
				
				uni.hideLoading()
				
				r = that.fr(r);
				if (r.Code == 200) {
					that.courseTitle = r.Data.main.CourseName;
					that.courseDesc = r.Data.ext.CourseIntroduction;
					that.courseTeachers = r.Data.ext.memberNames;
					// that.coureLogos=[].push(r.Data.)
				}
			});
		},

		// 回退上一页
		back() {
			
			uni.switchTab({
				url:'../myCourse/myCourse'
			})
	
		}
	}
};
</script>

<style>
.uni-margin-wrap {
	width: 690rpx;
	margin: 0 30rpx;
}
.swiper {
	height: 300rpx;
}
.swiper-item {
	display: block;
	height: 300rpx;
	line-height: 300rpx;
	text-align: center;
}

.swiper-list {
	margin-top: 40rpx;
	margin-bottom: 0;
}

.uni-common-mt {
	margin-top: 60rpx;
	position: relative;
}

.info {
	position: absolute;
	right: 20rpx;
}

.uni-padding-wrap {
	width: 550rpx;
	padding: 0 100rpx;
}
</style>
