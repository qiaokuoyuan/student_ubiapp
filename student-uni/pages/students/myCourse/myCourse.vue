<template>
	<view>
		<!-- 头部导航 -->
		<uni-nav-bar rightText="我的缓存" title="我的课程" @clickRight="toOffileFiles()"></uni-nav-bar>

		<!-- 所有课程列表 -->
		<view class="">
			<view class="uni-flex uni-row" v-for="(c, ci) in list_course" :key="ci" style="margin: 30rpx;" @click="toCourseInfo(c)">
				<!-- 左侧课程图片 -->
				<view class="">
					<image v-if="c.CoverImgSmall" :src="c.CoverImgSmall" style="width: 200rpx; height: 180rpx;" mode="scaleToFill"></image>
					<image v-else src="../../../static/app-plus/uni@2x.png" style="width: 200rpx; height: 180rpx;" mode="scaleToFill"></image>
				</view>

				<!-- 右侧课程名称 -->
				<view class="uni-column" style="margin-top: 40rpx; margin-left: 40rpx;">
					<view class="">
						<text style="font-size: larger;">{{ c.CourseName }}</text>
					</view>

					<view class="">
						<text>{{ c.UserDepartmentName }}</text>
					</view>
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

	onShow() {
		this.reloadCourse();
	},
	data() {
		return {
			list_course: []
		};
	},
	methods: {
		// 跳转课程详情页面
		toCourseInfo(course) {
			uni.redirectTo({
				url: `../courseInfo/courseInfo?courseCode=${course.CourseCode}`
			});
		},
		// 刷新所有课程
		reloadCourse() {
			let that = this;
			
			uni.showLoading({
				mask:true
			})
			
			http.request({
				url: '/api/Student/GetMyCourseList',
				method: 'POST',
				data: {
					semesterId: '',
					pageIndex: 1,
					orderByPostTime: 2,
					orderByScanCount: 0,
					orderByPraiseCount: 0,
					orderByCollectCount: 0,
					isPublished: 1,
					courseClassId: '',
					classType: 0
				}
			}).then(r => {
				
				
				uni.hideLoading()
				
				r = that.fr(r);

				console.log('reloadCourse==>', r);

				if (r.Code == 200) {
					that.list_course = r.Data.courstList || [];

					console.log('that.list_course==>', that.list_course);
				}
			});
		},
		// 跳转到离线文件页面
		toOffileFiles() {
			uni.redirectTo({
				url: '../offlineFiles/offlineFiles'
			});
		}
	}
};
</script>

<style></style>
