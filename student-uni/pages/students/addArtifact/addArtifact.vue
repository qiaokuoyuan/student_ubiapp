<template>
	<view>
		<view><uni-steps :options="list1" style="margin: 30rpx;" active-color="#007AFF" :active="step" /></view>

		<view class="" style="margin: 30rpx;">
			<!-- 内容编创页面 -->
			<view class="" v-show="step == 0"><myeditor ref="editor" @contentchange="contentchange"></myeditor></view>

			<!-- 选择课程-->
			<view class="" v-show="step == 1">
				<view class="" v-for="(c, ci) in list_course" :key="ci" @click="select_course_id = c.CourseCode" style="height: 100rpx; margin-left: 30rpx;">
					<uni-icons style="line-height: 100rpx;" type="circle-filled" v-if="select_course_id == c.CourseCode"></uni-icons>
					<uni-icons style="line-height: 100rpx;" type="circle" v-else></uni-icons>
					<text style="line-height: 100rpx; margin-left: 20rpx; font-size: larger;">{{ c.CourseName }}</text>
				</view>
			</view>

			<!-- 选择成员、组长、指导教师页面 -->
			<view class="" v-show="step == 2">
				<uni-section type="line" title="指导教师"></uni-section>
				<view class="">
					<text>
						{{
							list_jiaoshi
								.map(e => {
									return e.label;
								})
								.join(',')
						}}
						<uni-icons style="margin-left: 50rpx;" type="personadd" @click="(select_user_type = 'jiaoshi'), (show_drawer = true)" size="30"></uni-icons>
					</text>
				</view>
				<uni-section type="line" title="组长"></uni-section>
				<view class="">
					<text>
						{{
							list_zuzhang
								.map(e => {
									return e.label;
								})
								.join(',')
						}}

						<uni-icons style="margin-left: 50rpx;" type="personadd" @click="(select_user_type = 'zuzhang'), (show_drawer = true)" size="30"></uni-icons>
					</text>
				</view>
				<uni-section type="line" title="成员"></uni-section>
				<view class="">
					<text>
						{{
							list_chengyuan
								.map(e => {
									return e.label;
								})
								.join(',')
						}}
					</text>
					<uni-icons style="margin-left: 50rpx;" type="personadd" @click="(select_user_type = 'chengyuan'), (show_drawer = true)" size="30"></uni-icons>
				</view>
			</view>

			<!-- 选择封面、关键词页面 -->
			<view class="" v-show="step == 3">
				选择封面、关键词页面

				<button type="primary" @click="chooseCover()">选择封面</button>
			</view>
		</view>
		<button type="primary" @click="step = step - 1" style="margin: 30rpx;" v-if="step > 0">上一步</button>
		<button type="primary" @click="step = step + 1" style="margin: 30rpx;" v-if="step < 3">下一步</button>

		<!-- 选择人员抽屉 -->

		<uni-drawer :visible="show_drawer" @close="show_drawer = false" style="height: 100%; overflow: scroll;">
			<view class="" v-for="(u, ui) in list_users" :key="ui" style="height: 80rpx; margin-left: 20rpx;" @click="checkUser(u)">
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
		uniIndexedList
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
			}
		}
	},
	data() {
		return {
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

			// 选择图片
			uni.chooseImage({
				success: chooseImageRes => {
					console.log('chooseImageRes', JSON.stringify(chooseImageRes));

					const tempFilePaths = chooseImageRes.tempFilePaths;

					console.log('上传地址：', that.uploadDir);

					uni.uploadFile({
						url: that.uploadDir, //仅为示例，非真实的接口地址
						filePath: tempFilePaths[0],
						name: 'file',
						formData: {
							user: 'test'
						},
						success: uploadFileRes => {
							console.log('uploadFile：==》', uploadFileRes.data);
						},
						complete(r) {
							console.log('complete==>', r);
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

					const fn = source => {
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

<style></style>
