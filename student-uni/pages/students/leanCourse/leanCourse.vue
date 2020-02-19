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
									<text style="line-height: 100rpx;">{{ r.ResourceName }}</text>
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
						// 如果点击了确定按钮
						that.downloadResource(res);

						that.add_task_ids += ',' + res.ResourceCode;
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

			let downloadTask = uni.downloadFile({
				url: url,
				success: res => {
					if (res.statusCode === 200) {
						console.log('下载成功');
						// 清除下载进度检查器
						clearInterval(it);

						// 将文件 用 saveFile 存储
						console.log('开始 save 到永久目录');
						uni.saveFile({
							tempFilePath: res.tempFilePath,
							success: savedFilePath => {
								console.log('开始 save 到永久目录完成==>', savedFilePath);

								// 如果存储在 storage 中
								let download_task = uni.getStorageSync('download_task') || [];

								// 将下载任务标记为已下载

								let task_find = false;
								for (let i = 0; i < download_task.length; ++i) {
									if (download_task[i].fileid == fileid) {
										console.log(' save 设置100% 完成');
										task_find = true;
										download_task[i].rate = 100;
										download_task[i].save_dir = savedFilePath;
										download_task[i].is_downloaded = true;
										break;
									}
								}

								// 如过未找到任务,则将任务加入到队列,并取消计时器
								if (!task_find) {
									clearInterval(it);
									download_task.push({
										filename,
										fileid,
										rate: 100,
										save_dir: savedFilePath,
										is_downloaded: true
									});
								}

								uni.setStorageSync('download_task', download_task);
							}
						});
					}
				}
			});

			console.log('开始下载');
			// 将下载任务放入队列

			let download_task = uni.getStorageSync('download_task');
			download_task = download_task || [];

			// 先检查任务队列中有没有已经存在当前任务
			if (
				!download_task.find(function(e) {
					return e.fileid == fileid;
				})
			) {
				download_task.push({
					fileid: fileid,
					filename: filename,
					rate: 0,
					save_dir: '',
					is_downloaded: false
				});
				uni.setStorageSync('download_task', download_task);
				// 记录下载进度
				downloadTask.onProgressUpdate(function(r) {
					rate = r.progress;
				});

				// 定时检查下载进度,并将下载进度存放在 getApp 中
				it = setInterval(function() {
					console.log('rate：', rate);

					let task = uni.getStorageSync('download_task') || [];
					for (let i = 0; i < task.length; ++i) {
						if (task[i].fileid == fileid) {
							task[i].rate = rate;
							break;
						}
					}

					console.log('setStorageSync：', JSON.stringify(task));
					uni.setStorageSync('download_task', task);
				}, 2000);
			}
		},
		// 检查一个资源是否已经下载
		downloadStatus(res) {
			try {
				// 如过在 add_task_ids 中,直接判断为 下载中
				if (this.add_task_ids.indexOf(res.ResourceCode) >= 0) {
					return '下载中';
				} else {
					// 如过不在,从  getStorageSync 中找
					let task = uni.getStorageSync('download_task') || [];

					
					console.log("JSON task is ==>",task)
					let task_item = task.find(e => {
						return e.fileid == res.ResourceCode;
					});

					if (task_item) {
						// 如过找到task_item
						if (task_item.is_downloaded) {
							// 如过已经下载完成
							return  '已下载';
						} else if (task_item.rate >= 0 && task_item.rate < 100) {
							// 如过是正在下载
							return '下载中';
						} else {
							// 其他情况返回未知
							return '未知';
						}
					} else {
						// 如过未找到task_item,返回未下载
						return '未下载';
					}
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
