<template>
	<view>
		<!-- 资源标题 -->
		<uni-nav-bar
			:title="resTitle || '资源阅读'"
			leftText="其他资源"
			rightText="做笔记"
			@clickLeft="show_left_drawer = true"
			@clickRight="show_right_drawer = true"
		></uni-nav-bar>

		<!-- 如果是文档 -->
		<view v-if="resType == 'doc'">
			<web-view
				ref="webView"
				style="top: 90px;"
				src="http://ve.cnki.net//OnlineEditor/api/editor/gate?ID=9084506d-36c2-400b-bab8-f271370f0bfc&UserID=0f79635f-80c0-4a6e-a634-30b925a9413a&Edit=false&version=0.74833&Type=embedded"
			></web-view>
		</view>

		<!-- 如过是视频 -->
		<view v-if="resType == 'video'">
			<view>
				<video
					id="myVideo"
					:src="resUrl"
					:danmu-list="danmuList"
					enable-danmu
					danmu-btn
					controls
					poster="https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/poster.png"
				></video>
			</view>
			<!-- 发送弹幕 -->
			<view class="uni-list uni-common-mt" v-if="false">
				<view class="uni-list-cell">
					<view><view class="uni-label" v-if="false">弹幕内容</view></view>
					<view class="uni-list-cell-db" v-if="false"><input v-model="danmuValue" class="uni-input" type="text" placeholder="在此处输入弹幕内容" /></view>
				</view>
			</view>
			<view class="uni-btn-v" v-if="false"><button @click="sendDanmu" class="page-body-button">发送弹幕</button></view>
		</view>

		<!-- 左侧抽屉 -->
		<uni-drawer :visible="show_left_drawer" mode="left" @close="show_left_drawer = false"></uni-drawer>

		<!-- 右侧抽屉 -->
		<uni-drawer :visible="show_right_drawer" mode="right" @close="show_right_drawer = false">
			<view style="height: 100%; overflow: auto;">
				<view style="margin: 30rpx 40rpx;">
					<uni-segmented-control
						:current="currentRightTab"
						:values="rightTabs"
						style-type="button"
						active-color="#007aff"
						@clickItem="onClickRightTab"
					></uni-segmented-control>
				</view>

				<!-- 如过是问答内容 -->
				<view class="" v-if="currentRightTab == 0">
					<view class="uni-flex uni-row" v-for="(a, aii) in list_answers" :key="aii">
						<!-- 用户logo -->
						<image style="height: 100rpx; width: 100rpx;" :src="a.HeadImg" mode="scaleToFill"></image>
						<view class="uni-flex uni-column">
							<!-- 提问内容 -->
							<view v-html="a.Content" @longpress="showAnswerMenu(a)"></view>

							<!-- 操作按钮 -->
							<view class="uni-flex uni-row" v-if="0">
								<button type="primary">回复</button>
								<button type="primary">删除</button>
							</view>
						</view>
					</view>
				</view>
				<view class="" v-if="currentRightTab == 1">
					<!-- 每个笔记 -->
					<view class="uni-flex uni-row" style="margin: 40rpx;" v-for="(n, ni) in list_notes" :key="ni">
						<!-- 左侧头像 -->
						<image style="height: 100rpx; width: 100rpx; margin:5rpx;" :src="n.HeadImg" mode="scaleToFill"></image>

						<!-- 右侧笔记内容和编辑按钮 -->
						<view class=""><view style="word-break: break-all;" v-html="n.Content"></view></view>
					</view>

					<!-- 添加笔记 -->
					<section title="添加笔记"></section>
					<input class="uni-input" v-model="ed.note.content" style="margin: 30rpx;" maxlength="500" placeholder="笔记最多500个字" />
					<button type="primary" style="margin: 30rpx;" @click="addNote()">添加笔记</button>
				</view>
			</view>
		</uni-drawer>

		<!-- 编辑器弹窗 -->
		<uni-popup ref="editor">
			<view class="">
				<textarea v-model="editorContent" placeholder="" />
				<view class="uni-flex flex-row">
					<button type="primary">确定</button>
					<button type="primary">取消</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import uniDrawer from '../../../components/uni-drawer/uni-drawer.vue';
