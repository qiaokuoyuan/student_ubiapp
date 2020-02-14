<template>
	<view>
		<!-- 头部选择课程和学期 -->
		<view class="uni-flex uni-row">
			<view class="text">课程：</view>
			<picker style="margin-top: 10rpx;" @change="courseTypeChange" range-key="CourseClassName" :value="selectCourseTypeIndex" :range="list_course_type">
				<view class="uni-input">{{ list_course_type[selectCourseTypeIndex].CourseClassName }}</view>
			</picker>
			<view class="text">学期：</view>
			<picker style="margin-top: 10rpx;" @change="termChange" range-key="SemesterName" :value="selectTermIndex" :range="list_term">
				<view class="uni-input">{{ list_term[selectTermIndex].SemesterName }}</view>
			</picker>
		</view>

		<!-- 水平分割线 -->
		<view class="line-h"></view>

		<view class="">
			<view class="uni-flex uni-row" v-for="(c, ci) in list_course_items" :key="ci" @click="toCourseDetail()">
				<view
					class=" uni-flex"
					style="width: 200rpx;height: 220rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;"
				>
					<!-- 课程logo -->
					<image v-if="c.CoverImgSmall && 0" :src="c.CoverImgSmall" style="width: 180rpx;height: 180rpx;"></image>
					<image v-else src="/static/default_course_logo.jpg" style="width: 180rpx;height: 180rpx;"></image>
				</view>
				<!-- 右侧课程说明和简介 -->
				<view class="uni-flex uni-column">
					<view class="text" style="height: 70rpx;text-align: left;padding-left: 20rpx;">
						<text style="font-size: 40rpx;">{{ c.CourseName }}</text>
					</view>
					<view style="height: 60rpx;text-align: left;padding-left: 20rpx;">主讲老师：{{ c.CoverTeacherName }}</view>
					<view class="uni-flex uni-row" style="margin-left: 20rpx;">
						<view style="-webkit-flex: 1;flex: 1;">
							<uni-icons type="eye" style="margin-right: 15rpx;"></uni-icons>
							{{ c.ScanCount }}
						</view>
						<view style="-webkit-flex: 1;flex: 1;">
							<uni-icons type="hand-thumbsup" style="margin-right: 15rpx;"></uni-icons>
							{{ c.PraiseCount }}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniCombox from '@/components/uni-combox/uni-combox';
import uniIcons from '@/components/uni-icons/uni-icons.vue';
import http from '@/common/request.js';

export default {
	components: { uniCombox, uniIcons },

	created() {
	
		this.reloadTerms();		

		this.reloadCourseType();
	},
	data() {
		return {
			
			selectCourseTypeIndex: 0,
			selectTermIndex: 0,
			list_course: [],
			list_term: [
				{
					SemesterName: '全部学期'
				}
			],

			list_course_type: [
				{
					CourseClassName: '全部课程'
				}
			]
		};
	},
	methods: {
		// 刷新课程列表
		reloadCourseItem() {
			let that = this;

			http.request({
				url: '/api/Student/GetMyCourseList',
				method:"POST",
				data:{
					semesterId: "",
					pageIndex: 1,
					orderByPostTime: 2,
					orderByScanCount: 0,
					orderByPraiseCount: 0, 
					orderByCollectCount: 0,
					isPublished: 1,
					courseClassId: "",
					classType: 0
				}
			}).then(r => {
				r = that.fr(r); 
				
				console.log(JSON.stringify(r))
				if (r.Code == 200) {
					that.list_course=r.Data || []
				}
			});
		},
		// 刷新课程信息
		reloadCourseType() {
			let that = this;

			http.request({
				url: '/api/Common/GetOpenCourseConfig'
			})
				.then(r => {
					r = r[1].data;
					console.log('返回值：', JSON.stringify(r));

					if (r.Code == 200) {
						that.list_course_type = r.Data || [];
					}
				})
				.catch(e => {
					console.log('error:', e);
				});
		},
		// 刷新学期信息
		reloadTerms() {
			let that = this;
			http.request({
				url: '/api/Common/GetSemester'
			}).then(r => {
				r = that.fr(r);
				if (r.Code == 200) {
					that.list_term = r.Data;
				}
			});
		},
		// 修改选中的课程
		courseTypeChange(e) {
			this.reloadCourseItem();
		},

		// 修改学期
		termChange(e) {
			this.reloadCourseItem();
		},
		bindMultiPickerColumnChange: function(e) {
			console.log(e);
			return false;
			console.log('修改的列为：' + e.detail.column + '，值为：' + e.detail.value);
			this.multiIndex[e.detail.column] = e.detail.value;
			switch (e.detail.column) {
				case 0: //拖动第1列
					switch (this.multiIndex[0]) {
						case 0:
							this.multiArray[1] = ['中国', '日本'];
							this.multiArray[2] = ['北京', '上海', '广州'];
							break;
						case 1:
							this.multiArray[1] = ['英国', '法国'];
							this.multiArray[2] = ['伦敦', '曼彻斯特'];
							break;
					}
					this.multiIndex.splice(1, 1, 0);
					this.multiIndex.splice(2, 1, 0);
					break;
				case 1: //拖动第2列
					switch (
						this.multiIndex[0] //判断第一列是什么
					) {
						case 0:
							switch (this.multiIndex[1]) {
								case 0:
									this.multiArray[2] = ['北京', '上海', '广州'];
									break;
								case 1:
									this.multiArray[2] = ['东京', '北海道'];
									break;
							}
							break;
						case 1:
							switch (this.multiIndex[1]) {
								case 0:
									this.multiArray[2] = ['伦敦', '曼彻斯特'];
									break;
								case 1:
									this.multiArray[2] = ['巴黎', '马赛'];
									break;
							}
							break;
					}
					this.multiIndex.splice(2, 1, 0);
					break;
			}
			this.$forceUpdate();
		},
		toCourseDetail() {
			uni.navigateTo({
				url: '/pages/students/course/courseDetail/courseDetail'
			});
		},
		testAxios() {
			uni.request({
				url: '/api/Common/GetOpenCourseConfig',
				success: r => {
					console.log(r);
				}
			});
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

.text {
	margin: 15rpx 10rpx;
	padding: 0 20rpx;
	background-color: #ebebeb;
	height: 70rpx;
	line-height: 70rpx;
	text-align: center;
	color: #777;
	font-size: 26rpx;
}

picker-view {
	width: 100%;
	height: 600upx;
	margin-top: 20upx;
}

.item {
	line-height: 100upx;
	text-align: center;
}
</style>
