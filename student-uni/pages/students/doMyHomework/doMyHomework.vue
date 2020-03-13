<template>
	<view>
		<uni-nav-bar :statusBar="true" title="习题作业"></uni-nav-bar>
		<view class="">
			<!-- 题目  1：单选题，2：多选题，3：填空题，4：判断题，5 ：简答题-->
			<view class="" v-for="(q, qi) in list" :key="qi">
				<!-- 标题 （如过是未提交的） -->
				<uni-section v-if="submitFlag != 2" :title="q.Exercise.Content.replace(/<\/?.+?>/g, '')" type="line"></uni-section>

				<!-- 回答正确  -->
				<view v-if="submitFlag == 2 && q.Exercise.IsRight == 1" style="height: 100rpx; background-color: #00FF7F;">
					<text style="line-height: 100rpx; margin-left: 30rpx;">【正确】{{ q.Exercise.Content.replace(/<\/?.+?>/g, '') }}</text>
				</view>
				<!-- 回答错误  -->
				<view v-if="submitFlag == 2 && q.Exercise.IsRight == 2" style="height: 100rpx; background-color: #F5F5DC;">
					<text style="line-height: 100rpx; margin-left: 30rpx;">【错误】{{ q.Exercise.Content.replace(/<\/?.+?>/g, '') }}</text>
				</view>

				<!-- 回答部分正确  -->
				<!-- <view v-if="submitFlag == 2 && q.Exercise.IsRight == 0" style="height: 100rpx; background-color: #FFF68F;">
					<text style="line-height: 100rpx; margin-left: 30rpx;">【部分正确】{{ q.Exercise.Content.replace(/<\/?.+?>/g, '') }}</text>
				</view> -->

				<!-- 未批改  -->
				<view v-if="submitFlag == 2 && q.Exercise.IsRight == 0" style="height: 100rpx; background-color: #FAFAD2;">
					<text style="line-height: 100rpx; margin-left: 30rpx;">【未批改】{{ q.Exercise.Content.replace(/<\/?.+?>/g, '') }}</text>
				</view>

				<!-- 选项部分 -->
				<view class="" style="margin: 30rpx;">
					<!-- 如果是单选 -->
					<view v-for="(o, oi) in q.Exercise.Options" :key="oi" @click="chooseAnsewer(q, o)" v-if="q.Exercise.TypeID == 1">
						<!-- 选中样式和未选中样式 -->
						<uni-icons type="checkbox" size="25" style="color: #0066CC;" v-if="isChecked(q, o)"></uni-icons>
						<uni-icons type="checkbox" size="25" style="color: #B9D3EE;" v-else></uni-icons>

						<!-- abcd -->
						<text style="margin-left: 20rpx;">【{{ o.Option }}】</text>

						<!-- 选项文字 -->
						<text>{{ o.Answer }}</text>
					</view>

					<!-- 如果是  多选题 -->
					<view v-if="q.Exercise.TypeID == 2">
						<label v-for="(o, oi) in q.Exercise.Options" :key="oi" @click="chooseAnsewer(q, o)">
							<view>
								<!-- 选中样式和未选中样式 -->
								<uni-icons type="checkbox" size="25" style="color: #0066CC;" v-if="isChecked(q, o)"></uni-icons>
								<uni-icons type="checkbox" size="25" style="color: #B9D3EE;" v-else></uni-icons>

								<!-- abcd -->
								<text>【{{ o.Option }}】</text>

								<!-- 选项文字 -->
								<text>{{ o.Answer }}</text>
							</view>
						</label>
					</view>

					<!-- 如果是判断题 -->
					<view v-for="(o, oi) in q.Exercise.Options" :key="oi" @click="q.Exercise.StudentAnswers = o.IsTrue" v-if="q.Exercise.TypeID == 4">
						<!-- 选中样式和未选中样式 -->
						<uni-icons type="checkbox" size="25" style="color: #0066CC;" v-if="q.Exercise.StudentAnswers == o.IsTrue"></uni-icons>
						<uni-icons type="checkbox" size="25" style="color: #B9D3EE;" v-else></uni-icons>

						<text style="margin-left: 20rpx;" @click="q.Exercise.StudentAnswers = o.IsTrue">{{ o.IsTrue == '1' ? '正确' : '错误' }}</text>
					</view>
				</view>

				<!-- 如过是  填空题  简答题 -->
				<view class="" v-if="(q.Exercise.TypeID == 3 || q.Exercise.TypeID == 5) && submitFlag != 2">
					<view class="uni-textarea">
						<textarea placeholder-style="color:#F76260" v-model="q._tempData" @keyup="addContentToStudentAnswer(q)" placeholder="请在此输入答案" />
					</view>
				</view>

				<!-- 如果是已经提交的，显示 正确答案及解析 -->
				<view class="" v-if="submitFlag == 2">
					<!-- 正确答案 -->
					<view class="">
						<text>【正确答案】：</text>

						<text v-if="q.Exercise.TypeID == 1 || q.Exercise.TypeID == 2">
							<text v-for="ans in q.Exercise.Options" v-if="ans.IsTrue == '1' && ans.Answer != null" style="font-weight:normal;">{{ ans.Option }}</text>
						</text>
						<text v-for="ans in q.Exercise.Options" v-if="ans.IsTrue == '1' && ans.Answer != null && (q.Exercise.TypeID != 1 && q.Exercise.TypeID != 2)">
							{{ ans.Answer }}
						</text>
						<text v-if="q.Exercise.HasRirhtAnswer">暂无正确答案</text>
					</view>

					<!-- 我的答案 -->
					<view class="">
						【我的答案】：
						<text v-if="q.Exercise.TypeID != 4" v-for="ans in q.Exercise.StudentAnswers" v-html="ans"></text>
						<text v-else v-for="ans in q.Exercise.StudentAnswers">{{ ans == 1 ? '对' : '错' }}</text>
						<text class="noanwser" v-if="q.Exercise.NoAnswer">漏答</text>
					</view>
					<!-- 得分 -->
					<view class="">【得分】： {{ q.Exercise.MyScore }}/{{ q.Exercise.Score }}</view>

					<!-- 解析 -->
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
		uniSection,
		uniNavBar,
		uniIcons
	},
	data() {
		return {
			Id: 0,
			classType: 0,
			courseCode: '',
			catalogCode: '',
			moduleCode: '',
			teacherId: '',
			list: [],
			workName: '',
			total: 0,
			subjectiveCount: 0,
			objectiveCount: 0,
			totalScore: 0,
			arrangeTime: '',
			submitTime: '',
			submitFlag: -1,
			hour: -1,
			minutes: -1,
			seconds: -1,
			hour1: '00',
			minutes1: '00',
			seconds1: '00',
			interVal: '',
			answerCount: 0,
			nonesubmitCount: 0,
			failedCount: 0,
			correctRate: '',
			scores: 0,
			remainTime: 0,
			startTime: '',
			endTime: '',
			editorHTML: '<script id="answerEditor" type="text/plain" style="width: 700px; height: 300px; margin: 0 auto;"><\/script>',
			dialogVisible: false, //回答弹窗标识
			answerIndex: 0,
			serviceTime: '',
			dialogTitle: '回答',
			stamp: '',
			replyId: '',
			replayQuesId: ''
		};
	},
	methods: {
		addContentToStudentAnswer(q) {
			console.log('push data:', q._tempData);
			q.Exercise.StudentAnswers = [];
			q.Exercise.StudentAnswers.push(q._tempData);
		},
		// 交卷
		submitHomework() {
			let that = this;
			uni.showModal({
				title: '提示',
				content: '确定要交卷吗？',
				confirmText: '确定',
				cancelText: '取消',
				success() {
					let answer = that.dealData();
					that.submitAnswerRequet(answer, 2);
				}
			});
		},
		// 检查一个选项是否选中
		isChecked(q, o) {
			if (q.Exercise.StudentAnswers && q.Exercise.StudentAnswers.length) {
				// 如果是单选
				if (q.Exercise.TypeID == 1) {
					return q.Exercise.StudentAnswers == o.Option;
				}

				// 如果是多选
				if (q.Exercise.TypeID == 2) {
					return q.Exercise.StudentAnswers.join(',').indexOf(o.Option) >= 0;
				}
			} else {
				return false;
			}
		},
		// 选择选项
		chooseAnsewer(question, option) {
			// 如过是单选
			if (question.Exercise.TypeID == 1) {
				// 将选中内容清空,直接将点击内容放入
				question.Exercise.StudentAnswers = option.Option;
			}

			// 如过是多选
			if (question.Exercise.TypeID == 2) {
				// 检查当前选项是否已经被选中
				console.log('question.Exercise.StudentAnswers', question.Exercise.StudentAnswers);
				let is_select = question.Exercise.StudentAnswers.filter(e => {
					return e == option.Option;
				}).length;

				if (is_select) {
					// 如果已经选中,取消选中
					question.Exercise.StudentAnswers = question.Exercise.StudentAnswers.filter(e => {
						return e != option.Option;
					});
				} else {
					// 如果没有选中,选中
					question.Exercise.StudentAnswers.push(option.Option);
				}
			}

			// 如过是 填空
			if (question.Exercise.TypeID == 3) {
				// 将选中内容清空,直接将点击内容放入
				question.Exercise.StudentAnswers.push(option);
			}

			// 如过是 判断
			if (question.Exercise.TypeID == 4) {
				// 将选中内容清空,直接将点击内容放入
				question.Exercise.StudentAnswers.push(option);
			}

			// 如过是 简答
			if (question.Exercise.TypeID == 5) {
				// 将选中内容清空,直接将点击内容放入
				question.Exercise.StudentAnswers.push(option);
			}
		},

		getWork() {
			let that = this;

			uni.showLoading({
				mask: true
			});

			http.request({
				url: '/api/HomeWorkAndTest/GetExerciseByHomeWorkID',
				data: { homeworkId: this.Id }
			})
				.then(res => {
					uni.hideLoading();

					res = that.fr(res);

					if (res.Code == 200) {
						this.total = res.Data.Total;
						this.stamp = res.Data.Data.Stamp;
						this.workName = res.Data.Data.HomeWorkName;
						this.remainTime = res.Data.Data.RemainTime;
						this.submitFlag = res.Data.Data.IsTemporary;
						this.answerCount = res.Data.Data.AnswerCount;
						this.nonesubmitCount = res.Data.Data.NonesubmitCount;
						this.failedCount = res.Data.Data.FailedCount;
						this.correctRate = res.Data.Data.CorrectRate ? res.Data.Data.CorrectRate : '--';
						this.scores = res.Data.Data.Scores;
						this.arrangeTime = res.Data.Data.ArrangeTime.substring(0, 10);
						this.submitTime = res.Data.Data.HomeWorkEndTime.substring(0, 10);
						this.startTime = res.Data.Data.HomeWorkStartTime;
						this.endTime = res.Data.Data.EndTime;
						this.list = this.dealList(res.Data.Data.CoResourceView);
					} else {
						uni.showToast({
							title: '获取习题信息失败!'
						});
					}
				})
				.catch(err => {});
		},
		dealList(list) {
			let that = this;
			this.subjectiveCount = 0;
			this.objectiveCount = 0;
			for (let item of list) {
				item._tempData = '';
				item.toggleAnalylist = true;
				item.Exercise.JieXi = item.Exercise.JieXi || [];
				item.Exercise.PointList = item.Exercise.PointList || [];
				item.Exercise.answerSheetView = item.Exercise.answerSheetView || [];
				item.Exercise.isSheetView = true;
				item.Exercise.Score = item.Exercise.Score == null ? '--' : item.Exercise.Score;
				that.totalScore = item.Exercise.Score == '--' ? that.totalScore : that.totalScore + item.Exercise.Score;
				if (that.submitFlag == 2) {
					item.Exercise.IsRight = item.Exercise.StudentAnswers.length > 0 ? item.Exercise.StudentAnswers[0].AnswerResult : 0;
					item.Exercise.MyScore = item.Exercise.StudentAnswers.length > 0 ? item.Exercise.StudentAnswers[0].AnswerScore : 0;

					console.log('item.Exercise.MyScore 315', item.Exercise.MyScore);
				} else {
					item.Exercise.IsRight = 0;
					item.Exercise.MyScore = 0;
					console.log('item.Exercise.MyScore 321', item.Exercise.MyScore);
				}
				switch (
					item.Exercise.TypeID //1单选2多选3填空4判断5简答6综合7实训
				) {
					case 1:
						this.objectiveCount += 1;
						item.Exercise.StudentAnswers = item.Exercise.StudentAnswers.length > 0 ? item.Exercise.StudentAnswers[0].SubmitOption : '';
						break;
					case 2:
						this.objectiveCount += 1;
						let myanser = [];
						for (let ans of item.Exercise.StudentAnswers) {
							myanser.push(ans.SubmitOption);
						}
						item.Exercise.StudentAnswers = myanser;
						break;
					case 4:
						this.objectiveCount += 1;
						item.Exercise.StudentAnswers = item.Exercise.StudentAnswers.length > 0 ? item.Exercise.StudentAnswers[0].SubmitOption : '';
						break;
					case 3:
					case 5:
					case 6:
					case 7:
						let _my_score = item.Exercise.MyScore;
						item.Exercise.StudentAnswers = item.Exercise.StudentAnswers.length > 0 ? [item.Exercise.StudentAnswers[0].SubmitAnswer] : [];
						item.Exercise.MyScore = item.Exercise.StudentAnswers.length > 0 && item.Exercise.IsRight != 0 ? item.Exercise.StudentAnswers[0].AnswerScore : '--';
						this.subjectiveCount += 1;
						item.Exercise.MyScore = item.Exercise.MyScore || _my_score;
						console.log('item.Exercise.MyScore 350', JSON.stringify(item), item.Exercise.MyScore);
						break;
					default:
						break;
				}
				if (this.submitFlag == 2 && item.Exercise.StudentAnswers.length == 0) {
					item.Exercise.NoAnswer = true;
					item.Exercise.IsRight = 2;
					item.Exercise.MyScore = 0;

					console.log('item.Exercise.MyScore 360', item.Exercise.MyScore);
				} else {
					item.Exercise.NoAnswer = false;
				}
				item.Exercise.AnylisisList = item.Exercise.AnylisisList || [];
				item.Exercise.HasRirhtAnswer = true;
				for (let opt of item.Exercise.Options) {
					if (opt.IsTrue == '1' && opt.Answer != null) {
						item.Exercise.HasRirhtAnswer = false;
						break;
					}
				}
				for (let reply of item.Exercise.answerSheetView) {
					reply.toggle = false;
					reply.answerSheetViewList = reply.answerSheetViewList || [];
				}
			}
			return list;
		},
		//答题计时
		timingFn() {
			let that = this;
			this.interVal = function() {
				that.seconds += 1;
			};
			if (this.submitFlag !== 2) {
				setInterval(that.interVal, 1000);
			}
		},
		//将秒数转换成时分秒
		formatSeconds(val) {
			if (val == 0) {
				this.seconds = 0;
				this.minutes = 0;
				this.hour = 0;
				return;
			}
			this.seconds = val % 60;
			this.minutes = parseInt(val / 60);
			this.hour = parseInt(val / 60 / 60);
		},
		//回答简答题和填空题
		openDialog(data, index) {
			this.dialogVisible = true;
			this.answerIndex = index;
			this.dialogTitle = '回答';
			let content = data.Exercise.StudentAnswers.length > 0 ? data.Exercise.StudentAnswers[0] : '';
			this.$nextTick(() => {
				EditGenerate('answerEditor', content);
			});
		},
		answerWork() {
			let that = this;
			ue.getKfContent(content => {
				content = content.replace(/(^\s*)|(\s*$)/g, '');
				if (this.dialogTitle == '回答') {
					if (content) {
						this.list[this.answerIndex].Exercise.StudentAnswers[0] = content;
					} else {
						this.list[this.answerIndex].Exercise.StudentAnswers.length = 0;
					}
				}
				if (this.dialogTitle == '提问') {
					if (content) {
						let data = {
							QuestId: this.list[this.answerIndex].Exercise.ID,
							SubmitOption: this.stamp,
							SubmitAnswer: encodeURIComponent(content)
						};
						this.submitQuestion(data);
					} else {
						this.showMsg('warning', '提问内容不能为空!');
						return;
					}
				}
				if (this.dialogTitle == '回复') {
					if (content) {
						let data = {
							QuestId: this.list[this.answerIndex].Exercise.ID,
							ParentId: this.replyId,
							SubmitOption: this.stamp,
							SubmitAnswer: encodeURIComponent(content),
							SubmitId: this.replayQuesId
						};
						this.submitReply(data);
					} else {
						this.showMsg('warning', '回复内容不能为空!');
						return;
					}
				}
				if (this.dialogTitle == '编辑') {
					if (content) {
						let data = {
							Id: this.replyId,
							SubmitAnswer: encodeURIComponent(content)
						};
						this.editReplayAxios(data);
					} else {
						this.showMsg('warning', '内容不能为空!');
						return;
					}
				}
				this.dialogVisible = false;
			});
		},
		getServiceTime() {
			axios({
				method: 'Get',
				url: '/api/Common/GetServerDate'
			}).then(res => {
				if (res != undefined && typeof res == 'object' && res.Code == 200) {
					this.serviceTime = new Date(res.Data.replace(/\"/g, ''));
				}
			});
		},
		//处理交卷数据
		dealData() {
			let answer = [];
			for (let item of this.list) {
				let obj = { Options: [], QuestId: '' };
				obj.QuestId = item.Exercise.ID;
				obj.Options = [];
				if (item.Exercise.StudentAnswers.length == 0) {
					continue;
				}
				switch (item.Exercise.TypeID) {
					case 1:
						obj.QuestType = 2;
						obj.Options[0] = {};
						obj.Options[0].Option = item.Exercise.StudentAnswers.length > 0 ? item.Exercise.StudentAnswers : '';
						obj.Options[0].AnswerResult = 2;
						obj.Options[0].AnswerScore = 0;
						for (let opt of item.Exercise.Options) {
							if (opt.Option == obj.Options[0].Option && opt.IsTrue == '1') {
								obj.Options[0].AnswerResult = 1;
								obj.Options[0].AnswerScore = item.Exercise.Score == '--' ? 0 : item.Exercise.Score;
							}
						}
						break;
					case 2:
						obj.QuestType = 2;
						let myanswer = item.Exercise.StudentAnswers,
							rightanswer = [];
						for (let opt of item.Exercise.Options) {
							if (opt.IsTrue == '1') {
								rightanswer.push(opt.Option);
							}
						}
						myanswer = myanswer.sort().join('');
						rightanswer = rightanswer.sort().join('');
						for (let i = 0; i < item.Exercise.StudentAnswers.length; i++) {
							obj.Options[i] = {};
							obj.Options[i].Option = item.Exercise.StudentAnswers[i];
							if (myanswer == rightanswer) {
								obj.Options[i].AnswerResult = 1;
								obj.Options[i].AnswerScore = item.Exercise.Score == '--' ? 0 : item.Exercise.Score;
							} else {
								obj.Options[i].AnswerResult = 2;
								obj.Options[i].AnswerScore = 0;
							}
						}
						break;
					case 4:
						obj.QuestType = 2;
						obj.Options[0] = {};
						obj.Options[0].Option = item.Exercise.StudentAnswers.length > 0 ? item.Exercise.StudentAnswers : '';
						obj.Options[0].AnswerResult = 2;
						obj.Options[0].AnswerScore = 0;
						for (let opt of item.Exercise.Options) {
							if (opt.Answer == obj.Options[0].Option && opt.IsTrue == '1') {
								obj.Options[0].AnswerResult = 1;
								obj.Options[0].AnswerScore = item.Exercise.Score == '--' ? 0 : item.Exercise.Score;
							}
						}
						break;
					default:
						obj.QuestType = 1;
						obj.QuestType = 2;
						obj.Options[0] = {};
						obj.Options[0].Answer = encodeURIComponent(item.Exercise.StudentAnswers);
						obj.Options[0].AnswerResult = 0;
						obj.Options[0].AnswerScore = 0;
						break;
				}
				answer.push(obj);
			}
			return answer;
		},
		submitAnswerRequet(answer, flag) {
			let that = this;
			clearInterval(that.interVal);
			let RemainTime = 0;
			this.hour = this.hour < 0 ? 0 : this.hour;
			this.minutes = this.minutes < 0 ? 0 : this.minutes;
			this.seconds = this.seconds < 0 ? 0 : this.seconds;
			RemainTime = this.hour * 3600 + this.minutes * 60 + this.seconds;
			http.request({
				url: '/api/HomeWorkAndTest/HomeworkSubmit',
				method: 'POST',
				data: {
					HomeworkId: this.Id,
					Answers: answer,
					RemainTime: RemainTime,
					SubmitStatus: flag,
					CreateTime: this.serviceTime
				}
			})
				.then(res => {
					res = that.fr(res);
					if (res.Code == 200) {
						uni.showToast({
							title: '提交成功'
						});
						
						uni.switchTab({
							url:"../../myHomework/myHomework"
						})
					}
				})
				.catch(err => {});
		},
		submitAnswer() {
			let answer = this.dealData();
			if (answer.length < this.list.length) {
				this.$confirm('您还有未答完的题，是否确认提交?', '消息', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				})
					.then(() => {
						this.submitAnswerRequet(answer, 2);
					})
					.catch(() => {
						return;
					});
			} else {
				this.submitAnswerRequet(answer, 2);
			}
		},
		tempporaryAnswer() {
			this.$confirm('确定要暂停答题？确认后答题进度会保存。', '消息', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			})
				.then(() => {
					let answer = this.dealData();
					this.submitAnswerRequet(answer, 1);
				})
				.catch(() => {
					return;
				});
		},
		//问答提问
		askQuestion(index) {
			this.dialogVisible = true;
			this.dialogTitle = '提问';
			this.answerIndex = index;
			this.$nextTick(() => {
				EditGenerate('answerEditor', '');
			});
		},
		submitQuestion(data) {
			axios
				.post('/api/HomeWorkAndTest/AddQuestion', qs.stringify(data))
				.then(res => {
					if (res.Code == 200) {
						this.getSingleQuestion();
					} else {
						this.showMsg('error', '提问失败！');
					}
				})
				.catch(err => {});
		},
		//回复
		replyQuestion(index, data, reply) {
			this.dialogVisible = true;
			this.dialogTitle = '回复';
			this.answerIndex = index;
			this.replyId = data.Id;
			this.replayQuesId = reply.Id;
			this.$nextTick(() => {
				EditGenerate('answerEditor', '');
			});
		},
		submitReply(data) {
			axios
				.post('/api/HomeWorkAndTest/AddReply', data)
				.then(res => {
					if (res.Code == 200) {
						this.getSingleQuestion();
					} else {
						this.showMsg('error', '回复失败！');
					}
				})
				.catch(err => {});
		},
		//点赞
		doPraise(id, data) {
			axios
				.post(`/api/HomeWorkAndTest/DoPraise?id=${id}`)
				.then(res => {
					if (res.Code == 200) {
						this.getSingleQuestion();
					} else {
						this.showMsg('error', '点赞失败!');
					}
				})
				.catch(err => {});
		},
		//获取单个题目下的提问和答复
		getSingleQuestion() {
			axios
				.get('/api/HomeWorkAndTest/GetQuestAndRepalyList', {
					params: {
						stamp: this.stamp,
						questId: this.list[this.answerIndex].Exercise.ID
					}
				})
				.then(res => {
					if (res.Code == 200) {
						this.list[this.answerIndex].Exercise.answerSheetView.length = 0;
						for (let i = 0; i < res.Data.length; i++) {
							res.Data[i].answerSheetViewList = res.Data[i].answerSheetViewList || [];
							res.Data[i].toggle = false;
							this.list[this.answerIndex].Exercise.answerSheetView.push(res.Data[i]);
						}
					}
				})
				.catch(err => {});
		},
		//删除单个回复
		deleteReply(item, index) {
			this.$confirm('确定要删除么?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			})
				.then(() => {
					this.answerIndex = index;
					axios
						.post('/api/HomeWorkAndTest/DeleteData', {
							Id: item.Id,
							QuestId: item.QuestId,
							SubmitOption: this.stamp
						})
						.then(res => {
							if (res.Code == 200) {
								this.showMsg('success', '删除成功!');
								this.getSingleQuestion();
							} else {
								this.showMsg('error', '删除失败!');
							}
						})
						.catch(err => {});
				})
				.catch(() => {});
		},
		//编辑单个回复
		editReply(item, index) {
			this.dialogVisible = true;
			this.dialogTitle = '编辑';
			this.answerIndex = index;
			this.replyId = item.Id;
			this.$nextTick(() => {
				EditGenerate('answerEditor', item.SubmitAnswer);
			});
		},
		editReplayAxios(data) {
			axios
				.post('/api/HomeWorkAndTest/UpdateData', data)
				.then(res => {
					if (res.Code == 200) {
						this.getSingleQuestion();
						this.dialogVisible = false;
					} else {
						this.showMsg('error', '编辑保存失败！');
					}
				})
				.catch(err > {});
		},
		showAnswer(data) {
			console.log(data);
		}
	},
	watch: {
		submitFlag(newVal, oldVal) {
			switch (
				newVal //0未提交//1保存进度//2已提交
			) {
				case 0:
					this.hour = 0;
					this.minutes = 0;
					this.seconds = 0;
					this.timingFn();
					break;
				case 1:
					this.seconds = this.remainTime % 60;
					this.minutes = parseInt(this.remainTime / 60);
					this.hour = parseInt(this.remainTime / 60 / 60);
					this.timingFn();
					break;
				case 2:
					this.remainTime = (this.remainTime / 60).toFixed(2);
					break;
				default:
					break;
			}
		},
		hour(curVal, oldVal) {
			if (curVal < 10) {
				this.hour1 = '0' + curVal;
			} else {
				this.hour1 = this.hour;
			}
		},
		minutes(curVal, oldVal) {
			if (curVal < 10) {
				this.minutes1 = '0' + curVal;
			} else if (curVal > 9 && curVal < 60) {
				this.minutes1 = this.minutes;
			} else if (curVal > 59) {
				this.hour += 1;
				this.minutes = 0;
			}
		},
		seconds(curVal, oldVal) {
			if (curVal < 10) {
				this.seconds1 = '0' + curVal;
			} else if (curVal > 9 && curVal < 60) {
				this.seconds1 = this.seconds;
			} else if (curVal > 59) {
				this.minutes += 1;
				this.seconds = 0;
			}
		}
	},

	onLoad(o) {
		console.log('onLoad');
		this.Id = o.homeworkId;
		this.getWork();
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
