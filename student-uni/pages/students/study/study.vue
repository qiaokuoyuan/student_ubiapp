<template>
	<view>
		<!-- 头部选择课程和学期 -->
		<view class="uni-flex uni-row">
			<view class="text">课程：</view>
			<picker style="margin-top: 10rpx;" @change="courseChange" range-key="CourseClassName" :value="selectCourseIndex" :range="list_course">
				<view class="uni-input">{{ list_course[selectCourseIndex].CourseClassName }}</view>
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
					
					<text style="font-size: 40rpx;">
						{{ c.CourseName }}
					</text>
					
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
			let r = {
				Code: 200,
				Data: {
					courstList: [
						{
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
							PostTime: '2020-02-06T17:35:52Z',
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
							ScanCount: 16,
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
						},
						{
							CourseCode: '723d7f10-56ef-487c-ae22-3de7eef55076',
							CourseName: '大数据开发',
							CourseType: 0,
							ClassType: 2,
							CourseClassId: '6d9e9a75-de9b-48a5-a282-028f50b82041',
							CourseVersion: '',
							UserId: '0f79635f-80c0-4a6e-a634-30b925a9413a',
							DepartmentId: '0fe80280-5839-46c5-a160-b1068f8251cc',
							ClassifyId: '',
							CoverImgBig: '/api/File/Down?fileCode=d8247fba-6eaa-4ae5-a89f-49cfd5bfe5c0.jpg&fileName=fm01.jpg',
							CoverImgSmall: 'http://ve.cnki.net/coeduApi/api/File/Down?fileCode=7e0c5c34-c131-42f5-ada5-b587fe0dd6e0.jpg&fileName=tp01.jpg',
							UnitId: 'a533e65d-0c4a-41c6-94d0-72861aa654cb',
							SemesterName: '2018-2019学年',
							SemesterId: '73bf7b76-b8fa-4674-b798-309e819f6f48',
							GradeId: null,
							GradeName: null,
							CourseClassifyId: 'bd1f9555-55a1-4ff4-917f-29b3d8753495',
							CourseClassifyName: '语文',
							Period: 1,
							CourseSource: 0,
							CourseScore: '',
							ElectCount: 0,
							NetElectCount: 0,
							TeachingForm: 1,
							StartTime: '0001-01-01T00:00:00',
							EndTime: '0001-01-01T00:00:00',
							ElectTarget: '',
							Accomplishment: '',
							Requirement: '',
							OtherContractors: '',
							SupportUnit: '',
							IsPublished: 1,
							PostTime: '2020-02-05T14:36:57Z',
							CoverTeacherName: '熊凡',
							CoverCourseName: '大数据开发',
							Cover:
								'%3Cdiv%20id%3D%22shootTarget%22%20class%3D%22cover-img%20selected%20first%22%20style%3D%22background-image%3A%20url(%26quot%3B%2FcoeduApi%2F%2Fapi%2FFile%2FDown%3FfileCode%3Dd8247fba-6eaa-4ae5-a89f-49cfd5bfe5c0.jpg%26amp%3BfileName%3Dfm01.jpg%26quot%3B)%3B%22%3E%3Cdiv%20class%3D%22cover-box%22%3E%3Cimg%20src%3D%22http%3A%2F%2Fve.cnki.net%2FcoeduApi%2F%2Fapi%2FFile%2FDown%3FfileCode%3D7e0c5c34-c131-42f5-ada5-b587fe0dd6e0.jpg%26amp%3BfileName%3Dtp01.jpg%22%3E%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22name-row%22%3E%3Ctextarea%20readonly%3D%22readonly%20%22%20maxlength%3D%2213%22%20placeholder%3D%22%E4%B8%BB%E6%A0%87%E9%A2%98%22%20class%3D%22editSpan%22%20style%3D%22border-color%3A%20transparent%3B%22%3E%E5%A4%A7%E6%95%B0%E6%8D%AE%E5%BC%80%E5%8F%91%3C%2Ftextarea%3E%20%3C!----%3E%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22subname-row%22%20style%3D%22visibility%3A%20visible%3B%22%3E%3Ctextarea%20readonly%3D%22readonly%20%22%20maxlength%3D%2216%22%20placeholder%3D%22%E5%89%AF%E6%A0%87%E9%A2%98%22%20class%3D%22editSpan%22%20style%3D%22border-color%3A%20transparent%3B%22%3E%3C%2Ftextarea%3E%20%3Ca%20class%3D%22del%22%20style%3D%22display%3A%20none%3B%22%3E%3C%2Fa%3E%20%3C!----%3E%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22author-row%22%3E%3Ctextarea%20readonly%3D%22readonly%20%22%20maxlength%3D%2230%22%20placeholder%3D%22%E4%BD%9C%E8%80%85%22%20class%3D%22editSpan%22%20style%3D%22border-color%3A%20transparent%3B%22%3E%E7%86%8A%E5%87%A1%3C%2Ftextarea%3E%20%3C!----%3E%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22support%22%3E%3Cdiv%20class%3D%22cover-logo%22%3E%3Cimg%20alt%3D%22%22%20height%3D%2236%22%20src%3D%22http%3A%2F%2Fve.cnki.net%2Fsso%2Fpic%2Fa533e65d-0c4a-41c6-94d0-72861aa654cb%3Ftype%3D2%22%3E%3C%2Fdiv%3E%20%3Cp%3E%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81%EF%BC%9A%E5%90%8C%E6%96%B9%E7%9F%A5%E7%BD%91%EF%BC%88%E5%8C%97%E4%BA%AC%EF%BC%89%E6%8A%80%E6%9C%AF%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%3C%2Fp%3E%3C%2Fdiv%3E%3C%2Fdiv%3E',
							SnapshotPlatformId: 1,
							SnapshotCover: 'f3d867b7-72cf-48d9-89fd-b5e0d90f5cd7.png',
							CoverUri: 'https://cachefiles-1256163091.cos.ap-beijing.myqcloud.com/f3d867b7-72cf-48d9-89fd-b5e0d90f5cd7.png',
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
							ScanCount: 17,
							PraiseCount: 0,
							CollectCount: 0,
							RealName: '熊凡12345',
							Position: null,
							DepartmentName: '天津分公司',
							UserDepartmentName: '研发部',
							UserBriefIntroduction: null,
							Logo: 'http://ve.cnki.net/sso/pic/0f79635f-80c0-4a6e-a634-30b925a9413a',
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
						},
						{
							CourseCode: 'a27e86db-4661-4d5e-8fc4-48b25bdd638b',
							CourseName: 'maven',
							CourseType: 0,
							ClassType: 2,
							CourseClassId: '71c46b19-051e-4c39-83d2-6171a3274e61',
							CourseVersion: '',
							UserId: '0f79635f-80c0-4a6e-a634-30b925a9413a',
							DepartmentId: 'c28f6f71-ffb7-4b26-8564-45d3fdf857d2',
							ClassifyId: '',
							CoverImgBig: '/api/File/Down?fileCode=2b35a982-bb11-4f28-b4b3-27222ed6a803.jpg&fileName=fm01.jpg',
							CoverImgSmall: 'http://ve.cnki.net/coeduApi/api/File/Down?fileCode=637f1908-48d6-4a8d-baca-0a5df51819d0.jpg&fileName=tp01.jpg',
							UnitId: 'a533e65d-0c4a-41c6-94d0-72861aa654cb',
							SemesterName: '2018-2019学年',
							SemesterId: '73bf7b76-b8fa-4674-b798-309e819f6f48',
							GradeId: null,
							GradeName: null,
							CourseClassifyId: '4ff8f52f-ee23-40b8-a4f6-eea248ece115',
							CourseClassifyName: '化学系基础课',
							Period: 1,
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
							PostTime: '2020-02-05T12:22:57Z',
							CoverTeacherName: '熊凡',
							CoverCourseName: 'm\na\nv\ne\nn构建工具',
							Cover:
								'%3Cdiv%20class%3D%22cover-img%20selected%20fourth%22%20style%3D%22background-image%3A%20url(%26quot%3Bhttp%3A%2F%2Fve.cnki.net%2FcoeduApi%2Fapi%2FFile%2FDown%3FfileCode%3D2b35a982-bb11-4f28-b4b3-27222ed6a803.jpg%26amp%3BfileName%3Dfm01.jpg%26quot%3B)%3B%22%3E%3Cdiv%20class%3D%22cover-box%22%3E%3Cimg%20src%3D%22http%3A%2F%2Fve.cnki.net%2FcoeduApi%2Fapi%2FFile%2FDown%3FfileCode%3D637f1908-48d6-4a8d-baca-0a5df51819d0.jpg%26amp%3BfileName%3Dtp01.jpg%22%3E%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22name-row%22%3E%3Ctextarea%20readonly%3D%22readonly%20%22%20maxlength%3D%2213%22%20placeholder%3D%22%E4%B8%BB%E6%A0%87%E9%A2%98%22%20class%3D%22editSpan%22%3Em%0Aa%0Av%0Ae%0An%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7%3C%2Ftextarea%3E%20%3C!----%3E%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22subname-row%22%20style%3D%22visibility%3A%20visible%3B%22%3E%3Ctextarea%20readonly%3D%22readonly%20%22%20maxlength%3D%2216%22%20placeholder%3D%22%E5%89%AF%E6%A0%87%E9%A2%98%22%20class%3D%22editSpan%22%3E%3C%2Ftextarea%3E%20%20%3C!----%3E%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22author-row%22%3E%3Ctextarea%20readonly%3D%22readonly%20%22%20maxlength%3D%2230%22%20placeholder%3D%22%E4%BD%9C%E8%80%85%22%20class%3D%22editSpan%22%3E%E7%86%8A%E5%87%A1%3C%2Ftextarea%3E%20%3C!----%3E%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22support%22%3E%3Cdiv%20class%3D%22cover-logo%22%3E%3Cimg%20alt%3D%22%22%20height%3D%2236%22%20src%3D%22http%3A%2F%2Fve.cnki.net%2Fsso%2Fpic%2Fa533e65d-0c4a-41c6-94d0-72861aa654cb%3Ftype%3D2%22%3E%3C%2Fdiv%3E%20%3Cp%3E%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81%EF%BC%9A%E5%90%8C%E6%96%B9%E7%9F%A5%E7%BD%91%EF%BC%88%E5%8C%97%E4%BA%AC%EF%BC%89%E6%8A%80%E6%9C%AF%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%3C%2Fp%3E%3C%2Fdiv%3E%3C%2Fdiv%3E',
							SnapshotPlatformId: 0,
							SnapshotCover: '',
							CoverUri: 'http://ve.cnki.net//coeduApi/api/file/down?fileCode=',
							Preface: '',
							PrefaceTitle: '',
							Reason: '',
							CheckApplyTime: '0001-01-01T00:00:00',
							Template: 0,
							SubTitle: '',
							SubtitleCss: '%7B%7D',
							CoverCourseNameCss: '%7B%7D',
							CoverTeacherNameCss: '%7B%7D',
							Plate: 3,
							Graphics: 0,
							ScanCount: 12,
							PraiseCount: 0,
							CollectCount: 0,
							RealName: '熊凡12345',
							Position: null,
							DepartmentName: '上海分公司',
							UserDepartmentName: '研发部',
							UserBriefIntroduction: null,
							Logo: 'http://ve.cnki.net/sso/pic/0f79635f-80c0-4a6e-a634-30b925a9413a',
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
							CourseIntroduction: '讲解maven的使用',
							PublishCataLogNum: 0,
							IsThumb: false,
							CanSelect: false,
							IsOpenStudentWorks: true,
							BaseCourseCode: null,
							Stage: null,
							SubjectName: null,
							IsDirector: false,
							WorkAutoPublish: 0
						},
						{
							CourseCode: '22bdf3cb-b950-4ac3-803c-2be67f941095',
							CourseName: '云计算与技术运用',
							CourseType: 0,
							ClassType: 2,
							CourseClassId: 'fb7b516c-12ae-46a9-9291-34bdb407e01f',
							CourseVersion: '',
							UserId: '0f79635f-80c0-4a6e-a634-30b925a9413a',
							DepartmentId: null,
							ClassifyId: '',
							CoverImgBig: '/api/File/Down?fileCode=d8247fba-6eaa-4ae5-a89f-49cfd5bfe5c0.jpg&fileName=fm01.jpg',
							CoverImgSmall: 'http://ve.cnki.net/coeduApi/api/File/Down?fileCode=7e0c5c34-c131-42f5-ada5-b587fe0dd6e0.jpg&fileName=tp01.jpg',
							UnitId: 'a533e65d-0c4a-41c6-94d0-72861aa654cb',
							SemesterName: '',
							SemesterId: '',
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
							ElectTarget: '对云计算有一定基础的学员',
							Accomplishment: '',
							Requirement:
								'学习本课程前应具备以下几个方面的预备知识：\n l） 理解计算机组成原理的基本知识；\n2） 具备基础的操作系统知识，掌握基本Linux操作命令；\n3） 理解计算机网络的基本原理；\n4） 掌握基础的Java编程语言。',
							OtherContractors: '',
							SupportUnit: '',
							IsPublished: 1,
							PostTime: '2020-01-03T14:18:19Z',
							CoverTeacherName: '熊凡',
							CoverCourseName: '云计算与技术运用',
							Cover:
								'%3Cdiv%20id%3D%22shootTarget%22%20class%3D%22cover-img%20selected%20first%22%20style%3D%22background-image%3A%20url(%26quot%3B%2FcoeduApi%2F%2Fapi%2FFile%2FDown%3FfileCode%3Dd8247fba-6eaa-4ae5-a89f-49cfd5bfe5c0.jpg%26amp%3BfileName%3Dfm01.jpg%26quot%3B)%3B%22%3E%3Cdiv%20class%3D%22cover-box%22%3E%3Cimg%20src%3D%22http%3A%2F%2Fve.cnki.net%2FcoeduApi%2F%2Fapi%2FFile%2FDown%3FfileCode%3D7e0c5c34-c131-42f5-ada5-b587fe0dd6e0.jpg%26amp%3BfileName%3Dtp01.jpg%22%3E%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22name-row%22%3E%3Ctextarea%20readonly%3D%22readonly%20%22%20maxlength%3D%2213%22%20placeholder%3D%22%E4%B8%BB%E6%A0%87%E9%A2%98%22%20class%3D%22editSpan%22%20style%3D%22border-color%3A%20transparent%3B%22%3E%E4%BA%91%E8%AE%A1%E7%AE%97%E4%B8%8E%E6%8A%80%E6%9C%AF%E8%BF%90%E7%94%A8%3C%2Ftextarea%3E%20%3C!----%3E%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22subname-row%22%20style%3D%22visibility%3A%20visible%3B%22%3E%3Ctextarea%20readonly%3D%22readonly%20%22%20maxlength%3D%2216%22%20placeholder%3D%22%E5%89%AF%E6%A0%87%E9%A2%98%22%20class%3D%22editSpan%22%20style%3D%22border-color%3A%20transparent%3B%22%3E%3C%2Ftextarea%3E%20%3Ca%20class%3D%22del%22%20style%3D%22display%3A%20none%3B%22%3E%3C%2Fa%3E%20%3C!----%3E%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22author-row%22%3E%3Ctextarea%20readonly%3D%22readonly%20%22%20maxlength%3D%2230%22%20placeholder%3D%22%E4%BD%9C%E8%80%85%22%20class%3D%22editSpan%22%20style%3D%22border-color%3A%20transparent%3B%22%3E%E7%86%8A%E5%87%A1%3C%2Ftextarea%3E%20%3C!----%3E%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22support%22%3E%3Cdiv%20class%3D%22cover-logo%22%3E%3Cimg%20alt%3D%22%22%20height%3D%2236%22%20src%3D%22http%3A%2F%2Fve.cnki.net%2Fsso%2Fpic%2Fa533e65d-0c4a-41c6-94d0-72861aa654cb%3Ftype%3D2%22%3E%3C%2Fdiv%3E%20%3Cp%3E%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81%EF%BC%9A%E5%90%8C%E6%96%B9%E7%9F%A5%E7%BD%91%EF%BC%88%E5%8C%97%E4%BA%AC%EF%BC%89%E6%8A%80%E6%9C%AF%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%3C%2Fp%3E%3C%2Fdiv%3E%3C%2Fdiv%3E',
							SnapshotPlatformId: 0,
							SnapshotCover: '',
							CoverUri: 'http://ve.cnki.net//coeduApi/api/file/down?fileCode=',
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
							ScanCount: 23,
							PraiseCount: 0,
							CollectCount: 0,
							RealName: '熊凡12345',
							Position: null,
							DepartmentName: null,
							UserDepartmentName: '研发部',
							UserBriefIntroduction: null,
							Logo: 'http://ve.cnki.net/sso/pic/0f79635f-80c0-4a6e-a634-30b925a9413a',
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
							CourseIntroduction:
								'云计算是继1980年代大型计算机到客户端-服务器的大转变之后信息技术领域又一次巨变。从技术上看,大数据与云计算的关系就像一枚硬币的正反面一样密不可分。大数据的特色在于对海量数据的挖掘, 但它必须依托云计算的分布式处理、分布式数据库、云存储和虚拟化技术。“云计算技术与应用”课程在介绍云计算历史、发展及趋势的基础上，重点介绍云计算关键技术、基础架构及各种主流解决方案。课程主要内容包括：云计算概述、云计算关键技术、云服务体系、云计算主流解决方案（Google云计算、Amazon云计算、IBM云计算等）、开源云计算与大数据处理平台（OpenStack、Hadoop等）。由于云计算是近年来计算机科学技术中的研究和应用热点，技术平台更新快，因此本课程会紧密跟踪主流云计算技术及发展，拓宽学生知识面。',
							PublishCataLogNum: 0,
							IsThumb: false,
							CanSelect: false,
							IsOpenStudentWorks: true,
							BaseCourseCode: null,
							Stage: null,
							SubjectName: null,
							IsDirector: false,
							WorkAutoPublish: 0
						},
						{
							CourseCode: '9c90e38f-f886-49ad-83e5-8bf460a4ab61',
							CourseName: 'xml研究',
							CourseType: 0,
							ClassType: 2,
							CourseClassId: '6d9e9a75-de9b-48a5-a282-028f50b82041',
							CourseVersion: '',
							UserId: '0f79635f-80c0-4a6e-a634-30b925a9413a',
							DepartmentId: null,
							ClassifyId: '',
							CoverImgBig: '/api/File/Down?fileCode=d8247fba-6eaa-4ae5-a89f-49cfd5bfe5c0.jpg&fileName=fm01.jpg',
							CoverImgSmall: 'http://ve.cnki.net/coeduApi/api/File/Down?fileCode=7e0c5c34-c131-42f5-ada5-b587fe0dd6e0.jpg&fileName=tp01.jpg',
							UnitId: 'a533e65d-0c4a-41c6-94d0-72861aa654cb',
							SemesterName: '2018-2019学年',
							SemesterId: '73bf7b76-b8fa-4674-b798-309e819f6f48',
							GradeId: null,
							GradeName: null,
							CourseClassifyId: 'c0cb2ce1-68f9-4ed5-86fc-36a92d297f71',
							CourseClassifyName: '数学',
							Period: 1,
							CourseSource: 0,
							CourseScore: '',
							ElectCount: 0,
							NetElectCount: 0,
							TeachingForm: 1,
							StartTime: '0001-01-01T00:00:00',
							EndTime: '0001-01-01T00:00:00',
							ElectTarget: '',
							Accomplishment: '',
							Requirement: '',
							OtherContractors: '',
							SupportUnit: '',
							IsPublished: 1,
							PostTime: '2019-09-25T11:00:38Z',
							CoverTeacherName: '熊凡',
							CoverCourseName: 'xml研究',
							Cover:
								'%3Cdiv%20class%3D%22cover-img%20selected%20first%22%20style%3D%22background-image%3A%20url(%26quot%3B%2FcoeduApi%2F%2Fapi%2FFile%2FDown%3FfileCode%3Dd8247fba-6eaa-4ae5-a89f-49cfd5bfe5c0.jpg%26amp%3BfileName%3Dfm01.jpg%26quot%3B)%3B%22%3E%3Cdiv%20class%3D%22cover-box%22%3E%3Cimg%20src%3D%22%2FcoeduApi%2F%2Fapi%2FFile%2FDown%3FfileCode%3D7e0c5c34-c131-42f5-ada5-b587fe0dd6e0.jpg%26amp%3BfileName%3Dtp01.jpg%22%3E%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22name-row%22%3E%3Ctextarea%20readonly%3D%22readonly%20%22%20maxlength%3D%2213%22%20placeholder%3D%22%E4%B8%BB%E6%A0%87%E9%A2%98%22%20class%3D%22editSpan%22%3Exml%E7%A0%94%E7%A9%B6%3C%2Ftextarea%3E%20%3C!----%3E%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22subname-row%22%20style%3D%22visibility%3A%20visible%3B%22%3E%3Ctextarea%20readonly%3D%22readonly%20%22%20maxlength%3D%2216%22%20placeholder%3D%22%E5%89%AF%E6%A0%87%E9%A2%98%22%20class%3D%22editSpan%22%3E%3C%2Ftextarea%3E%20%20%3C!----%3E%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22author-row%22%3E%3Ctextarea%20readonly%3D%22readonly%20%22%20maxlength%3D%2230%22%20placeholder%3D%22%E4%BD%9C%E8%80%85%22%20class%3D%22editSpan%22%3E%E7%86%8A%E5%87%A1%3C%2Ftextarea%3E%20%3C!----%3E%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22support%22%3E%3Cdiv%20class%3D%22cover-logo%22%3E%3Cimg%20alt%3D%22%22%20height%3D%2236%22%20src%3D%22http%3A%2F%2Fve.cnki.net%2Fsso%2Fpic%2Fa533e65d-0c4a-41c6-94d0-72861aa654cb%3Ftype%3D2%22%3E%3C%2Fdiv%3E%20%3Cp%3E%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81%EF%BC%9A%E5%90%8C%E6%96%B9%E7%9F%A5%E7%BD%91%EF%BC%88%E5%8C%97%E4%BA%AC%EF%BC%89%E6%8A%80%E6%9C%AF%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%3C%2Fp%3E%3C%2Fdiv%3E%3C%2Fdiv%3E',
							SnapshotPlatformId: 0,
							SnapshotCover: '',
							CoverUri: 'http://ve.cnki.net//coeduApi/api/file/down?fileCode=',
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
							ScanCount: 36,
							PraiseCount: 0,
							CollectCount: 0,
							RealName: '熊凡12345',
							Position: null,
							DepartmentName: null,
							UserDepartmentName: '研发部',
							UserBriefIntroduction: null,
							Logo: 'http://ve.cnki.net/sso/pic/0f79635f-80c0-4a6e-a634-30b925a9413a',
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
						}
					],
					count: 5
				},
				Error: '获取数据成功！',
				Other: null,
				IsMult: false,
				Ext: null,
				Extension: null,
				Total: 0
			};

			if (r.Code == 200) {
				this.list_course_items = r.Data.courstList;
			}
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
