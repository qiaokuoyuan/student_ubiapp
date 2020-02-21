<template>
	<view>
		<view class="">
			<!-- 题目  1：单选题，2：多选题，3：填空题，4：判断题，5 ：简答题-->
			<view class="" v-for="(q, qi) in list_questions" :key="qi">
				<!-- 标题 （如过是未提交的） -->
				<uni-section v-if="submitFlag != 2" :title="q.Exercise.Content.replace(/<\/?.+?>/g, '')" type="line"></uni-section>
				
				
				<!-- 判断正确还是错误  -->
				<view v-if="submitFlag == 2 && isCorrect(q)" style="height: 100rpx; background-color: #00FF7F;">
					<!-- 正确图标 -->
					<!-- <uni-icons type="checkmarkempty" style="margin-left: 30rpx;"></uni-icons> -->

					<text style="line-height: 100rpx; margin-left: 30rpx;">【正确】{{ q.Exercise.Content.replace(/<\/?.+?>/g, '') }}</text>
				</view>

				<view v-if="submitFlag == 2 && !isCorrect(q)" style="height: 100rpx; background-color: #FF4500;">
					<!-- 错误图标 -->
					<!-- <uni-icons type="closeempty" style="margin-left: 30rpx;"></uni-icons> -->
					<text style="line-height: 100rpx; margin-left: 30rpx;">【错误】{{ q.Exercise.Content.replace(/<\/?.+?>/g, '') }}</text>
				</view>

				<view class="" style="background-color: #FFEFD5; height: 100rpx;" v-if="false">
					<text style="line-height: 100rpx; ">{{ q.Exercise.Content }}</text>
				</view>

				<!-- 选项部分 -->
				<view class="" style="margin: 30rpx;">
					<!-- 如果是单选 -->

					<view v-for="(o, oi) in q.Exercise.Options" :key="oi" @click="chooseAnsewer(q, o)" v-if="q.Exercise.TypeID == 1">
						<!-- 选中样式和未选中样式 -->
						<uni-icons type="checkbox" size="25" style="color: #0066CC;" v-if="q._choosePotion == o.Option"></uni-icons>
						<uni-icons type="checkbox" size="25" style="color: #B9D3EE;" v-if="q._choosePotion != o.Option"></uni-icons>

						<!-- abcd -->
						<text style="margin-left: 20rpx;">{{ o.Option }}</text>

						<!-- 选项文字 -->
						<text>{{ o.Answer }}</text>
					</view>

					<!-- 如果是  多选题 -->
					<checkbox-group v-if="q.Exercise.TypeID == 2">
						<label v-for="(o, oi) in q.Exercise.Options" :key="oi" @click="chooseAnsewer(q, o)">
							<view>
								<checkbox :checked="(q._choosePotion || '').indexOf(o.Option) >= 0" />
								<!-- abcd -->
								<text>{{ o.Option }}</text>

								<!-- 选项文字 -->
								<text>{{ o.Answer }}</text>
							</view>
						</label>
					</checkbox-group>

					<!-- 如果是判断题 -->
					<radio-group v-if="q.Exercise.TypeID == 4">
						<!-- 正确 -->
						<label @click="q._choosePotion = true">
							<view class="">
								<radio :checked="q._choosePotion" />
								<!-- 选项文字 -->
								<text>正确</text>
							</view>
						</label>

						<!-- 错误 -->
						<label @click="q._choosePotion = false">
							<view class="">
								<radio :checked="q._choosePotion" />
								<!-- 选项文字 -->
								<text>错误</text>
							</view>
						</label>
					</radio-group>
				</view>

				<!-- 如过是  填空题  简答题 -->

				<view class="" v-if="q.Exercise.TypeID == 3 || q.Exercise.TypeID == 5">
					<view class="uni-textarea"><textarea placeholder-style="color:#F76260" v-model="q._choosePotion" placeholder="请在此输入答案" /></view>
				</view>

				<!-- 如果是已经提交的，显示 正确答案及解析 -->
				<view class="" v-if="submitFlag == 2">
					<text>
						【正确答案】：{{
							q.Exercise.Options.filter(e => {
								return e.IsTrue === '1';
							})
								.map(e => {
									return e.Option;
								})
								.join(',')
						}}
					</text>

					<!-- 换行 -->
					<view class=""></view>
					<view class="">
						【解析】：
						<view v-html="q.Exercise.Analysis"></view>
					</view>
				</view>
			</view>

			<!-- 提交按钮 -->
			<button type="primary" style="margin: 50rpx;" @click="submitHomework()" v-if="submitFlag != 2">交卷</button>
		</view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import http from '@/common/request.js';
import uniSection from '@/components/uni-section/uni-section.vue';
import uniIcons from '@/components/uni-icons/uni-icons.vue';

import qs from 'qs';

