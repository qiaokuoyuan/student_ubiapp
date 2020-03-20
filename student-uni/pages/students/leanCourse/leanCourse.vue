<template>
	<view>
		<!-- 头部导航 -->
		<uni-nav-bar leftIcon="arrowleft" @clickLeft="back()"></uni-nav-bar>

		<!-- 头部图片 -->
		<view class=""><image @click="lgThis()" style="width: 100%; height: 400rpx;" src="../../../static/default_course_logo.jpg" mode=""></image></view>

		<!-- 课程目录 -->

		<!-- 自己实现 collpase -->

		<view class="">
			<!-- 一级目录 -->
			<view class="" v-for="(c1, c1i) in list_catalog" :key="c1i">
				<view class="" @click="changeAttr(c1, 'showChildren', !c1.showChildren)">
					<!-- 一级目录标题 -->
					<view style="font-size: large; padding: 20rpx; background-color:#DCDFE6; margin: 10rpx 0;">{{ c1.fullName }}</view>

					<!-- 二级目录 -->
					<view class="" v-for="(c2, c2i) in c1.children" :key="c2i" v-if="c1.showChildren" @click.stop="changeAttr(c2, 'showChildren', !c2.showChildren)">
						<!-- 2级目录标题 -->
						<view style="font-size:larger ; padding: 20rpx; padding-left: 40rpx;" @click="toggleShowResource(c2)">
							<uni-icons type="circle" color="#8f8f94" size="25" />
							<text style="margin-left: 20rpx;">{{ c2.fullName }}</text>
							<uni-icons type="arrowdown" color="#8f8f94" size="25" v-if="c2.showResource" />
							<uni-icons type="arrowright" color="#8f8f94" size="25" v-else />
						</view>

						<!-- 二级资源的 资源 -->
						<view class="" v-show="c2.showResource">
							<view class="uni-flex uni-row" v-for="(r, ri) in c2._res" :key="ri" style="height: 100rpx ; margin-left: 60rpx;">
								<uni-tag style="width: 50rpx; margin-top: 30rpx;" :text="r.ResourceType" type="primary" :circle="true"></uni-tag>
								<view class="" style="margin-left: 30rpx; width: 400rpx; overflow: hidden; ">
									<text style="line-height: 100rpx;" @click="readResource(r)">{{ r.ResourceName }}</text>
								</view>

								<!-- 是否已经下载 -->
								<view class="" style="margin-left: 30rpx; overflow: hidden; ">
									<!-- 如过已经下载 -->

									<uni-icons v-if="downloadStatus(r) == '已下载'" type="checkbox-filled" style="line-height:100rpx ; float: right;" size="30" color="#87CEEB" />
									<text v-if="downloadStatus(r) == '下载中'" style="line-height:100rpx">下载中</text>
									<uni-icons
										v-if="downloadStatus(r) == '未下载'"
										@click="askDownload(r)"
										type="download"
										style="line-height:100rpx ;"
										size="30"
										color="#87CEEB"
									/>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import http from '@/common/request.js';
