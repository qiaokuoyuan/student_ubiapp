<template>
	<view>
		<!-- 资源标题 -->
		<uni-nav-bar :statusBar="true" :title="resTitle" leftIcon="arrowleft" @clickLeft="back()"></uni-nav-bar>

		<!-- 如果是文档 -->
		<view v-if="resType == 'doc'">
			<web-view
				ref="webView"
				style="top: 90px;"
				src="http://ve.cnki.net/OnlineEditor/api/editor/gate?ID=9084506d-36c2-400b-bab8-f271370f0bfc&UserID=0f79635f-80c0-4a6e-a634-30b925a9413a&Edit=false&version=0.74833&Type=embedded"
			></web-view>
		</view>

		<!-- 如过是视频 -->
		<view v-if="resType == 'video'">
			{{ resUrl }}
			<view><video id="myVideo" :src="resUrl" danmu-btn controls poster="https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/poster.png"></video></view>
		</view>
	</view>
</template>

<script>
import uniDrawer from '../../../components/uni-drawer/uni-drawer.vue';
import uniNavBar from '../../../components/uni-nav-bar/uni-nav-bar.vue';
import uniSegmentedControl from '../../../components/uni-segmented-control/uni-segmented-control.vue';
import uniList from '../../../components/uni-list/uni-list.vue';
import uniListItem from '../../../components/uni-list-item/uni-list-item.vue';
import section from '../../../components/uni-section/uni-section.vue';
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
		let that = this;
		this.isLocal = option.isLocal;
		console.log('阅读页参数：', JSON.stringify(option));

		// 如果是本地资源,根据fileid从本地读取
		if (this.isLocal) {
			let res = uni.getStorageSync('download_task');

			try {
				res = JSON.parse(res);
			} catch (_) {
				res = [];
			}

			res = res.find(e => {
				return e.fileid == option.fileid;
			});

			if (res) {
				// 如过找到资源
				console.log('本地资源为：', JSON.stringify(res));

				// 根据文件名称判断文件类型
				let filename = res.filename;
				let save_dir = res.path;

				// 如果是docx
				if (filename.indexOf('.docx') >= 0) {
					console.log('识别为 docx');
					uni.openDocument({
						filePath: save_dir,
						fileType: 'docx'
					});
					return false;
				}
				// 如果是doc
				if (filename.indexOf('.doc') >= 0) {
					console.log('识别为 doc');
					uni.openDocument({
						filePath: save_dir,
						fileType: 'doc'
					});
					return false;
				}

				// 如果是pdf
				if (filename.indexOf('.pdf') >= 0) {
					console.log('识别为 pdf');
					uni.openDocument({
						filePath: save_dir,
						fileType: 'pdf'
					});
					return false;
				}

				// 如果是视频
				if (filename.indexOf('.mp4') >= 0) {
					console.log('识别为 mp4');
					this.resType = 'video';
					this.resTitle = filename;
					this.resUrl = save_dir;

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
			} else {
				// 如过未找到资源
				uni.showToast({
					mask: true,
					title: '未找到资源，请重新下载'
				});
			}
		} else {
			// 如过不是本地资源
			// 如过是视频

			console.log('阅读页识别为在线阅读');
			console.log('option', option);
			console.log('option.resType', option.resType);

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
			} else {
				// 如过不是视频,需要提前下载到本地
				uni.showLoading({
					mask: true
				});
				uni.downloadFile({
					url: option.resUrl,
					success: function(res) {
						var filePath = res.tempFilePath;
						if (option.resUrl.indexOf('.docx') >= 0) {
							// 如果是docx
							uni.openDocument({
								filePath: filePath,
								fileType: 'docx'
							});
						} else if (option.resUrl.indexOf('.doc') >= 0) {
							// 如果是doc
							uni.openDocument({
								filePath: filePath,
								fileType: 'doc'
							});
						} else if (option.resUrl.indexOf('.pdf') >= 0) {
							// 如果是pdf
							uni.openDocument({
								filePath: filePath,
								fileType: 'pdf'
							});
						}
					},
					complete() {
						uni.hideLoading();
					}
				});
			}
		}
	},

	data() {
		return {
			isLocal: false,
			resType: '',
			resUrl: '',
			resTitle: ''
		};
	},
	methods: {
		back() {
			uni.navigateBack({});
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