export default {
	components: {
		uniNavBar,
		uniSection,
		uniIcons
	},
	data() {
		return {
			// 作业id
			homeworkId: '',

			// 问题集合
			list_questions: [],

			// 是否已经提交
			submitFlag: ''
		};
	},

	onLoad(o) {
		console.log('onLoad');
		this.homeworkId = o.homeworkId;
	},

	onShow() {
		console.log('onShow');
		this.reloadQuestions();
	},
	methods: {
		// 判断一个问题是否回答正确
		isCorrect(item) {
			return item.Exercise.StudentAnswers.length > 0 ? item.Exercise.StudentAnswers[0].AnswerResult : 0;
		},

		singleSelect(event) {
			console.log(JSON.stringify(event));
		},
		// 交卷
		submitHomework() {
			let that = this;

			let _ans = [];

			console.log('that.list_questions==>', JSON.stringify(that.list_questions));

			that.list_questions.forEach(e => {
				let ans = {
					QuestId: e.Exercise.ID,
					QuestType: e.Exercise.TypeID
				};

				// 如果是单选或者是多选,传入选中的选项
				if (e.Exercise.TypeID == 1 || e.Exercise.TypeID == 2) {
					let select_option = e.Exercise.Options.filter(e2 => {
						return e._choosePotion.indexOf(e2.Option) >= 0;
					});
					ans.Options = select_option;
				} else if (e.Exercise.TypeID == 1 || e.Exercise.TypeID == 2) {
					// 如过是 填空 或者是 简答
					ans.Options = {
						Answer: e._choosePotion
					};
				}

				_ans.push(ans);
			});

			http.request({
				url: '/api/HomeWorkAndTest/HomeworkSubmit',
				method: 'POST',
				data: {
					HomeworkId: that.homeworkId,
					Answers: _ans,
					SubmitStatus: 2
				}
			}).then(r => {
				r = that.fr(r);
				if (r.Code == 200) {
					uni.showToast({
						title: '交卷成功'
					});
					uni.navigateBack({});
				}
			});
		},
		// 选择答案
		chooseAnsewer(question, option) {
			// 如过是已经提交的,则不做操作
			if (this.submitFlag == 2) {
				console.log('已经提交过，无法继续选择');
				// return false;
			}

			console.log('继续运行');

			// 如过是单选
			if (question.Exercise.TypeID == 1) {
				question._choosePotion = option.Option;
			}

			// 如过是多选
			if (question.Exercise.TypeID == 2) {
				if (question._choosePotion.indexOf(option.Option) >= 0) {
					console.log('取消选中');
					// 如果已经选择了当前选项,取消选中
					question._choosePotion = question._choosePotion.replace(option.Option, '');
				} else {
					console.log('选中');
					// 如果 没有选择了当前选项, 选中
					question._choosePotion += ',' + option.Option;
				}
			}
		},

		// 刷新问题集合
		reloadQuestions() {
			let that = this;

			uni.showLoading({
				mask: true
			});

			http.request({
				url: '/api/HomeWorkAndTest/GetExerciseByHomeWorkID',
				data: {
					homeworkId: that.homeworkId
				}
			}).then(r => {
				uni.hideLoading();

				r = that.fr(r);

				// r = {
				// 	Code: 200,
				// 	Data: {
				// 		ReturnCode: 200,
				// 		Message: '获取作业栏目成功！',
				// 		Data: {
				// 			HomeWorkName: '第1节习题作业 2-20',
				// 			HomeWorkStartTime: '2020-02-20 08:18:21',
				// 			HomeWorkEndTime: '2022-02-01 00:00:00',
				// 			HasCorrectedAll: false,
				// 			IsTemporary: 0,
				// 			RemainTime: 0,
				// 			ArrangeTime: '2020-02-20 08:18:21',
				// 			CoResourceView: [
				// 				{
				// 					ResourceCode: '9855f146-134a-45ad-91b1-a06425fbf94c',
				// 					ResourceName: '作业',
				// 					ResourceType: 'homework',
				// 					Content: '1070',
				// 					DownloadCode: null,
				// 					XmlCode: null,
				// 					XMLFragmentationCode: null,
				// 					ModuleCode: '75fc296c-070e-471b-935a-86cf58669348',
				// 					ModuleName: null,
				// 					ExtType: null,
				// 					CourseCode: '5a7f784b-81d8-464c-9f66-e900059c1b5a',
				// 					UserId: '8eaa9554-2d42-45cc-b0cb-20baa02021c0',
				// 					RealName: 'qiaokuoyuan',
				// 					UserName: null,
				// 					SubmitUserName: null,
				// 					DiscussStatus: 0,
				// 					DiscussId: null,
				// 					LiveDiscussLink: null,
				// 					LiveDiscussStatus: 0,
				// 					LiveDiscussId: null,
				// 					DiscussLink: null,
				// 					ReviewFlag: 0,
				// 					ReviewFlagHanZi: null,
				// 					ReviewMark: null,
				// 					PostTime: '2020-02-20T08:13:43Z',
				// 					DownloadLink: null,
				// 					FileType: 0,
				// 					CatalogHtml: null,
				// 					Extension: null,
				// 					ReviewFlagShu: 0,
				// 					ZiYuanZongShu: 0,
				// 					ResourceTypeShu: 0,
				// 					LiteratureID: null,
				// 					IsPublic: 0,
				// 					MiniDiscussList: null,
				// 					Exercise: {
				// 						ID: 1070,
				// 						Content: '<p>单选01<br/></p>',
				// 						Analysis: '习题分析习题分析习题分析习题分析习题分析习题分析习题分析习题分析',
				// 						TypeID: 1,
				// 						TemplateID: null,
				// 						DifficultID: '1',
				// 						KeyWord: '',
				// 						Creator: '8eaa9554-2d42-45cc-b0cb-20baa02021c0',
				// 						CreateDate: '2020-02-20T08:13:43',
				// 						CourseID: '5a7f784b-81d8-464c-9f66-e900059c1b5a',
				// 						SyllabusID: '75fc296c-070e-471b-935a-86cf58669348',
				// 						Score: null,
				// 						PointID: null,
				// 						PointName: '单选01',
				// 						ParentID: 0,
				// 						ModuleCode: '75fc296c-070e-471b-935a-86cf58669348',
				// 						Options: [
				// 							{ Option: 'A', Answer: 'AAAAAAAAAAAAA', IsTrue: '1', AnswerScore: 0, AnswerResult: 0 },
				// 							{ Option: 'B', Answer: 'BBBBBBBBBBB', IsTrue: '0', AnswerScore: 0, AnswerResult: 0 },
				// 							{ Option: 'C', Answer: 'CCCCCCCCCCCCC', IsTrue: '0', AnswerScore: 0, AnswerResult: 0 },
				// 							{ Option: 'D', Answer: 'DDDDDDDDDD', IsTrue: '0', AnswerScore: 0, AnswerResult: 0 }
				// 						],
				// 						XuanXiang: null,
				// 						StudentAnswers: [],
				// 						JieXi: null,
				// 						answerSheetView: null,
				// 						Attachments: null,
				// 						Order: 0.0,
				// 						OptionCount: 0,
				// 						IsDel: 0,
				// 						ResourceCode: '',
				// 						SourceType: 0,
				// 						FormID: 0,
				// 						GradeDetailID: 0,
				// 						AnylisisList: null,
				// 						PointList: [
				// 							{
				// 								CataLogCode: null,
				// 								CataLogName: '单选01',
				// 								ParentCode: null,
				// 								ShowNo: 0,
				// 								CourseCode: null,
				// 								PublishStatus: 0,
				// 								PostTime: '0001-01-01T00:00:00'
				// 							}
				// 						],
				// 						correctOrNot: 0,
				// 						CanEdit: false,
				// 						CanDelete: false,
				// 						HasArranged: false
				// 					},
				// 					CataLogName: null,
				// 					Stage: null,
				// 					SubjectName: null,
				// 					CourseVersion: null,
				// 					CourseName: null,
				// 					IsMy: 0,
				// 					IsCNKI: 0,
				// 					AddSource: 0,
				// 					Link: null,
				// 					FileSize: null,
				// 					IsTencent: 0,
				// 					ShowNo: 0,
				// 					InitialResourceName: null,
				// 					HasArranged: false,
				// 					IsRead: 0,
				// 					IsDownLoad: 0,
				// 					Synthesis: 0
				// 				},
				// 				{
				// 					ResourceCode: '6bbb953f-5616-40f8-ba71-5b817d2d932d',
				// 					ResourceName: '作业',
				// 					ResourceType: 'homework',
				// 					Content: '1071',
				// 					DownloadCode: null,
				// 					XmlCode: null,
				// 					XMLFragmentationCode: null,
				// 					ModuleCode: '75fc296c-070e-471b-935a-86cf58669348',
				// 					ModuleName: null,
				// 					ExtType: null,
				// 					CourseCode: '5a7f784b-81d8-464c-9f66-e900059c1b5a',
				// 					UserId: '8eaa9554-2d42-45cc-b0cb-20baa02021c0',
				// 					RealName: 'qiaokuoyuan',
				// 					UserName: null,
				// 					SubmitUserName: null,
				// 					DiscussStatus: 0,
				// 					DiscussId: null,
				// 					LiveDiscussLink: null,
				// 					LiveDiscussStatus: 0,
				// 					LiveDiscussId: null,
				// 					DiscussLink: null,
				// 					ReviewFlag: 0,
				// 					ReviewFlagHanZi: null,
				// 					ReviewMark: null,
				// 					PostTime: '2020-02-20T08:14:24Z',
				// 					DownloadLink: null,
				// 					FileType: 0,
				// 					CatalogHtml: null,
				// 					Extension: null,
				// 					ReviewFlagShu: 0,
				// 					ZiYuanZongShu: 0,
				// 					ResourceTypeShu: 0,
				// 					LiteratureID: null,
				// 					IsPublic: 0,
				// 					MiniDiscussList: null,
				// 					Exercise: {
				// 						ID: 1071,
				// 						Content: '<p>题干<br/></p><br/>',
				// 						Analysis: '<p>阿斯顿<br/></p>',
				// 						TypeID: 1,
				// 						TemplateID: null,
				// 						DifficultID: '1',
				// 						KeyWord: '',
				// 						Creator: '8eaa9554-2d42-45cc-b0cb-20baa02021c0',
				// 						CreateDate: '2020-02-20T08:14:24',
				// 						CourseID: '5a7f784b-81d8-464c-9f66-e900059c1b5a',
				// 						SyllabusID: '75fc296c-070e-471b-935a-86cf58669348',
				// 						Score: null,
				// 						PointID: null,
				// 						PointName: 'X',
				// 						ParentID: 0,
				// 						ModuleCode: '75fc296c-070e-471b-935a-86cf58669348',
				// 						Options: [
				// 							{ Option: 'A', Answer: '啊实打实的', IsTrue: '0', AnswerScore: 0, AnswerResult: 0 },
				// 							{ Option: 'B', Answer: '啊大苏打', IsTrue: '1', AnswerScore: 0, AnswerResult: 0 },
				// 							{ Option: 'C', Answer: '', IsTrue: '0', AnswerScore: 0, AnswerResult: 0 },
				// 							{ Option: 'D', Answer: '', IsTrue: '0', AnswerScore: 0, AnswerResult: 0 }
				// 						],
				// 						XuanXiang: null,
				// 						StudentAnswers: [],
				// 						JieXi: null,
				// 						answerSheetView: null,
				// 						Attachments: null,
				// 						Order: 0.0,
				// 						OptionCount: 0,
				// 						IsDel: 0,
				// 						ResourceCode: '',
				// 						SourceType: 0,
				// 						FormID: 0,
				// 						GradeDetailID: 0,
				// 						AnylisisList: null,
				// 						PointList: [
				// 							{
				// 								CataLogCode: null,
				// 								CataLogName: 'X',
				// 								ParentCode: null,
				// 								ShowNo: 0,
				// 								CourseCode: null,
				// 								PublishStatus: 0,
				// 								PostTime: '0001-01-01T00:00:00'
				// 							}
				// 						],
				// 						correctOrNot: 0,
				// 						CanEdit: false,
				// 						CanDelete: false,
				// 						HasArranged: false
				// 					},
				// 					CataLogName: null,
				// 					Stage: null,
				// 					SubjectName: null,
				// 					CourseVersion: null,
				// 					CourseName: null,
				// 					IsMy: 0,
				// 					IsCNKI: 0,
				// 					AddSource: 0,
				// 					Link: null,
				// 					FileSize: null,
				// 					IsTencent: 0,
				// 					ShowNo: 0,
				// 					InitialResourceName: null,
				// 					HasArranged: false,
				// 					IsRead: 0,
				// 					IsDownLoad: 0,
				// 					Synthesis: 0
				// 				},
				// 				{
				// 					ResourceCode: '70f774f0-8dac-4979-a220-6f5388be3ca5',
				// 					ResourceName: '作业',
				// 					ResourceType: 'homework',
				// 					Content: '1072',
				// 					DownloadCode: null,
				// 					XmlCode: null,
				// 					XMLFragmentationCode: null,
				// 					ModuleCode: '75fc296c-070e-471b-935a-86cf58669348',
				// 					ModuleName: null,
				// 					ExtType: null,
				// 					CourseCode: '5a7f784b-81d8-464c-9f66-e900059c1b5a',
				// 					UserId: '8eaa9554-2d42-45cc-b0cb-20baa02021c0',
				// 					RealName: 'qiaokuoyuan',
				// 					UserName: null,
				// 					SubmitUserName: null,
				// 					DiscussStatus: 0,
				// 					DiscussId: null,
				// 					LiveDiscussLink: null,
				// 					LiveDiscussStatus: 0,
				// 					LiveDiscussId: null,
				// 					DiscussLink: null,
				// 					ReviewFlag: 0,
				// 					ReviewFlagHanZi: null,
				// 					ReviewMark: null,
				// 					PostTime: '2020-02-20T08:15:25Z',
				// 					DownloadLink: null,
				// 					FileType: 0,
				// 					CatalogHtml: null,
				// 					Extension: null,
				// 					ReviewFlagShu: 0,
				// 					ZiYuanZongShu: 0,
				// 					ResourceTypeShu: 0,
				// 					LiteratureID: null,
				// 					IsPublic: 0,
				// 					MiniDiscussList: null,
				// 					Exercise: {
				// 						ID: 1072,
				// 						Content: '<p>多选全选项<br/></p>',
				// 						Analysis: '',
				// 						TypeID: 2,
				// 						TemplateID: null,
				// 						DifficultID: '1',
				// 						KeyWord: '',
				// 						Creator: '8eaa9554-2d42-45cc-b0cb-20baa02021c0',
				// 						CreateDate: '2020-02-20T08:15:25',
				// 						CourseID: '5a7f784b-81d8-464c-9f66-e900059c1b5a',
				// 						SyllabusID: '75fc296c-070e-471b-935a-86cf58669348',
				// 						Score: null,
				// 						PointID: null,
				// 						PointName: '阿斯顿',
				// 						ParentID: 0,
				// 						ModuleCode: '75fc296c-070e-471b-935a-86cf58669348',
				// 						Options: [
				// 							{ Option: 'A', Answer: '啊实打实的', IsTrue: '1', AnswerScore: 0, AnswerResult: 0 },
				// 							{ Option: 'B', Answer: '啊实打实的', IsTrue: '1', AnswerScore: 0, AnswerResult: 0 },
				// 							{ Option: 'C', Answer: '阿德&nbsp; <br/>大苏打', IsTrue: '0', AnswerScore: 0, AnswerResult: 0 },
				// 							{ Option: 'D', Answer: 'vvvvvvvvvvv', IsTrue: '0', AnswerScore: 0, AnswerResult: 0 }
				// 						],
				// 						XuanXiang: null,
				// 						StudentAnswers: [],
				// 						JieXi: null,
				// 						answerSheetView: null,
				// 						Attachments: null,
				// 						Order: 0.0,
				// 						OptionCount: 0,
				// 						IsDel: 0,
				// 						ResourceCode: '',
				// 						SourceType: 0,
				// 						FormID: 0,
				// 						GradeDetailID: 0,
				// 						AnylisisList: null,
				// 						PointList: [
				// 							{
				// 								CataLogCode: null,
				// 								CataLogName: '阿斯顿',
				// 								ParentCode: null,
				// 								ShowNo: 0,
				// 								CourseCode: null,
				// 								PublishStatus: 0,
				// 								PostTime: '0001-01-01T00:00:00'
				// 							}
				// 						],
				// 						correctOrNot: 0,
				// 						CanEdit: false,
				// 						CanDelete: false,
				// 						HasArranged: false
				// 					},
				// 					CataLogName: null,
				// 					Stage: null,
				// 					SubjectName: null,
				// 					CourseVersion: null,
				// 					CourseName: null,
				// 					IsMy: 0,
				// 					IsCNKI: 0,
				// 					AddSource: 0,
				// 					Link: null,
				// 					FileSize: null,
				// 					IsTencent: 0,
				// 					ShowNo: 0,
				// 					InitialResourceName: null,
				// 					HasArranged: false,
				// 					IsRead: 0,
				// 					IsDownLoad: 0,
				// 					Synthesis: 0
				// 				},
				// 				{
				// 					ResourceCode: '1ef3ac16-4f78-4fb3-b125-1b7b6310690b',
				// 					ResourceName: '作业',
				// 					ResourceType: 'homework',
				// 					Content: '1073',
				// 					DownloadCode: null,
				// 					XmlCode: null,
				// 					XMLFragmentationCode: null,
				// 					ModuleCode: '75fc296c-070e-471b-935a-86cf58669348',
				// 					ModuleName: null,
				// 					ExtType: null,
				// 					CourseCode: '5a7f784b-81d8-464c-9f66-e900059c1b5a',
				// 					UserId: '8eaa9554-2d42-45cc-b0cb-20baa02021c0',
				// 					RealName: 'qiaokuoyuan',
				// 					UserName: null,
				// 					SubmitUserName: null,
				// 					DiscussStatus: 0,
				// 					DiscussId: null,
				// 					LiveDiscussLink: null,
				// 					LiveDiscussStatus: 0,
				// 					LiveDiscussId: null,
				// 					DiscussLink: null,
				// 					ReviewFlag: 0,
				// 					ReviewFlagHanZi: null,
				// 					ReviewMark: null,
				// 					PostTime: '2020-02-20T08:16:46Z',
				// 					DownloadLink: null,
				// 					FileType: 0,
				// 					CatalogHtml: null,
				// 					Extension: null,
				// 					ReviewFlagShu: 0,
				// 					ZiYuanZongShu: 0,
				// 					ResourceTypeShu: 0,
				// 					LiteratureID: null,
				// 					IsPublic: 0,
				// 					MiniDiscussList: null,
				// 					Exercise: {
				// 						ID: 1073,
				// 						Content: '<p>多选少选项<br/></p>',
				// 						Analysis: '',
				// 						TypeID: 2,
				// 						TemplateID: null,
				// 						DifficultID: '1',
				// 						KeyWord: '',
				// 						Creator: '8eaa9554-2d42-45cc-b0cb-20baa02021c0',
				// 						CreateDate: '2020-02-20T08:16:46',
				// 						CourseID: '5a7f784b-81d8-464c-9f66-e900059c1b5a',
				// 						SyllabusID: '75fc296c-070e-471b-935a-86cf58669348',
				// 						Score: null,
				// 						PointID: null,
				// 						PointName: '存储',
				// 						ParentID: 0,
				// 						ModuleCode: '75fc296c-070e-471b-935a-86cf58669348',
				// 						Options: [
				// 							{ Option: 'A', Answer: '<p>阿斯顿纯纯粹粹</p>', IsTrue: '1', AnswerScore: 0, AnswerResult: 0 },
				// 							{ Option: 'B', Answer: '2222', IsTrue: '1', AnswerScore: 0, AnswerResult: 0 },
				// 							{ Option: 'C', Answer: '踩踩踩', IsTrue: '0', AnswerScore: 0, AnswerResult: 0 },
				// 							{ Option: 'D', Answer: '', IsTrue: '0', AnswerScore: 0, AnswerResult: 0 }
				// 						],
				// 						XuanXiang: null,
				// 						StudentAnswers: [],
				// 						JieXi: null,
				// 						answerSheetView: null,
				// 						Attachments: null,
				// 						Order: 0.0,
				// 						OptionCount: 0,
				// 						IsDel: 0,
				// 						ResourceCode: '',
				// 						SourceType: 0,
				// 						FormID: 0,
				// 						GradeDetailID: 0,
				// 						AnylisisList: null,
				// 						PointList: [
				// 							{
				// 								CataLogCode: null,
				// 								CataLogName: '存储',
				// 								ParentCode: null,
				// 								ShowNo: 0,
				// 								CourseCode: null,
				// 								PublishStatus: 0,
				// 								PostTime: '0001-01-01T00:00:00'
				// 							}
				// 						],
				// 						correctOrNot: 0,
				// 						CanEdit: false,
				// 						CanDelete: false,
				// 						HasArranged: false
				// 					},
				// 					CataLogName: null,
				// 					Stage: null,
				// 					SubjectName: null,
				// 					CourseVersion: null,
				// 					CourseName: null,
				// 					IsMy: 0,
				// 					IsCNKI: 0,
				// 					AddSource: 0,
				// 					Link: null,
				// 					FileSize: null,
				// 					IsTencent: 0,
				// 					ShowNo: 0,
				// 					InitialResourceName: null,
				// 					HasArranged: false,
				// 					IsRead: 0,
				// 					IsDownLoad: 0,
				// 					Synthesis: 0
				// 				},
				// 				{
				// 					ResourceCode: '91ea269c-9a34-4504-a9b4-75c5be8891ed',
				// 					ResourceName: '作业',
				// 					ResourceType: 'homework',
				// 					Content: '1074',
				// 					DownloadCode: null,
				// 					XmlCode: null,
				// 					XMLFragmentationCode: null,
				// 					ModuleCode: '75fc296c-070e-471b-935a-86cf58669348',
				// 					ModuleName: null,
				// 					ExtType: null,
				// 					CourseCode: '5a7f784b-81d8-464c-9f66-e900059c1b5a',
				// 					UserId: '8eaa9554-2d42-45cc-b0cb-20baa02021c0',
				// 					RealName: 'qiaokuoyuan',
				// 					UserName: null,
				// 					SubmitUserName: null,
				// 					DiscussStatus: 0,
				// 					DiscussId: null,
				// 					LiveDiscussLink: null,
				// 					LiveDiscussStatus: 0,
				// 					LiveDiscussId: null,
				// 					DiscussLink: null,
				// 					ReviewFlag: 0,
				// 					ReviewFlagHanZi: null,
				// 					ReviewMark: null,
				// 					PostTime: '2020-02-20T08:17:33Z',
				// 					DownloadLink: null,
				// 					FileType: 0,
				// 					CatalogHtml: null,
				// 					Extension: null,
				// 					ReviewFlagShu: 0,
				// 					ZiYuanZongShu: 0,
				// 					ResourceTypeShu: 0,
				// 					LiteratureID: null,
				// 					IsPublic: 0,
				// 					MiniDiscussList: null,
				// 					Exercise: {
				// 						ID: 1074,
				// 						Content: '<p>填空题</p>',
				// 						Analysis: '',
				// 						TypeID: 3,
				// 						TemplateID: null,
				// 						DifficultID: '1',
				// 						KeyWord: '',
				// 						Creator: '8eaa9554-2d42-45cc-b0cb-20baa02021c0',
				// 						CreateDate: '2020-02-20T08:17:33',
				// 						CourseID: '5a7f784b-81d8-464c-9f66-e900059c1b5a',
				// 						SyllabusID: '75fc296c-070e-471b-935a-86cf58669348',
				// 						Score: null,
				// 						PointID: null,
				// 						PointName: '信息',
				// 						ParentID: 0,
				// 						ModuleCode: '75fc296c-070e-471b-935a-86cf58669348',
				// 						Options: [{ Option: '', Answer: '踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩', IsTrue: '1', AnswerScore: 0, AnswerResult: 0 }],
				// 						XuanXiang: null,
				// 						StudentAnswers: [],
				// 						JieXi: null,
				// 						answerSheetView: null,
				// 						Attachments: null,
				// 						Order: 0.0,
				// 						OptionCount: 0,
				// 						IsDel: 0,
				// 						ResourceCode: '',
				// 						SourceType: 0,
				// 						FormID: 0,
				// 						GradeDetailID: 0,
				// 						AnylisisList: null,
				// 						PointList: [
				// 							{
				// 								CataLogCode: null,
				// 								CataLogName: '信息',
				// 								ParentCode: null,
				// 								ShowNo: 0,
				// 								CourseCode: null,
				// 								PublishStatus: 0,
				// 								PostTime: '0001-01-01T00:00:00'
				// 							}
				// 						],
				// 						correctOrNot: 0,
				// 						CanEdit: false,
				// 						CanDelete: false,
				// 						HasArranged: false
				// 					},
				// 					CataLogName: null,
				// 					Stage: null,
				// 					SubjectName: null,
				// 					CourseVersion: null,
				// 					CourseName: null,
				// 					IsMy: 0,
				// 					IsCNKI: 0,
				// 					AddSource: 0,
				// 					Link: null,
				// 					FileSize: null,
				// 					IsTencent: 0,
				// 					ShowNo: 0,
				// 					InitialResourceName: null,
				// 					HasArranged: false,
				// 					IsRead: 0,
				// 					IsDownLoad: 0,
				// 					Synthesis: 0
				// 				},
				// 				{
				// 					ResourceCode: '85affcfd-6977-4b1a-9ff9-6802b3ba896e',
				// 					ResourceName: '作业',
				// 					ResourceType: 'homework',
				// 					Content: '1075',
				// 					DownloadCode: null,
				// 					XmlCode: null,
				// 					XMLFragmentationCode: null,
				// 					ModuleCode: '75fc296c-070e-471b-935a-86cf58669348',
				// 					ModuleName: null,
				// 					ExtType: null,
				// 					CourseCode: '5a7f784b-81d8-464c-9f66-e900059c1b5a',
				// 					UserId: '8eaa9554-2d42-45cc-b0cb-20baa02021c0',
				// 					RealName: 'qiaokuoyuan',
				// 					UserName: null,
				// 					SubmitUserName: null,
				// 					DiscussStatus: 0,
				// 					DiscussId: null,
				// 					LiveDiscussLink: null,
				// 					LiveDiscussStatus: 0,
				// 					LiveDiscussId: null,
				// 					DiscussLink: null,
				// 					ReviewFlag: 0,
				// 					ReviewFlagHanZi: null,
				// 					ReviewMark: null,
				// 					PostTime: '2020-02-20T08:17:50Z',
				// 					DownloadLink: null,
				// 					FileType: 0,
				// 					CatalogHtml: null,
				// 					Extension: null,
				// 					ReviewFlagShu: 0,
				// 					ZiYuanZongShu: 0,
				// 					ResourceTypeShu: 0,
				// 					LiteratureID: null,
				// 					IsPublic: 0,
				// 					MiniDiscussList: null,
				// 					Exercise: {
				// 						ID: 1075,
				// 						Content: '<p>判断题<br/></p>',
				// 						Analysis: '<p>阿斯顿<br/></p>',
				// 						TypeID: 4,
				// 						TemplateID: null,
				// 						DifficultID: '1',
				// 						KeyWord: '',
				// 						Creator: '8eaa9554-2d42-45cc-b0cb-20baa02021c0',
				// 						CreateDate: '2020-02-20T08:17:50',
				// 						CourseID: '5a7f784b-81d8-464c-9f66-e900059c1b5a',
				// 						SyllabusID: '75fc296c-070e-471b-935a-86cf58669348',
				// 						Score: null,
				// 						PointID: null,
				// 						PointName: '的',
				// 						ParentID: 0,
				// 						ModuleCode: '75fc296c-070e-471b-935a-86cf58669348',
				// 						Options: [
				// 							{ Option: '', Answer: null, IsTrue: '1', AnswerScore: 0, AnswerResult: 0 },
				// 							{ Option: '', Answer: null, IsTrue: '0', AnswerScore: 0, AnswerResult: 0 }
				// 						],
				// 						XuanXiang: null,
				// 						StudentAnswers: [],
				// 						JieXi: null,
				// 						answerSheetView: null,
				// 						Attachments: null,
				// 						Order: 0.0,
				// 						OptionCount: 0,
				// 						IsDel: 0,
				// 						ResourceCode: '',
				// 						SourceType: 0,
				// 						FormID: 0,
				// 						GradeDetailID: 0,
				// 						AnylisisList: null,
				// 						PointList: [
				// 							{
				// 								CataLogCode: null,
				// 								CataLogName: '的',
				// 								ParentCode: null,
				// 								ShowNo: 0,
				// 								CourseCode: null,
				// 								PublishStatus: 0,
				// 								PostTime: '0001-01-01T00:00:00'
				// 							}
				// 						],
				// 						correctOrNot: 0,
				// 						CanEdit: false,
				// 						CanDelete: false,
				// 						HasArranged: false
				// 					},
				// 					CataLogName: null,
				// 					Stage: null,
				// 					SubjectName: null,
				// 					CourseVersion: null,
				// 					CourseName: null,
				// 					IsMy: 0,
				// 					IsCNKI: 0,
				// 					AddSource: 0,
				// 					Link: null,
				// 					FileSize: null,
				// 					IsTencent: 0,
				// 					ShowNo: 0,
				// 					InitialResourceName: null,
				// 					HasArranged: false,
				// 					IsRead: 0,
				// 					IsDownLoad: 0,
				// 					Synthesis: 0
				// 				},
				// 				{
				// 					ResourceCode: '999329c8-7225-4eca-aee2-9fc8b1d02fe4',
				// 					ResourceName: '作业',
				// 					ResourceType: 'homework',
				// 					Content: '1076',
				// 					DownloadCode: null,
				// 					XmlCode: null,
				// 					XMLFragmentationCode: null,
				// 					ModuleCode: '75fc296c-070e-471b-935a-86cf58669348',
				// 					ModuleName: null,
				// 					ExtType: null,
				// 					CourseCode: '5a7f784b-81d8-464c-9f66-e900059c1b5a',
				// 					UserId: '8eaa9554-2d42-45cc-b0cb-20baa02021c0',
				// 					RealName: 'qiaokuoyuan',
				// 					UserName: null,
				// 					SubmitUserName: null,
				// 					DiscussStatus: 0,
				// 					DiscussId: null,
				// 					LiveDiscussLink: null,
				// 					LiveDiscussStatus: 0,
				// 					LiveDiscussId: null,
				// 					DiscussLink: null,
				// 					ReviewFlag: 0,
				// 					ReviewFlagHanZi: null,
				// 					ReviewMark: null,
				// 					PostTime: '2020-02-20T08:18:08Z',
				// 					DownloadLink: null,
				// 					FileType: 0,
				// 					CatalogHtml: null,
				// 					Extension: null,
				// 					ReviewFlagShu: 0,
				// 					ZiYuanZongShu: 0,
				// 					ResourceTypeShu: 0,
				// 					LiteratureID: null,
				// 					IsPublic: 0,
				// 					MiniDiscussList: null,
				// 					Exercise: {
				// 						ID: 1076,
				// 						Content: '<p>简答题<br/></p>',
				// 						Analysis: '',
				// 						TypeID: 5,
				// 						TemplateID: null,
				// 						DifficultID: '1',
				// 						KeyWord: '',
				// 						Creator: '8eaa9554-2d42-45cc-b0cb-20baa02021c0',
				// 						CreateDate: '2020-02-20T08:18:08',
				// 						CourseID: '5a7f784b-81d8-464c-9f66-e900059c1b5a',
				// 						SyllabusID: '75fc296c-070e-471b-935a-86cf58669348',
				// 						Score: null,
				// 						PointID: null,
				// 						PointName: '的',
				// 						ParentID: 0,
				// 						ModuleCode: '75fc296c-070e-471b-935a-86cf58669348',
				// 						Options: [{ Option: '', Answer: '啊实打实大大的大地方', IsTrue: '1', AnswerScore: 0, AnswerResult: 0 }],
				// 						XuanXiang: null,
				// 						StudentAnswers: [],
				// 						JieXi: null,
				// 						answerSheetView: null,
				// 						Attachments: null,
				// 						Order: 0.0,
				// 						OptionCount: 0,
				// 						IsDel: 0,
				// 						ResourceCode: '',
				// 						SourceType: 0,
				// 						FormID: 0,
				// 						GradeDetailID: 0,
				// 						AnylisisList: null,
				// 						PointList: [
				// 							{
				// 								CataLogCode: null,
				// 								CataLogName: '的',
				// 								ParentCode: null,
				// 								ShowNo: 0,
				// 								CourseCode: null,
				// 								PublishStatus: 0,
				// 								PostTime: '0001-01-01T00:00:00'
				// 							}
				// 						],
				// 						correctOrNot: 0,
				// 						CanEdit: false,
				// 						CanDelete: false,
				// 						HasArranged: false
				// 					},
				// 					CataLogName: null,
				// 					Stage: null,
				// 					SubjectName: null,
				// 					CourseVersion: null,
				// 					CourseName: null,
				// 					IsMy: 0,
				// 					IsCNKI: 0,
				// 					AddSource: 0,
				// 					Link: null,
				// 					FileSize: null,
				// 					IsTencent: 0,
				// 					ShowNo: 0,
				// 					InitialResourceName: null,
				// 					HasArranged: false,
				// 					IsRead: 0,
				// 					IsDownLoad: 0,
				// 					Synthesis: 0
				// 				}
				// 			],
				// 			StartTime: '',
				// 			EndTime: '',
				// 			CorrectRate: '0.00%',
				// 			Scores: 0.0,
				// 			AnswerCount: 0,
				// 			NonesubmitCount: 7,
				// 			FailedCount: 0,
				// 			Stamp: 'ad84bb5e-5ebd-4cc5-b658-7b2e398f8d89'
				// 		},
				// 		Total: 7
				// 	},
				// 	Error: null,
				// 	Other: null,
				// 	IsMult: false,
				// 	Ext: null,
				// 	Extension: null,
				// 	Total: 0
				// };

				if (r.Code == 200) {
					// 预生成选中项
					r.Data.Data.CoResourceView.forEach(e => {
						e._choosePotion = '';
					});

					that.submitFlag = r.Data.Data.IsTemporary;
					that.list_questions = r.Data.Data.CoResourceView || [];
				} else {
					uni.showToast({
						title: '获取作业内容失败'
					});
				}
			});
		}
	}
};
</script>

<style>
.select {
	color: #836fff;
}
.unselect {
	color: #ffe1ff;
}

.disable {
	color: #b9d3ee;
}
</style>
