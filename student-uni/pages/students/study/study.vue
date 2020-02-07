<template>
	<view>
		<!-- 头部选择课程和学期 -->
		<view class="uni-flex uni-row">
			<view class="text">课程：</view>
			<picker @change="courseChange" range-key="CourseClassName" :value="selectCourseIndex" :range="list_course">
				<view class="uni-input">{{ list_course[selectCourseIndex].CourseClassName }}</view>
			</picker>
			<view class="text">学期：</view>
			<picker @change="termChange" range-key="SemesterName" :value="selectTermIndex" :range="list_term">
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
					<view class="text" style="height: 60rpx;text-align: left;padding-left: 20rpx;padding-top: 10rpx;">{{ c.CourseName }}</view>
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

export default {
	components: { uniCombox, uniIcons },

	created() {
		this.reloadCourses();
		this.reloadTerms();
		this.reloadCourseItem();
	},
	data() {
		return {
			// 是否显示课程和学期选择器
			show_picker: true,
			picker_style: `height: ${Math.round(uni.getSystemInfoSync().screenWidth / (750 / 100))}px;`,
			select_picker_indexes: [0, 0],
			selectCourseIndex: 0,
			selectTermIndex: 0,
			list_course: [
				{
					Id: 'fb7b516c-12ae-46a9-9291-34bdb407e01f',
					CourseClassName: '业务工作课'
				},
				{
					Id: '6d9e9a75-de9b-48a5-a282-028f50b82041',
					CourseClassName: '公共基础课'
				},
				{
					Id: '71c46b19-051e-4c39-83d2-6171a3274e61',
					CourseClassName: '专业基础课'
				},
				{
					Id: 'bd15cd38-5aab-4cfa-a1bf-c1d18ab9de1b',
					CourseClassName: '专业技能课'
				},
				{
					Id: '8deb1aa9-d3ea-47ed-ba87-3905adaa396d',
					CourseClassName: '实训实践课'
				}
			],
			list_term: [
				{
					Id: '572dc93f-0c68-4dba-9a38-2a2a72e1f9fd',
					SemesterName: '2017-2018学年'
				},
				{
					SemesterName: '学期',
					Id: '61b46231-319d-4f00-a91a-b99758fb9f83'
				},
				{
					SemesterName: '2018-2019学年',
					Id: '73bf7b76-b8fa-4674-b798-309e819f6f48'
				}
			],
			multiIndex: [0, 0, 0],
			multiArray: [['亚洲', '欧洲'], ['中国', '日本'], ['北京', '上海', '广州']],
			// 当前tab
			currentTab: '',
			currentTerm: '',
			list_course_items: [],
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
		// 刷新课程列表
		reloadCourseItem() {
			this.list_course_items = new Array(20).fill({
				CourseCode: '5a7f784b-81d8-464c-9f66-e900059c1b5a',
				CourseName: '测试学生端课程',
				CourseType: 0,
				ClassType: 2,
				CourseClassId: '6d9e9a75-de9b-48a5-a282-028f50b82041',
				CourseVersion: '',
				UserId: '8eaa9554-2d42-45cc-b0cb-20baa02021c0',
				DepartmentId: null,
				ClassifyId: '',
				CoverImgBig: '/api/File/Down?fileCode=d8247fba-6eaa-4ae5-a89f-49cfd5bfe5c0.jpg&fileName=fm01.jpg',
				CoverImgSmall: 'http://ve.cnki.net/coeduApi/api/File/Down?fileCode=7e0c5c34-c131-42f5-ada5-b587fe0dd6e0.jpg&fileName=tp01.jpg',
				UnitId: 'a533e65d-0c4a-41c6-94d0-72861aa654cb',
				SemesterName: '2017-2018学年',
				SemesterId: '572dc93f-0c68-4dba-9a38-2a2a72e1f9fd',
				GradeId: null,
				GradeName: null,
				CourseClassifyId: '',
				CourseClassifyName: '',
				Period: 0,
				CourseSource: 0,
				CourseScore: '',
				ElectCount: 0,
				NetElectCount: 0,
				TeachingForm: 0,
				StartTime: '0001-01-01T00:00:00',
				EndTime: '0001-01-01T00:00:00',
				ElectTarget: '',
				Accomplishment: '',
				Requirement: '',
				OtherContractors: '',
				SupportUnit: '',
				IsPublished: 1,
				PostTime: '2020-02-03T09:24:08Z',
				CoverTeacherName: '乔阔远',
				CoverCourseName: '测试学生端课程',
				Cover:
					'%3Cdiv%20id%3D%22shootTarget%22%20class%3D%22cover-img%20selected%20first%22%20style%3D%22background-image%3A%20url(%26quot%3B%2FcoeduApi%2F%2Fapi%2FFile%2FDown%3FfileCode%3Dd8247fba-6eaa-4ae5-a89f-49cfd5bfe5c0.jpg%26amp%3BfileName%3Dfm01.jpg%26quot%3B)%3B%22%3E%3Cdiv%20class%3D%22cover-box%22%3E%3Cimg%20src%3D%22http%3A%2F%2Fve.cnki.net%2FcoeduApi%2F%2Fapi%2FFile%2FDown%3FfileCode%3D7e0c5c34-c131-42f5-ada5-b587fe0dd6e0.jpg%26amp%3BfileName%3Dtp01.jpg%22%3E%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22name-row%22%3E%3Ctextarea%20readonly%3D%22readonly%20%22%20maxlength%3D%2213%22%20placeholder%3D%22%E4%B8%BB%E6%A0%87%E9%A2%98%22%20class%3D%22editSpan%22%20style%3D%22border-color%3A%20transparent%3B%22%3E%E6%B5%8B%E8%AF%95%E5%AD%A6%E7%94%9F%E7%AB%AF%E8%AF%BE%E7%A8%8B%3C%2Ftextarea%3E%20%3C!----%3E%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22subname-row%22%20style%3D%22visibility%3A%20visible%3B%22%3E%3Ctextarea%20readonly%3D%22readonly%20%22%20maxlength%3D%2216%22%20placeholder%3D%22%E5%89%AF%E6%A0%87%E9%A2%98%22%20class%3D%22editSpan%22%20style%3D%22border-color%3A%20transparent%3B%22%3E%3C%2Ftextarea%3E%20%3Ca%20class%3D%22del%22%20style%3D%22display%3A%20none%3B%22%3E%3C%2Fa%3E%20%3C!----%3E%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22author-row%22%3E%3Ctextarea%20readonly%3D%22readonly%20%22%20maxlength%3D%2230%22%20placeholder%3D%22%E4%BD%9C%E8%80%85%22%20class%3D%22editSpan%22%20style%3D%22border-color%3A%20transparent%3B%22%3E%E4%B9%94%E9%98%94%E8%BF%9C%3C%2Ftextarea%3E%20%3C!----%3E%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22support%22%3E%3Cdiv%20class%3D%22cover-logo%22%3E%3Cimg%20alt%3D%22%22%20src%3D%22http%3A%2F%2Fve.cnki.net%2Fsso%2Fpic%2Fa533e65d-0c4a-41c6-94d0-72861aa654cb%3Ftype%3D2%22%20height%3D%2236%22%3E%3C%2Fdiv%3E%20%3Cp%3E%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81%EF%BC%9A%E5%90%8C%E6%96%B9%E7%9F%A5%E7%BD%91%EF%BC%88%E5%8C%97%E4%BA%AC%EF%BC%89%E6%8A%80%E6%9C%AF%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%3C%2Fp%3E%3C%2Fdiv%3E%3C%2Fdiv%3E',
				SnapshotPlatformId: 1,
				SnapshotCover: 'ee2c7de0-9b62-4be9-9c45-815f856c18f8.png',
				CoverUri: 'https://cachefiles-1256163091.cos.ap-beijing.myqcloud.com/ee2c7de0-9b62-4be9-9c45-815f856c18f8.png',
				Preface: '',
				PrefaceTitle: '',
				Reason: '',
				CheckApplyTime: '0001-01-01T00:00:00',
				Template: 0,
				SubTitle: '',
				SubtitleCss: '%7B%7D',
				CoverCourseNameCss: '%7B%7D',
				CoverTeacherNameCss: '%7B%7D',
				Plate: 0,
				Graphics: 0,
				ScanCount: 4,
				PraiseCount: 0,
				CollectCount: 0,
				RealName: '乔阔远',
				Position: null,
				DepartmentName: null,
				UserDepartmentName: '研发部',
				UserBriefIntroduction: null,
				Logo: 'http://ve.cnki.net/sso/pic/8eaa9554-2d42-45cc-b0cb-20baa02021c0',
				OpenCourseDepartmentList: null,
				MemberList: null,
				DirectorList: null,
				CourseDirector: null,
				GradeOrClassList: null,
				subjectList: null,
				majorList: null,
				CourseCategoryName: null,
				CourseCategory: 1,
				StudyState: 0,
				CourseIntroduction: '',
				PublishCataLogNum: 0,
				IsThumb: false,
				CanSelect: false,
				IsOpenStudentWorks: true,
				BaseCourseCode: null,
				Stage: null,
				SubjectName: null,
				IsDirector: false,
				WorkAutoPublish: 0
			});
		},
		// 刷新课程信息
		reloadCourses() {
			this.multiArray[0] = [
				{
					Id: 'fb7b516c-12ae-46a9-9291-34bdb407e01f',
					CourseClassName: '业务工作课'
				},
				{
					Id: '6d9e9a75-de9b-48a5-a282-028f50b82041',
					CourseClassName: '公共基础课'
				},
				{
					Id: '71c46b19-051e-4c39-83d2-6171a3274e61',
					CourseClassName: '专业基础课'
				},
				{
					Id: 'bd15cd38-5aab-4cfa-a1bf-c1d18ab9de1b',
					CourseClassName: '专业技能课'
				},
				{
					Id: '8deb1aa9-d3ea-47ed-ba87-3905adaa396d',
					CourseClassName: '实训实践课'
				}
			];
		},
		// 刷新学期信息
		reloadTerms() {
			this.multiArray[1] = [
				{
					Id: '572dc93f-0c68-4dba-9a38-2a2a72e1f9fd',
					SemesterName: '2017-2018学年'
				},
				{
					SemesterName: '学期',
					Id: '61b46231-319d-4f00-a91a-b99758fb9f83'
				},
				{
					SemesterName: '2018-2019学年',
					Id: '73bf7b76-b8fa-4674-b798-309e819f6f48'
				}
			];
		},
		// 修改选中的课程
		courseChange(e) {
			this.selectCourseIndex = e.target.value;
		},

		// 修改学期
		termChange(e) {
			this.selectTermIndex = e.target.value;
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
