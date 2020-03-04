<template>
	<view>
		<!-- 头部导航 -->
		<uni-nav-bar :status-bar="true" right-text="我的缓存" title="我的课程" @clickRight="toOffileFiles()"></uni-nav-bar>

		<!-- 所有课程列表 -->
		<view class="">
			<view class="uni-flex uni-row" v-for="(c, ci) in list_course" :key="ci" style="margin: 30rpx;" @click="toCourseInfo(c)">
				<!-- 左侧课程图片 -->
				<view class="">
					
					<image v-if="c.CoverUri && c.CoverUri.indexOf('cos')>=0" :src="c.CoverUri" style="width: 200rpx; height: 180rpx;" mode="scaleToFill"></image>
					<image v-else src="../../../static/f3d867b7-72cf-48d9-89fd-b5e0d90f5cd7.png" style="width: 200rpx; height: 180rpx;" mode="scaleToFill"></image>
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
		async secondPerson() {
			const res = await fetch('http://ve.cnki.net/coeduApi/api/File/Down?fileCode=7e0c5c34-c131-42f5-ada5-b587fe0dd6e0.jpg&fileName=tp01.jpg');
			const json = await res.json();
			const person = json[1];
			alert(`我是${person.name}，我今年${person.age}岁。`);
			return 'eeeeeeeee';
		},

		stf(d) {
			return JSON.stringify(d);
		},

		async getImgSrc(r) {
			let d = 1;

			setTimeout(function() {
				d = 2;
			}, 10000);

			return d;
		},
		// 跳转课程详情页面
		toCourseInfo(course) {
			uni.navigateTo({
				url: `../courseInfo/courseInfo?courseCode=${course.CourseCode}`
			});
		},
		// 刷新所有课程
		reloadCourse() {
			console.log("reloadCourse")
			let that = this;

			uni.showLoading({
				mask: true
			});

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
				uni.hideLoading();

				r = that.fr(r);

				if (r.Code == 200) {
					r.Data.courstList = r.Data.courstList || [];
					// let _total_count = r.Data.courstList.length;
					// let _cache_count = 0;
					// r.Data.courstList.forEach(e => {
					// 	that.cacheFile(e.CoverUri, function(_src) {
					// 		e._cache_src = _src;
					// 		++_cache_count;
							
							
					// 		uni.getImageInfo({
					// 			src:_src,
					// 			success(r_getImageInfo) {
					// 				console.log("r_getImageInfo",JSON.stringify(r_getImageInfo))
					// 			},
					// 			complete(r_getImageInfo_complete){
					// 				console.log(r_getImageInfo_complete,JSON.stringify(r_getImageInfo_complete))
					// 			}
					// 		})
							
					// 		if (_cache_count == _total_count) {
					// 			that.list_course = r.Data.courstList;
					// 		}
					// 	});
					// });
					that.list_course = r.Data.courstList || [];
				}
			});
		},
		// 跳转到离线文件页面
		toOffileFiles() {
			uni.navigateTo({
				url: '../offlineFiles/offlineFiles'
			});
		}
	}
};
</script>

<style></style>