import uniSection from '@/components/uni-section/uni-section.vue';
import uniCollapse from '@/components/uni-collapse/uni-collapse.vue';
import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue';
import uniTag from '@/components/uni-tag/uni-tag.vue';
import uniIcons from '@/components/uni-icons/uni-icons.vue';
export default {
	components: {
		uniNavBar,
		uniSection,
		uniCollapse,
		uniCollapseItem,
		uniTag,
		uniIcons
	},
	data() {
		return {
			// 新添加的下载任务集合
			add_task_ids: '',

			// 课程code
			courseCode: '',

			// 目录结构图
			list_catalog: [],

			// 当前一级节点点开的是第几个
			current_catalog_index_lv1: 0,
			current_catalog_index_lv2: 0
		};
	},

	onLoad(o) {
		this.courseCode = o.courseCode;

		// 刷新目录
		this.reloadCatalog();
	},
	methods: {
		// 在线阅读
		readOnline(item) {
			let that = this;

			// 检查当前是否在 wifi模式下
			uni.getNetworkType({
				success(r) {
					console.log('当前网络：', JSON.stringify(r));

					// 如果当前不是wifi,弹窗警告
					if (r.networkType != 'wifi') {
						uni.showModal({
							confirmText: '确定',
							cancelText: '取消',
							content: '当前未处于wifi模式下，确定要查看吗？',
							title: '警告',
							success(r2) {
								if (r2.confirm) {
									// 如果是视频,跳转阅读页面
									if (item.ResourceName.indexOf('.mp4') >= 0) {
										let url = '../read/read';
										url += '?resType=video';
										url += '&resTitle=' + item.ResourceName;
										url += '&resUrl=' + that.https(item.Link);
										uni.navigateTo({
											url: url
										});
									} else if (item.ResourceName.indexOf('.pdf') >= 0 || item.ResourceName.indexOf('.doc') >= 0) {
										let url = '../read/read';
										url += "?resType=''";
										url += '&resTitle=' + item.ResourceName;
										url += '&resUrl=' + that.https(item.Link);
										uni.navigateTo({
											url: url
										});
									}
								}
							}
						});
					}
				}
			});
		},

		// 阅读离线缓存
		readOffline(item) {
			// 跳转到阅读页面
			uni.navigateTo({
				url: `../read/read?isLocal=1&fileid=${item.ResourceCode}`
			});
		},

		// 在线阅读资源
		readResource(item) {
			console.log('尝试阅读：', JSON.stringify(item));

			// 检查当前元素是否被下载过
			let _status = this.downloadStatus(item);
			console.log('_status：', _status);
			// 如果是未下载,在线阅读
			if ('未下载' == _status) {
				this.readOnline(item);
			}

			// 如果是已下载,在线阅读
			if ('已下载' == _status) {
				this.readOffline(item);
			}
		},
		// 由于微信小程序不支持将 表达式写在标签上,单独使用一个函数
		changeShowChildren(item) {
			item.showChildren = !item.showChildren;
		},
		// 询问是否要下载一个资源
		askDownload(res) {
			console.log('enter askDownload');
			let that = this;
			uni.showModal({
				title: '提示',
				content: '确认下载吗？',
				showCancel: true,
				success: e => {
					if (e.confirm) {
						// 如果点击了确定按钮  再次检查是否是Wifi
						uni.getNetworkType({
							success(r) {
								if (r.networkType != 'wifi') {
									uni.showModal({
										confirmText: '确定',
										cancelText: '取消',
										content: '当前未处于wifi模式下，确定要查看吗？',
										title: '警告',
										success(r2) {
											if (r2.confirm) {
												that.downloadResource(res);
												that.add_task_ids += ',' + res.ResourceCode;
											}
										}
									});
								} else {
									// 如果已经是wifi,则直接下载
									that.downloadResource(res);
									that.add_task_ids += ',' + res.ResourceCode;
								}
							}
						});
					}
				}
			});
		},
		// 下载一个资源
		downloadResource(res) {
			let that = this;

			console.log('开始下载==》', JSON.stringify(res));

			// 下载的链接地址
			let url = res.Link;

			// 文件id
			let fileid = res.ResourceCode;

			// 文件名
			let filename = res.ResourceName;

			// 当前文件下载进度
			let rate = 0;

			// 获取文件下载信息的计时器(先清空)
			let it = '';

			// 先将原始任务放入 download_task
			let _download_task = uni.getStorageSync('download_task');
			try {
				_download_task = JSON.parse(_download_task);
			} catch (_) {
				_download_task = [];
			}
			_download_task.push({
				fileid: fileid,
				rate: 0,
				filename: res.ResourceName,
				url: res.Link
			});
			uni.setStorageSync('download_task', JSON.stringify(_download_task));

			let downloadTask = uni.downloadFile({
				url: url,
				success: res => {
					if (res.statusCode === 200) {
						console.log('下载成功,开始保存到本地');

						// 将文件保存到本地
						uni.saveFile({
							tempFilePath: res.tempFilePath,
							success: saveFile_success => {
								console.log('保存到本地成功');

								// 将状态设置为已经下载
								let _download_task = uni.getStorageSync('download_task') || '[]';
								_download_task = JSON.parse(_download_task);
								_download_task.forEach(e => {
									if (e.fileid == fileid) {
										e.rate = 100;
										e.path = saveFile_success.savedFilePath;
									}
								});

								// 更新download_task列表
								uni.setStorageSync('download_task', JSON.stringify(_download_task));
							}
						});
					}
				},
				fail(r_fail) {
					console.log('下载失败', r_fail);
				}
			});

			// 下载进度
			let lastUpdateRateTime = new Date().getTime();
			downloadTask.onProgressUpdate(function(r) {
				// 获取当前时间,如果频率超过 1000ms 才记录
				let nowTime = new Date().getTime();
				if (nowTime - lastUpdateRateTime > 1000 && r.progress < 99) {
					lastUpdateRateTime = nowTime;
					console.log('设置进度：', r.progress);
					let _download_task = uni.getStorageSync('download_task') || '[]';

					try {
						_download_task = JSON.parse(_download_task);
					} catch (_) {
						_download_task = [];
					}

					_download_task.forEach(e => {
						if (e.fileid == fileid) {
							e.rate = r.progress;
						}
					});
					_download_task = JSON.stringify(_download_task);

					uni.setStorageSync('download_task', _download_task);
				}
			});
		},
		// 检查一个资源是否已经下载
		downloadStatus(res) {
			try {
				// 如过在 add_task_ids 中,直接判断为 下载中
				if (this.add_task_ids.indexOf(res.ResourceCode) >= 0) {
					return '下载中';
				} else {
					// 如过不在,从  getStorageSync 中找
					let _download_task = uni.getStorageSync('download_task');

					try {
						_download_task = JSON.parse(_download_task);
					} catch (_) {
						_download_task = [];
					}

					let status = '未下载';
					_download_task.forEach(e => {
						if (e.fileid == res.ResourceCode && e.rate == 100) {
							status = '已下载';
						}
					});

					return status;
				}
			} catch (e) {
				// 异常返回异常
				return '异常' + e;
			}
		},
		// 获取一个章节的资源
		toggleShowResource(item) {
			let that = this;

			if (item.showResource) {
				// 如果正在显示资源,则不显示资源
				item.showResource = false;
			} else {
				// 如果当前没有显示资源,刷新资源

				item.showResource = true;

				uni.showLoading({
					mask: true
				});

				http.request({
					url: '/api/ReadOnline/GetAllDataV2',
					data: {
						courseCode: that.courseCode,
						catalogCode: item.id
					}
				}).then(r => {
					uni.hideLoading();

					r = that.fr(r);
					if (r.Code == 200) {
						let _modules = r.Data || [];
						let _res = [];
						_modules.forEach(m => {
							m.CoResourceView.forEach(r => {
								_res.push(r);
							});
						});
						item._res = _res;
					}
				});
			}
		},
		lgThis() {
			console.log(JSON.stringify(this.list_catalog));
		},

		// 返回上一级方法
		back() {
			let that = this;
			uni.redirectTo({
				url: `../courseInfo/courseInfo?courseCode=${that.courseCode}`
			});
		},
		// 刷新课程目录
		reloadCatalog() {
			let that = this;

			uni.showLoading({
				mask: true
			});

			http.request({
				url: '/api/Catalog/GetCatalogListLv2?courseCode=' + that.courseCode
			}).then(r => {
				uni.hideLoading();

				r = that.fr(r);
				if (r.Code == 200) {
					// 返回值是数组形式,转换为层级结构（转换为树结构）

					let _catalog_list = r.Data;

					_catalog_list.forEach(e => {
						e._res = [];
						e._modules = [];
						e.showChildren = false;
						e.showResource = false;
					});

					let _catalog_tree = that.toTree(_catalog_list);

					that.list_catalog = _catalog_tree;
				}
			});
		}
	}
};
</script>

<style>
.lv1Select {
	background-color: gray;
}
</style>
