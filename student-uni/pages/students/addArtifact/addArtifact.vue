<template>
	<view>
		<uni-nav-bar :statusBar="true" title="作品创作"></uni-nav-bar>
		<view><uni-steps :options="list1" style="margin: 30rpx;" active-color="#007AFF" :active="step" /></view>

		<view class="" style="margin: 30rpx;">
			<!-- 内容编创页面 -->
			<view class="" v-show="step == 0"><myeditor ref="editor" @contentchange="contentchange"></myeditor></view>

			<!-- 选择课程-->
			<view class="" v-show="step == 1">
				<view class="" v-for="(c, ci) in list_course" :key="ci">
					<view class="" @click="selectCourse(c)" style="height: 100rpx; margin-left: 30rpx;">
						<uni-icons style="line-height: 100rpx;" type="circle-filled" v-if="select_course_id == c.CourseCode"></uni-icons>
						<uni-icons style="line-height: 100rpx;" type="circle" v-else></uni-icons>
						<text style="line-height: 100rpx; margin-left: 20rpx; font-size: larger;">{{ c.CourseName }}</text>
					</view>
				</view>
			</view>

			<!-- 选择成员、组长、指导教师页面 -->
			<view class="" v-show="step == 2">
				<uni-section type="line" title="指导教师"></uni-section>
				<view class="">
					<view>
						{{
							list_jiaoshi
								.map(e => {
									return e.label;
								})
								.join(',')
						}}
						<uni-icons style="margin-left: 50rpx;" type="personadd" @click="(select_user_type = 'jiaoshi'), (show_drawer = true)" size="30"></uni-icons>
					</view>
				</view>
				<uni-section type="line" title="组长"></uni-section>
				<view class="">
					<view>
						{{
							list_zuzhang
								.map(e => {
									return e.label;
								})
								.join(',')
						}}

						<uni-icons style="margin-left: 50rpx;" type="personadd" @click="(select_user_type = 'zuzhang'), (show_drawer = true)" size="30"></uni-icons>
					</view>
				</view>
				<uni-section type="line" title="成员"></uni-section>
				<view class="">
					<view>
						{{
							list_chengyuan
								.map(e => {
									return e.label;
								})
								.join(',')
						}}
					</view>
					<uni-icons style="margin-left: 50rpx;" type="personadd" @click="(select_user_type = 'chengyuan'), (show_drawer = true)" size="30"></uni-icons>
				</view>
			</view>

			<!-- 选择封面、关键词页面 -->
			<view class="" v-show="step == 3">
				<view class="title"><text class="uni-form-item__title">作品标题</text></view>
				<view class="uni-input-wrapper"><input class="uni-input" v-model="title" focus placeholder="作品标题" /></view>

				<button type="primary" @click="chooseCover()">选择封面</button>
			</view>
		</view>

		<!-- 下方按钮 -->
		<view class="" style="margin: 30rpx; margin-top: 40rpx;">
			<button type="primary" style="margin-bottom: 30rpx;" @click="step = step - 1" v-if="step > 0">上一步</button>
			<button type="primary" style="margin-bottom: 30rpx;" @click="step = step + 1" v-if="step < 3">下一步</button>
			<button type="warn" @click="submitArtifact()" v-if="step == 3">提交</button>
		</view>

		<!-- 选择人员抽屉 -->

		<uni-drawer :visible="show_drawer" @close="show_drawer = false" style="height: 100%; overflow: scroll;">
			<!-- 如果是选择老师 -->
			<view
				class=""
				v-for="(u, ui) in list_all_teachers"
				:key="ui"
				style="height: 80rpx; margin-left: 20rpx; margin-top: 40rpx;"
				@click="checkUser(u)"
				v-if="select_user_type == 'jiaoshi'"
			>
				<uni-icons style="line-height: 80rpx; " type="circle-filled" v-if="isUserChecked(u)"></uni-icons>
				<uni-icons style="line-height: 80rpx; " type="circle" v-else></uni-icons>

				<text style="line-height: 80rpx; margin-left: 30rpx;">{{ u.label }}</text>
			</view>

			<!-- 如果是选择学生 -->
			<view
				class=""
				v-for="(u, ui) in list_users"
				:key="ui"
				style="height: 80rpx; margin-left: 20rpx; margin-top: 40rpx;"
				@click="checkUser(u)"
				v-if="select_user_type == 'zuzhang' || select_user_type == 'chengyuan'"
			>
				<uni-icons style="line-height: 80rpx; " type="circle-filled" v-if="isUserChecked(u)"></uni-icons>
				<uni-icons style="line-height: 80rpx; " type="circle" v-else></uni-icons>

				<text style="line-height: 80rpx; margin-left: 30rpx;">{{ u.label }}</text>
			</view>
		</uni-drawer>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import http from '@/common/request.js';