import uniNavBar from '../../../components/uni-nav-bar/uni-nav-bar.vue';
import uniSegmentedControl from '../../../components/uni-segmented-control/uni-segmented-control.vue';
import uniList from '../../../components/uni-list/uni-list.vue';
import uniListItem from '../../../components/uni-list-item/uni-list-item.vue';
import section from '../../extUI/section/section.nvue';
import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue';
import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue';
import uniPopup from '../../../components/uni-popup/uni-popup.vue';

export default {
	components: {
		uniDrawer,
		uniNavBar,
		uniSegmentedControl,
		uniList,
		uniListItem,
		section,
		uniSwipeAction,
		uniSwipeActionItem,
		uniPopup
	},
	onLoad(option) {
		// 刷新笔记
		this.reloadNotes();

		// 刷新问答
		this.reloadAnswers();

		// 如过是视频
		if (option.resType == 'video') {
			this.resType = option.resType;
			this.resTitle = option.resTitle;
			this.resUrl = this.fhttp(option.resUrl);

			// #ifndef MP-ALIPAY || MP-TOUTIAO
			this.videoContext = uni.createVideoContext('myVideo');
			// #endif
			// #ifdef APP-PLUS || MP-BAIDU
			setTimeout(() => {
				this.showVideo = true;
			}, 350);
			// #endif
			// #ifndef APP-PLUS || MP-BAIDU
			this.showVideo = true;
			// #endif
		}

		// 如过是文档
		if (option.resType == 'doc') {
			this.resType = 'doc';

			// 设置头部定位定时器
			clearInterval(window.it_doc_head);
			window.it_doc_head = setInterval(function() {
				try {
					document.getElementsByTagName('iframe')[0].style.top = '90px';
				} catch (e) {
					//TODO handle the exception
				}
			}, 100);
		}
	},
	beforeDestroy() {
		clearInterval(window.it_doc_head);
	},
	data() {
		return {
			editorContent:"",
			swipOption: [
				{
					text: '取消',
					style: {
						backgroundColor: '#007aff'
					}
				},
				{
					text: '确认',
					style: {
						backgroundColor: '#dd524d'
					}
				}
			],
			// 右侧抽屉tab
			currentRightTab: 0,
			rightTabs: ['问答', '笔记'],
			resType: '',
			resUrl: '',
			resTitle: '',
			webviewStyles: {
				top: '78px'
			},
			// 右侧的问答和笔记
			list_answers: [],
			list_notes: [],
			show_right_drawer: false,
			show_left_drawer: false,
			danmuList: [
				// {
				// 	text: '第 1s 出现的弹幕',
				// 	color: '#ff0000',
				// 	time: 1
				// },
				// {
				// 	text: '第 3s 出现的弹幕',
				// 	color: '#ff00ff',
				// 	time: 3
				// }
			],
			danmuValue: '',
			ed: {
				note: {
					id: '',
					content: ''
				}
			}
		};
	},
	methods: {
		// 显示问答按钮
		showAnswerMenu(item) {
			let that=this
			uni.showActionSheet({
				title: '请选择操作',
				itemList: ['回复', '编辑', '删除'],
				success(e) {
					// 如过是回复
					if (e.tapIndex == 0) {
						that.$refs.editor.open()
					}
				}
			});
		},
		lp() {
			console.log('long press');
		},
		swipeClick(e, index) {
			console.log(e, index);
		},
		swipeChange(e) {
			console.log(e);
		},
		// 刷新问答
		reloadAnswers() {
			let r = {
				Code: 200,
				Data: {
					List: [
						{
							AccessoryUrl: null,
							AdoptStatus: 0,
							AppId: 'coedu',
							AppendixCount: 0,
							AppendixList: null,
							AudioSrc: null,
							Author: null,
							AuthorId: 'd7f8515d-67b8-4d91-9b30-d1f4c499768d',
							Authority: 1,
							Content: '<p>asdad</p>',
							CreateTime: '2020-02-06T22:19:11',
							Duration: 0,
							EndOffset: 0,
							Extension: 'a27e86db-4661-4d5e-8fc4-48b25bdd638b',
							Format: null,
							HeadImg: 'http://ve.cnki.net/sso/pic/d7f8515d-67b8-4d91-9b30-d1f4c499768d',
							Id: '5a156277-f5ba-4c3d-8b70-f902b21a98b0',
							IsApproved: 0,
							IsLocked: 0,
							IsNoteThumbsUp: false,
							IsOwn: true,
							Level: 0,
							Location: null,
							MarkContent: null,
							ModifyTime: '2020-02-06T22:19:11Z',
							Order: 0,
							OrderNum: 0,
							Origin: null,
							ParAuthId: null,
							ParagraphId: null,
							ParentFloor: 0,
							ParentId: null,
							ParentRealName: null,
							Quote: null,
							RealName: '乔阔远',
							RepliesNum: 0,
							ReplyCount: 4,
							ReplyInfoList: [
								{
									AccessoryUrl: null,
									AdoptStatus: 0,
									AppId: 'coedu',
									AppendixCount: 0,
									AppendixList: null,
									AudioSrc: null,
									Author: null,
									AuthorId: 'd7f8515d-67b8-4d91-9b30-d1f4c499768d',
									Authority: 1,
									Content: '<p>asdad</p>',
									CreateTime: '2020-02-06T22:19:45',
									Duration: 0,
									EndOffset: 0,
									Extension: 'a27e86db-4661-4d5e-8fc4-48b25bdd638b',
									Format: null,
									HeadImg: 'http://ve.cnki.net/sso/pic/d7f8515d-67b8-4d91-9b30-d1f4c499768d',
									Id: '9d0a798c-ee67-4d5e-9a65-d7ea50a3dcc3',
									IsApproved: 0,
									IsLocked: 0,
									IsNoteThumbsUp: false,
									IsOwn: true,
									Level: 0,
									Location: null,
									MarkContent: null,
									ModifyTime: '2020-02-06T22:19:45Z',
									Order: 0,
									OrderNum: 0,
									Origin: null,
									ParAuthId: null,
									ParagraphId: null,
									ParentFloor: 0,
									ParentId: '5a156277-f5ba-4c3d-8b70-f902b21a98b0',
									ParentRealName: '乔阔远',
									Quote: null,
									RealName: '乔阔远',
									RepliesNum: 0,
									ReplyCount: 0,
									ReplyInfoList: null,
									SectionId: null,
									SourceId: '5ae5bb88-66e3-49c7-a3c8-a78a4ef629c3',
									SourceType: 0,
									StartOffset: 0,
									Status: 1,
									ThreadId: '9d0a798c-ee67-4d5e-9a65-d7ea50a3dcc3',
									ThumbSupNum: 0,
									Title: null,
									Type: 0,
									Url: null,
									Width: null,
									XmlContent: null
								},
								{
									AccessoryUrl: null,
									AdoptStatus: 0,
									AppId: 'coedu',
									AppendixCount: 0,
									AppendixList: null,
									AudioSrc: null,
									Author: null,
									AuthorId: 'd7f8515d-67b8-4d91-9b30-d1f4c499768d',
									Authority: 1,
									Content: '<p>ad</p>',
									CreateTime: '2020-02-06T22:19:49',
									Duration: 0,
									EndOffset: 0,
									Extension: 'a27e86db-4661-4d5e-8fc4-48b25bdd638b',
									Format: null,
									HeadImg: 'http://ve.cnki.net/sso/pic/d7f8515d-67b8-4d91-9b30-d1f4c499768d',
									Id: '968af112-b6cb-4629-891d-80d69d6b16b6',
									IsApproved: 0,
									IsLocked: 0,
									IsNoteThumbsUp: false,
									IsOwn: true,
									Level: 0,
									Location: null,
									MarkContent: null,
									ModifyTime: '2020-02-06T22:19:49Z',
									Order: 0,
									OrderNum: 0,
									Origin: null,
									ParAuthId: null,
									ParagraphId: null,
									ParentFloor: 0,
									ParentId: '9d0a798c-ee67-4d5e-9a65-d7ea50a3dcc3',
									ParentRealName: '乔阔远',
									Quote: null,
									RealName: '乔阔远',
									RepliesNum: 0,
									ReplyCount: 0,
									ReplyInfoList: null,
									SectionId: null,
									SourceId: '5ae5bb88-66e3-49c7-a3c8-a78a4ef629c3',
									SourceType: 0,
									StartOffset: 0,
									Status: 1,
									ThreadId: '968af112-b6cb-4629-891d-80d69d6b16b6',
									ThumbSupNum: 0,
									Title: null,
									Type: 0,
									Url: null,
									Width: null,
									XmlContent: null
								},
								{
									AccessoryUrl: null,
									AdoptStatus: 0,
									AppId: 'coedu',
									AppendixCount: 0,
									AppendixList: null,
									AudioSrc: null,
									Author: null,
									AuthorId: 'd7f8515d-67b8-4d91-9b30-d1f4c499768d',
									Authority: 1,
									Content: '<p>asdad</p>',
									CreateTime: '2020-02-06T22:19:42',
									Duration: 0,
									EndOffset: 0,
									Extension: 'a27e86db-4661-4d5e-8fc4-48b25bdd638b',
									Format: null,
									HeadImg: 'http://ve.cnki.net/sso/pic/d7f8515d-67b8-4d91-9b30-d1f4c499768d',
									Id: '8246fbe0-37e4-4dda-8af8-365e1b548c82',
									IsApproved: 0,
									IsLocked: 0,
									IsNoteThumbsUp: false,
									IsOwn: true,
									Level: 0,
									Location: null,
									MarkContent: null,
									ModifyTime: '2020-02-06T22:19:42Z',
									Order: 0,
									OrderNum: 0,
									Origin: null,
									ParAuthId: null,
									ParagraphId: null,
									ParentFloor: 0,
									ParentId: '5a156277-f5ba-4c3d-8b70-f902b21a98b0',
									ParentRealName: '乔阔远',
									Quote: null,
									RealName: '乔阔远',
									RepliesNum: 0,
									ReplyCount: 0,
									ReplyInfoList: null,
									SectionId: null,
									SourceId: '5ae5bb88-66e3-49c7-a3c8-a78a4ef629c3',
									SourceType: 0,
									StartOffset: 0,
									Status: 1,
									ThreadId: '8246fbe0-37e4-4dda-8af8-365e1b548c82',
									ThumbSupNum: 0,
									Title: null,
									Type: 0,
									Url: null,
									Width: null,
									XmlContent: null
								},
								{
									AccessoryUrl: null,
									AdoptStatus: 0,
									AppId: 'coedu',
									AppendixCount: 0,
									AppendixList: null,
									AudioSrc: null,
									Author: null,
									AuthorId: 'd7f8515d-67b8-4d91-9b30-d1f4c499768d',
									Authority: 1,
									Content: '<p>asd</p>',
									CreateTime: '2020-02-07T07:50:33',
									Duration: 0,
									EndOffset: 0,
									Extension: 'a27e86db-4661-4d5e-8fc4-48b25bdd638b',
									Format: null,
									HeadImg: 'http://ve.cnki.net/sso/pic/d7f8515d-67b8-4d91-9b30-d1f4c499768d',
									Id: '2a169032-27fd-40bb-8d19-7bc6ccb38990',
									IsApproved: 0,
									IsLocked: 0,
									IsNoteThumbsUp: false,
									IsOwn: true,
									Level: 0,
									Location: null,
									MarkContent: null,
									ModifyTime: '2020-02-07T07:50:33Z',
									Order: 0,
									OrderNum: 0,
									Origin: null,
									ParAuthId: null,
									ParagraphId: null,
									ParentFloor: 0,
									ParentId: '8246fbe0-37e4-4dda-8af8-365e1b548c82',
									ParentRealName: '乔阔远',
									Quote: null,
									RealName: '乔阔远',
									RepliesNum: 0,
									ReplyCount: 0,
									ReplyInfoList: null,
									SectionId: null,
									SourceId: '5ae5bb88-66e3-49c7-a3c8-a78a4ef629c3',
									SourceType: 0,
									StartOffset: 0,
									Status: 1,
									ThreadId: '2a169032-27fd-40bb-8d19-7bc6ccb38990',
									ThumbSupNum: 0,
									Title: null,
									Type: 0,
									Url: null,
									Width: null,
									XmlContent: null
								}
							],
							SectionId: null,
							SourceId: '5ae5bb88-66e3-49c7-a3c8-a78a4ef629c3',
							SourceType: 0,
							StartOffset: 0,
							Status: 1,
							ThreadId: '5a156277-f5ba-4c3d-8b70-f902b21a98b0',
							ThumbSupNum: 0,
							Title: null,
							Type: 0,
							Url: null,
							Width: null,
							XmlContent: null
						},
						{
							AccessoryUrl: null,
							AdoptStatus: 0,
							AppId: 'coedu',
							AppendixCount: 0,
							AppendixList: null,
							AudioSrc: null,
							Author: null,
							AuthorId: 'd7f8515d-67b8-4d91-9b30-d1f4c499768d',
							Authority: 1,
							Content: '<p>asdad</p>',
							CreateTime: '2020-02-06T22:19:07',
							Duration: 0,
							EndOffset: 0,
							Extension: 'a27e86db-4661-4d5e-8fc4-48b25bdd638b',
							Format: null,
							HeadImg: 'http://ve.cnki.net/sso/pic/d7f8515d-67b8-4d91-9b30-d1f4c499768d',
							Id: '73fb8be0-fb89-4f34-b351-ff1ab02b7a81',
							IsApproved: 0,
							IsLocked: 0,
							IsNoteThumbsUp: false,
							IsOwn: true,
							Level: 0,
							Location: null,
							MarkContent: null,
							ModifyTime: '2020-02-06T22:19:07Z',
							Order: 0,
							OrderNum: 0,
							Origin: null,
							ParAuthId: null,
							ParagraphId: null,
							ParentFloor: 0,
							ParentId: null,
							ParentRealName: null,
							Quote: null,
							RealName: '乔阔远',
							RepliesNum: 0,
							ReplyCount: 0,
							ReplyInfoList: [],
							SectionId: null,
							SourceId: '5ae5bb88-66e3-49c7-a3c8-a78a4ef629c3',
							SourceType: 0,
							StartOffset: 0,
							Status: 1,
							ThreadId: '73fb8be0-fb89-4f34-b351-ff1ab02b7a81',
							ThumbSupNum: 0,
							Title: null,
							Type: 0,
							Url: null,
							Width: null,
							XmlContent: null
						}
					],
					LastModifiedTime: '2020/2/7 7:50:33'
				},
				Error: '获取数据成功',
				Other: null,
				IsMult: false,
				Ext: null,
				Extension: null,
				Total: 0
			};
			this.list_answers = r.Data.List;
		},
		// 添加笔记
		addNote() {
			let that = this;
			this.list_notes.push({
				AccessoryUrl: null,
				AdoptStatus: 0,
				AppId: 'coedu',
				AppendixCount: 0,
				AppendixList: null,
				AudioSrc: null,
				Author: null,
				AuthorId: 'd7f8515d-67b8-4d91-9b30-d1f4c499768d',
				Authority: 1,
				Content: that.ed.note.content,
				CreateTime: '2020-02-06T22:19:02',
				Duration: 0,
				EndOffset: 0,
				Extension: 'a27e86db-4661-4d5e-8fc4-48b25bdd638b',
				Format: null,
				HeadImg: 'http://ve.cnki.net/sso/pic/d7f8515d-67b8-4d91-9b30-d1f4c499768d',
				Id: '8971dc68-7377-4abf-9b3b-7581305dd075',
				IsApproved: 0,
				IsLocked: 0,
				IsNoteThumbsUp: false,
				IsOwn: true,
				Level: 0,
				Location: null,
				MarkContent: null,
				ModifyTime: '2020-02-06T22:19:02Z',
				Order: 0,
				OrderNum: 0,
				Origin: null,
				ParAuthId: null,
				ParagraphId: null,
				ParentFloor: 0,
				ParentId: null,
				ParentRealName: null,
				Quote: null,
				RealName: '乔阔远',
				RepliesNum: 0,
				ReplyCount: 0,
				ReplyInfoList: [],
				SectionId: null,
				SourceId: '5ae5bb88-66e3-49c7-a3c8-a78a4ef629c3',
				SourceType: 0,
				StartOffset: 0,
				Status: 0,
				ThreadId: '8971dc68-7377-4abf-9b3b-7581305dd075',
				ThumbSupNum: 0,
				Title: null,
				Type: 0,
				Url: null,
				Width: null,
				XmlContent: null
			});

			// 添加完成后清空
			that.ed.note.content = '';
		},
		// 刷新笔记
		reloadNotes() {
			let r = {
				Code: 200,
				Data: {
					List: [
						{
							AccessoryUrl: null,
							AdoptStatus: 0,
							AppId: 'coedu',
							AppendixCount: 0,
							AppendixList: null,
							AudioSrc: null,
							Author: null,
							AuthorId: 'd7f8515d-67b8-4d91-9b30-d1f4c499768d',
							Authority: 1,
							Content: '<p>asd</p>',
							CreateTime: '2020-02-06T22:40:24',
							Duration: 0,
							EndOffset: 0,
							Extension: 'a27e86db-4661-4d5e-8fc4-48b25bdd638b',
							Format: null,
							HeadImg: 'http://ve.cnki.net/sso/pic/d7f8515d-67b8-4d91-9b30-d1f4c499768d',
							Id: '72a19ef2-509d-48e6-a81c-1858cbb1d968',
							IsApproved: 0,
							IsLocked: 0,
							IsNoteThumbsUp: false,
							IsOwn: true,
							Level: 0,
							Location: null,
							MarkContent: null,
							ModifyTime: '2020-02-06T22:40:24Z',
							Order: 0,
							OrderNum: 0,
							Origin: null,
							ParAuthId: null,
							ParagraphId: null,
							ParentFloor: 0,
							ParentId: null,
							ParentRealName: null,
							Quote: null,
							RealName: '乔阔远',
							RepliesNum: 0,
							ReplyCount: 0,
							ReplyInfoList: [],
							SectionId: null,
							SourceId: '5ae5bb88-66e3-49c7-a3c8-a78a4ef629c3',
							SourceType: 0,
							StartOffset: 0,
							Status: 0,
							ThreadId: '72a19ef2-509d-48e6-a81c-1858cbb1d968',
							ThumbSupNum: 0,
							Title: null,
							Type: 0,
							Url: null,
							Width: null,
							XmlContent: null
						},
						{
							AccessoryUrl: null,
							AdoptStatus: 0,
							AppId: 'coedu',
							AppendixCount: 0,
							AppendixList: null,
							AudioSrc: null,
							Author: null,
							AuthorId: 'd7f8515d-67b8-4d91-9b30-d1f4c499768d',
							Authority: 1,
							Content: '<p>asdad</p>',
							CreateTime: '2020-02-06T22:23:56',
							Duration: 0,
							EndOffset: 0,
							Extension: 'a27e86db-4661-4d5e-8fc4-48b25bdd638b',
							Format: null,
							HeadImg: 'http://ve.cnki.net/sso/pic/d7f8515d-67b8-4d91-9b30-d1f4c499768d',
							Id: '6b4c42c9-b2c5-4b2a-a860-6cdd55439de1',
							IsApproved: 0,
							IsLocked: 0,
							IsNoteThumbsUp: false,
							IsOwn: true,
							Level: 0,
							Location: null,
							MarkContent: null,
							ModifyTime: '2020-02-06T22:23:56Z',
							Order: 0,
							OrderNum: 0,
							Origin: null,
							ParAuthId: null,
							ParagraphId: null,
							ParentFloor: 0,
							ParentId: null,
							ParentRealName: null,
							Quote: null,
							RealName: '乔阔远',
							RepliesNum: 0,
							ReplyCount: 0,
							ReplyInfoList: [],
							SectionId: null,
							SourceId: '5ae5bb88-66e3-49c7-a3c8-a78a4ef629c3',
							SourceType: 0,
							StartOffset: 0,
							Status: 0,
							ThreadId: '6b4c42c9-b2c5-4b2a-a860-6cdd55439de1',
							ThumbSupNum: 0,
							Title: null,
							Type: 0,
							Url: null,
							Width: null,
							XmlContent: null
						},
						{
							AccessoryUrl: null,
							AdoptStatus: 0,
							AppId: 'coedu',
							AppendixCount: 0,
							AppendixList: null,
							AudioSrc: null,
							Author: null,
							AuthorId: 'd7f8515d-67b8-4d91-9b30-d1f4c499768d',
							Authority: 1,
							Content: '<p>asd</p>',
							CreateTime: '2020-02-06T22:19:16',
							Duration: 0,
							EndOffset: 0,
							Extension: 'a27e86db-4661-4d5e-8fc4-48b25bdd638b',
							Format: null,
							HeadImg: 'http://ve.cnki.net/sso/pic/d7f8515d-67b8-4d91-9b30-d1f4c499768d',
							Id: '8e9d268e-bdff-4554-95d7-097679f966d2',
							IsApproved: 0,
							IsLocked: 0,
							IsNoteThumbsUp: false,
							IsOwn: true,
							Level: 0,
							Location: null,
							MarkContent: null,
							ModifyTime: '2020-02-06T22:19:16Z',
							Order: 0,
							OrderNum: 0,
							Origin: null,
							ParAuthId: null,
							ParagraphId: null,
							ParentFloor: 0,
							ParentId: null,
							ParentRealName: null,
							Quote: null,
							RealName: '乔阔远',
							RepliesNum: 0,
							ReplyCount: 0,
							ReplyInfoList: [],
							SectionId: null,
							SourceId: '5ae5bb88-66e3-49c7-a3c8-a78a4ef629c3',
							SourceType: 0,
							StartOffset: 0,
							Status: 0,
							ThreadId: '8e9d268e-bdff-4554-95d7-097679f966d2',
							ThumbSupNum: 0,
							Title: null,
							Type: 0,
							Url: null,
							Width: null,
							XmlContent: null
						},
						{
							AccessoryUrl: null,
							AdoptStatus: 0,
							AppId: 'coedu',
							AppendixCount: 0,
							AppendixList: null,
							AudioSrc: null,
							Author: null,
							AuthorId: 'd7f8515d-67b8-4d91-9b30-d1f4c499768d',
							Authority: 1,
							Content: '<p>asdad</p>',
							CreateTime: '2020-02-06T22:19:02',
							Duration: 0,
							EndOffset: 0,
							Extension: 'a27e86db-4661-4d5e-8fc4-48b25bdd638b',
							Format: null,
							HeadImg: 'http://ve.cnki.net/sso/pic/d7f8515d-67b8-4d91-9b30-d1f4c499768d',
							Id: '8971dc68-7377-4abf-9b3b-7581305dd075',
							IsApproved: 0,
							IsLocked: 0,
							IsNoteThumbsUp: false,
							IsOwn: true,
							Level: 0,
							Location: null,
							MarkContent: null,
							ModifyTime: '2020-02-06T22:19:02Z',
							Order: 0,
							OrderNum: 0,
							Origin: null,
							ParAuthId: null,
							ParagraphId: null,
							ParentFloor: 0,
							ParentId: null,
							ParentRealName: null,
							Quote: null,
							RealName: '乔阔远',
							RepliesNum: 0,
							ReplyCount: 0,
							ReplyInfoList: [],
							SectionId: null,
							SourceId: '5ae5bb88-66e3-49c7-a3c8-a78a4ef629c3',
							SourceType: 0,
							StartOffset: 0,
							Status: 0,
							ThreadId: '8971dc68-7377-4abf-9b3b-7581305dd075',
							ThumbSupNum: 0,
							Title: null,
							Type: 0,
							Url: null,
							Width: null,
							XmlContent: null
						}
					],
					LastModifiedTime: '2020/2/6 22:40:24'
				},
				Error: '获取数据成功',
				Other: null,
				IsMult: false,
				Ext: null,
				Extension: null,
				Total: 0
			};
			this.list_notes = r.Data.List;
		},
		// 右侧抽屉中tab点击方法
		onClickRightTab(e) {
			this.currentRightTab = e.currentIndex;
		},
		// 发送弹幕方法
		sendDanmu: function() {
			this.videoContext.sendDanmu({
				text: this.danmuValue,
				color: this.getRandomColor()
			});
			this.danmuValue = '';
		},

		// 弹幕随机颜色
		getRandomColor: function() {
			const rgb = [];
			for (let i = 0; i < 3; ++i) {
				let color = Math.floor(Math.random() * 256).toString(16);
				color = color.length == 1 ? '0' + color : color;
				rgb.push(color);
			}
			return '#' + rgb.join('');
		}
	}
};
</script>

<style>
.uni-web-view {
	top: 40rpx !important;
}

.uni-input {
	height: 28px;
	line-height: 28px;
	font-size: 15px;
	padding: 0px;
	flex: 1;
	background-color: #ffffff;
}
</style>
