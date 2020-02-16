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
			<view class="" v-for="(c1, c1i) in list_catalog" :key="c1i" @click="c1.showChildren = !c1.showChildren">
				<!-- 一级目录标题 -->
				<view style="font-size: large; padding: 20rpx; background-color:#DCDFE6; margin: 10rpx 0;">{{ c1.fullName }}</view>

				<!-- 二级目录 -->
				<view class="" v-for="(c2, c2i) in c1.children" :key="c2i" v-if="c1.showChildren" @click.stop="c2.showChildren = !c2.showChildren">
					<!-- 2级目录标题 -->
					<view style="font-size:larger ; padding: 20rpx; padding-left: 40rpx;" @click="toggleShowResource(c2)">
						<uni-icons type="circle" color="#8f8f94" size="25" />
						<text style="margin-left: 20rpx;">{{ c2.fullName }}</text>
						<uni-icons type="arrowdown" color="#8f8f94" size="25" v-if="c2.showResource" />
						<uni-icons type="arrowright" color="#8f8f94" size="25" v-else />
					</view>

					<!-- 二级资源的 资源 -->
					<view class="" v-if="c2.showResource">
						<view class="uni-flex uni-row" v-for="(r, ri) in c2._res" :key="ri" style="margin: 20rpx; margin-left: 60rpx;">
							<uni-tag style="width: 50rpx;" :text="r.ResourceType" type="primary" :circle="true"></uni-tag>
							<view class="" style="margin-left: 30rpx;">
								<text>{{ r.ResourceName }}</text>
							</view>

							<!-- 是否已经下载 -->
							<view class="">
								<!-- 如过已经下载 -->
								<text v-if="isDownload(r)">已下载</text>
								<uni-icons @click="downloadResource(r)" type="download" color="#8f8f94" size="25" v-else />
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
		// 下载一个资源
		downloadResource(res) {
			let that = this;

			// 下载的链接地址
			let url = 'http://1256163091.vod2.myqcloud.com/7d0c14a4vodcq1256163091/e6acd61e5285890795618198824/f0.mp4';

			// 文件id
			let fileid = 'random_fileid' + new Date().getTime();

			// 文件名
			let filename = 'random_filename' + new Date().getTime();

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

						// 将当前任务从下载队列中删除

						if (that.download_task_save_place == 'golbalData') {
							// 如果存储在 golbalData 中

							for (let i = 0; i < getApp().globalData.downloadingTask.length; ++i) {
								if (getApp().globalData.downloadingTask[i].fileid == fileid) {
									console.log('删除下载任务', fileid);
									getApp().globalData.downloadingTask.splice(i, 1);
									break;
								}
							}
						}

						if (that.download_task_save_place == 'storage') {
							// 如果存储在 storage 中
							let download_task = uni.getStorageSync('download_task') || [];

							// 将下载任务标记为已下载
							for (let i = 0; i < download_task.length; ++i) {
								if (download_task[i].fileid == fileid) {
									download_task[i].rate = 100;
									download_task[i].save_dir = res.tempFilePath;
									download_task[i].is_downloaded = true;
								}
							}

							// 将信息回存回storage
							uni.setStorageSync('download_task', download_task);
						}
					}
				}
			});

			console.log('开始下载');
			// 将下载任务放入队列

			let download_task = uni.getStorageSync('download_task');
			download_task = download_task || [];
			download_task.push({
				fileid: fileid,
				filename: filename,
				rate: 0,
				save_dir: '',
				is_downloaded: false
			});
			uni.setStorageSync("download_task",download_task)

			// 记录下载进度
			downloadTask.onProgressUpdate(function(r) {
				rate = r.progress;
			});

			// 定时检查下载进度,并将下载进度存放在 getApp 中
			it = setInterval(function() {
				console.log('rate：', rate);
				// for (let i = 0; i < getApp().globalData.downloadingTask.length; ++i) {
				// 	if (getApp().globalData.downloadingTask[i].fileid == fileid) {
				// 		console.log('set rate:', rate);
				// 		getApp().globalData.downloadingTask[i].rate = rate;
				// 		break;
				// 	}
				// }

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
		},
		// 检查一个资源是否已经下载
		isDownload(res) {
			return false;
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

				http.request({
					url: '/api/ReadOnline/GetAllDataV2',
					data: {
						courseCode: that.courseCode,
						catalogCode: item.id
					}
				}).then(r => {
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
			http.request({
				url: '/api/Catalog/GetCatalogListLv2?courseCode=' + that.courseCode
			}).then(r => {
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