import uniSteps from '@/components/uni-steps/uni-steps.vue';
import myeditor from '../../../components/student/editor.vue';
import uniSection from '@/components/uni-section/uni-section.vue';
import uniIcons from '@/components/uni-icons/uni-icons.vue';
import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
import uniIndexedList from '@/components/uni-indexed-list/uni-indexed-list.vue';
import cnchar from 'cnchar';

export default {
	components: {
		uniSteps,
		myeditor,
		uniSection,
		uniIcons,
		uniDrawer,
		uniIndexedList,
		uniNavBar
	},

	created() {},
	watch: {
		step(v) {
			console.log('step=>', v);
			// 如过步骤为刷新课程
			if (v == 1) {
				this.reloadCourse();
			}

			// 如果是选择成员
			if (v == 2) {
				this.reloadUsers();
				this.reload_all_teachers();
			}
		}
	},
	data() {
		return {
			select_teacher_or_student: '',
			list_users: [],
			list_all_teachers: [],

			// 选择人员的模式 （jiaoshi/chengyuan/zuzhang）
			select_user_type: '',

			// 编辑器内容
			editor_content_html: '',
			// 是否显示人员抽屉
			show_drawer: false,
			step: 0,

			// 课程列表
			list_course: [],

			// 作品成员
			list_chengyuan: [],

			// 作品组长
			list_zuzhang: [],

			// 作品组长
			list_jiaoshi: [],

			// 选中的课程id
			select_course_id: '',

			// 作品内容
			content: '',

			// 作品名称
			title: '',

			// 步骤条
			list1: [
				{
					title: '内容编创'
				},
				{
					title: '选择课程'
				},
				{
					title: '选择成员'
				},
				{
					title: '上传封面'
				}
			]
		};
	},
	methods: {
		// 选择课程
		selectCourse(item) {
			this.select_course_id = item.CourseCode;
		},
		// 刷新所有教师
		reload_all_teachers() {
			let that = this;
			http.request({
				url: `/api/Course/GetCourseMemberTree?courseCode=${that.select_course_id}&isAddAuthor=1`
			}).then(r => {
				console.log('GetCourseMemberTree====>', JSON.stringify(r));
				r = that.fr(r);

				that.list_all_teachers = r.Data.children;
				console.log('list_all_teachers', JSON.stringify(that.list_all_teachers));
			});
		},

		// 提交作品
		submitArtifact() {
			let that = this;

			let users = [];

			// 将成员添加进去
			that.list_zuzhang.forEach(e => {
				users.push({
					Type: 0,
					UserId: e.id || '',
					RealName: e.label || '',
					DepartmentName: e.deptName || ''
				});
			});
			that.list_chengyuan.forEach(e => {
				users.push({
					Type: 1,
					UserId: e.id || '',
					RealName: e.label || '',
					DepartmentName: e.deptName || ''
				});
			});
			that.list_jiaoshi.forEach(e => {
				users.push({
					Type: 2,
					UserId: e.id || '',
					RealName: e.label || '',
					DepartmentName: e.deptName || ''
				});
			});

			console.log('title==>', that.title);
			http.request({
				url: '/api/StudentWork/AddStudentWork',
				method: 'POST',
				data: {
					StudentWorkName: that.title,
					CourseCode: that.select_course_id,
					Template: 1,
					ReviewFlag: 2,
					StudentWorkType: 2,
					Cover: '',
					KeyWords: '',
					Content: that.content,
					StudentWorkMember: users,
					Content: that.editor_content_html
				}
			}).then(r => {
				r = that.fr(r);
				if (r.Code == 200) {
					uni.showToast({
						title: '提交成功',
						icon: 'none'
					});
					// 提交成功后调整到我的作品页面
					uni.switchTab({
						url: '../myArtifact/myArtifact'
					});
				} else {
					uni.showToast({
						title: '提交失败',
						icon: 'none'
					});
				}
			});
		},
		// 选中一个用户
		checkUser(user) {
			let that = this;
			let f = (u, list) => {
				let is_ck = list.find(e => {
					return e.id == u.id;
				});
				if (is_ck) {
					// 如过已经包含,则去除
					list = list.filter(e => {
						return e.id != u.id;
					});
				} else {
					// 如过未包含,则添加到数组中
					list.push(u);
				}

				return list;
			};

			if (this.select_user_type == 'jiaoshi') {
				this.list_jiaoshi = f(user, this.list_jiaoshi);
			}
			if (this.select_user_type == 'zuzhang') {
				this.list_zuzhang = f(user, this.list_zuzhang);
			}
			if (this.select_user_type == 'chengyuan') {
				this.list_chengyuan = f(user, this.list_chengyuan);
			}
		},
		// 用户是否被选中
		isUserChecked(user) {
			// 如过当前是选择组长
			if (this.select_user_type == 'zuzhang') {
				return (
					this.list_zuzhang
						.map(e => {
							return e.id;
						})
						.join(',')
						.indexOf(user.id) >= 0
				);
			}

			// 如果是选择成员
			if (this.select_user_type == 'chengyuan') {
				return (
					this.list_chengyuan
						.map(e => {
							return e.id;
						})
						.join(',')
						.indexOf(user.id) >= 0
				);
			}

			// 如过shi选择教师
			if (this.select_user_type == 'jiaoshi') {
				return (
					this.list_jiaoshi
						.map(e => {
							return e.id;
						})
						.join(',')
						.indexOf(user.id) >= 0
				);
			}

			return true;
		},
		// 编辑器内容发生变化
		contentchange() {
			if (this.$refs.editor.content_html) {
				this.editor_content_html = this.$refs.editor.content_html;
				console.log('editor_content_html', this.editor_content_html);
			}
		},
		// 上传封面
		chooseCover() {
			let that = this;

			// plus.gallery.pick(
			// 	e => {
			// 		console.log('plus.gallery.pick 1==>', e);

			// 		uni.uploadFile({
			// 			url: 'http://ve.cnki.net/coeduApi/api/File/Upload', //https://kt.cnki.net/subjectApi/api/File/Upload
			// 			filePath: e,
			// 			name: 'xxxxxxxxxxxxxxxxxxxxx',
			// 			complete(r) {
			// 				console.log(JSON.stringify(r));
			// 			}
			// 		});
			// 	},
			// 	e => {
			// 		console.log('plus.gallery.pick 2==>', e);
			// 	},
			// 	e => {
			// 		console.log('plus.gallery.pick 3==>', e);
			// 	}
			// );

			// 选择图片
			uni.chooseImage({
				success: chooseImageRes => {
					console.log('chooseImageRes', JSON.stringify(chooseImageRes));

					const tempFilePaths = chooseImageRes.tempFilePaths;

					console.log('上传地址：', that.uploadDir);

					let path = tempFilePaths[0];

					console.log('path is==>', path);

					// =====================

					uni.uploadFile({
						url: 'http://ve.cnki.net/coeduapi/api/File/UploadTencent', //'http://ve.cnki.net/coeduApi/api/File/Upload', //https://kt.cnki.net/subjectApi/api/File/Upload
						filePath: tempFilePaths[0],
						name: 'FileData',
						header: {
							Cookie:
								'UM_distinctid=1704cab6c9524e-0427fcbff74525-b383f66-100200-1704cab6c961d9; DID=6d2ed024-ccd6-4e76-8f15-7cde11238a88; LLOGO_QIAOKUOYUAN=~/pic/8eaa9554-2d42-45cc-b0cb-20baa02021c0; LLOGO_STU_QIAOKUOYUAN=~/pic/d7f8515d-67b8-4d91-9b30-d1f4c499768d; LLOGO_A00001=~/pic/d62c892f-52f4-4013-bdcd-1f16702c2b0b; Ecp_ClientId=2200219164602271778; LLOGO_DENGGAOFENG=~/pic/d3ddb3b3-0760-4eb3-8e93-5f545c8883ef; KNET_SSO_COOKIE_DID=c6301f4e-c5a1-49e0-8359-73247c9fb8e1; Ecp_IpLoginFail=200225106.33.42.137; BID=67ed7ce9cab14b959e575da46a5c59d9; SID=012011; CNZZDATA1277770830=366119379-1581834224-http%253A%252F%252Fve.cnki.net%252F%7C1582697575; token=d893cef827fc4a8dba017c1aaa00870f'
						},

						success: uploadFileRes => {
							console.log('uploadFile：==》', uploadFileRes.data);
						},
						complete(r) {
							console.log('complete==>', JSON.stringify(r));
						}
					});
				}
			});
		},
		bindClick() {},
		// 刷新课程
		reloadCourse() {
			let that = this;
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
				r = that.fr(r);
				if (r.Code == 200) {
					that.list_course = r.Data.courstList || [];
				}
			});
		},

		// 刷新用户
		reloadUsers() {
			let that = this;

			// 检查是否选中了课程
			if (!that.select_course_id) {
				uni.showToast({
					title: '请选择课程',
					icon: 'none'
				});
				that.step = 1;
				return false;
			}

			http.request({
				url: '/api/Student/GetStudent?courseCode=' + that.select_course_id
			}).then(r => {
				r = that.fr(r);
				if (r.Code == 200) {
					// 将结构转为扁平结构
					let flat_data = [];

					let fn = source => {
						source.forEach(el => {
							flat_data.push(el);
							el.children && el.children.length > 0 ? fn(el.children) : '';
						});
					};
					fn(r.Data);

					flat_data.forEach(e => {
						e.key = e.label.spell();
					});

					that.list_users = flat_data;
				}
			});
		}
	}
};
</script>

<style scoped>
.nvue-page-root {
	background-color: #f8f8f8;
	padding-bottom: 20px;
}

.page-title {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 35rpx;
}

.page-title__wrapper {
	padding: 0px 20px;
	border-bottom-color: #d8d8d8;
	border-bottom-width: 1px;
}

.page-title__text {
	font-size: 16px;
	height: 48px;
	line-height: 48px;
	color: #bebebe;
}

.title {
	padding: 5px 13px;
}

.uni-form-item__title {
	font-size: 16px;
	line-height: 24px;
}

.uni-input-wrapper {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	padding: 8px 13px;
	flex-direction: row;
	flex-wrap: nowrap;
	background-color: #ffffff;
}

.uni-input {
	height: 28px;
	line-height: 28px;
	font-size: 15px;
	padding: 0px;
	flex: 1;
	background-color: #ffffff;
}

.uni-icon {
	font-family: uniicons;
	font-size: 24px;
	font-weight: normal;
	font-style: normal;
	width: 24px;
	height: 24px;
	line-height: 24px;
	color: #999999;
}

.uni-eye-active {
	color: #007aff;
}
</style>
