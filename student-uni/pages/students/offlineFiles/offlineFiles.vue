<template>
	<view>
		<uni-nav-bar :statusBar="true" leftIcon="arrowleft" title="离线缓存" @clickLeft="toMyCourse()" rightIcon="gear" @clickRight="delTask('show', '')"></uni-nav-bar>

		<!-- 上方按钮切换是下载中的还是已下载的 -->
		<view class="uni-flex uni-row">
			<view :class="[{ select: tab == 'downloading' }, { unselect: tab == 'downloaded' }]" @click="tab = 'downloading'">
				<text style="line-height: 100rpx; font-size: larger;">下载中</text>
			</view>
			<view :class="[{ unselect: tab == 'downloading' }, { select: tab == 'downloaded' }]" @click="tab = 'downloaded'">
				<text style="line-height: 100rpx; font-size: larger;">已下载</text>
			</view>
		</view>

		ids: {{ deleteTaskIds }}
		<!-- 下载文件列表 -->
		<view class="">
			<view class="" v-for="(t, ti) in list_download_task" :key="ti">
				<!-- 下载中的任务 （当tab是 downloading的时候显示）-->
				<view
					class="uni-flex uni-row"
					:style="{ 'border-bottom': 'solid 1px #07C160', 'background-image': 'linear-gradient(to right, #FFDAB9 ' + t.rate + '%, #F8F8FF 0)' }"
					v-if="tab == 'downloading' && t.rate != 100"
				>
					<!-- 选择删除哪些任务的选中框 -->
					<view v-if="show_select_delete_task">
						<radio style="line-height: 150rpx;margin-left: 20rpx;" :checked="deleteTaskIds.indexOf(t.fileid) >= 0" @click="delTask('add', t)" />
					</view>

					<!-- 下载的文件名 -->
					<view class="" style="width: 600rpx; height: 150rpx; padding-left: 30rpx;  overflow: hidden;">
						<text style="line-height: 150rpx; font-size: large;" @click="read(t)">{{ t.filename }}</text>
					</view>

					<!-- 下载进度 -->
					<view class="" style="margin-left: 20rpx;height: 150rpx; width: 150rpx; text-align: center; ">
						<text v-if="t.is_downloaded" style="font-size: large; text-align: center; line-height: 150rpx;">已下载</text>
						<text v-else style="font-size: xx-large; line-height: 150rpx;">{{ t.rate }}%</text>
					</view>
				</view>

				<!-- 已下载的任务 （当tab是 downloaded的时候显示）-->
				<view class="uni-flex uni-row" style="border-bottom: solid 1px #07C160;" v-if="tab == 'downloaded' && t.rate == 100">
					<view v-if="show_select_delete_task">
						<radio style="line-height: 150rpx; margin-left: 20rpx;" :checked="deleteTaskIds.indexOf(t.fileid) >= 0" @click="delTask('add', t)" />
					</view>

					<!-- 下载的文件名 -->
					<view class="" style="width: 600rpx; height: 150rpx; padding-left: 30rpx; overflow: hidden;">
						<text style="line-height: 150rpx; font-size: large;" @click="read(t)">{{ t.filename }}</text>
					</view>

					<!-- 下载进度 -->
					<view class="" style="margin-left: 20rpx;height: 150rpx; width: 150rpx; text-align: center;">
						<text style="font-size: large; text-align: center; line-height: 150rpx;">已下载</text>
					</view>
				</view>
			</view>
		</view>

		<!-- 如果显示 选择哪些任务删除，显示删除按钮 -->
		<button v-if="show_select_delete_task" type="primary" style="margin: 30rpx;" @click="delTask('confirm')">删除选中的任务</button>
	</view>
</template>

<script>
import http from '@/common/request.js';
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import uniIcons from '@/components/uni-icons/uni-icons.vue';
export default {
	components: {
		uniNavBar,
		uniIcons
	},

	onLoad() {
		let that = this;

		clearInterval(that.it);

		// 获取下载队列
		this.it = setInterval(function() {
			let get_task = uni.getStorageSync('download_task');
			console.log('get_task', get_task);

			try {
				get_task = JSON.parse(get_task);
			} catch (_) {
				get_task = [];
			}

			that.list_download_task = get_task;
		}, 1000);
	},

	beforeDestroy() {
		clearInterval(this.it);
	},
	data() {
		return {
			// 当前的tab是下载中还是已下载（downloading/downloaded）
			tab: 'downloading',

			file_list: [],

			getAppRate: 0,

			// 下载队列
			list_download_task: [],

			// 查询下载进度计时器
			it: '',

			// 要删除的任务id集合
			deleteTaskIds: '',
			deleteTaskPaths: '',

			// 是否显示选择删除那些任务
			show_select_delete_task: false
		};
	},

	onShow() {
		this.reload_offline_files();
	},
	methods: {
		test() {
			uni.navigateTo({
				url: '../../circleRate/circleRate'
			});
		},
		// 删除下载任务
		delTask(t, item) {
			let that = this;

			// 如果是显示选择删除哪些任务(再次点击show会关闭)
			if (t == 'show') {
				if (that.show_select_delete_task) {
					// 如过当前已经是show,则调用关闭
					console.log('二次show，调用关闭（close）');
					that.delTask('close');
				} else {
					// 如过当前是关闭,则打开
					that.deleteTaskIds = '';
					that.deleteTaskPaths = '';
					that.show_select_delete_task = true;
				}
			}

			// 如果是关闭选择删除哪些任务
			if (t == 'close') {
				that.deleteTaskIds = '';
				that.deleteTaskPaths = '';
				that.show_select_delete_task = false;
			}

			// 如果是添加(再次添加删除)
			if (t == 'add') {
				if (that.deleteTaskIds.indexOf(item.fileid) >= 0) {
					// 如过已经包含了当前id,则删除
					that.deleteTaskIds = that.deleteTaskIds.replace(item.fileid, '');
				} else {
					// 如过没有包含,则将其添加到 that.deleteTaskIds 中
					that.deleteTaskIds += ',' + item.fileid;
				}
			}

			// 如过是确认删除任务
			if (t == 'confirm') {
				let tasks = uni.getStorageSync('download_task');

				// 修改映射文件
				try {
					tasks = JSON.parse(tasks);
				} catch (e) {
					tasks = [];
				}

				// 删除本地文件,并返回过滤
				let new_tasks = tasks.filter(e => {
					let is_delete = that.deleteTaskIds.indexOf(e.fileid) >= 0;
					if (is_delete) {
						uni.removeSavedFile({
							filePath: e.filePath
						});
					}
					return !is_delete;
				});
				that.deleteTaskIds = '';
				uni.setStorageSync('download_task', JSON.stringify(new_tasks));
			}
		},
		// 阅读资源
		read(item) {
			console.log(JSON.stringify(item));

			// 跳转到阅读页面
			uni.navigateTo({
				url: `../read/read?isLocal=1&fileid=${item.fileid}`
			});
		},
		// 跳转到我的课程
		toMyCourse() {
			uni.switchTab({
				url: '../myCourse/myCourse'
			});
		},
		// 测试接口

		// 刷新缓存过的离线文件
		reload_offline_files() {
			let that = this;
			let fileInfoMap = uni.getStorageSync(that.offline_file_info_map_name);

			console.log('文件信息映射', fileInfoMap);

			function getFileName(filePath) {
				console.log(filePath);
				let info = fileInfoMap[filePath];

				if (info) {
					// 如过找到文件信息
					let fileName = info.filename;
					return fileName;
				} else {
					return '';
				}
			}

			uni.getSavedFileList({
				success: r_getSavedFileList => {
					console.log('获取离线文件', r_getSavedFileList);
					r_getSavedFileList.fileList.forEach(e => {
						e.filename = getFileName(e.filePath);
					});
				}
			});
		}
	}
};
</script>

<style>
.select {
	width: 100%;
	height: 100rpx;
	background-color: #00ced1;
	border-bottom: solid 5rpx #1e90ff;
	text-align: center;
}

.unselect {
	width: 100%;
	height: 100rpx;
	background-color: #faebd7;
	border-bottom: solid 5rpx #faebd7;
	text-align: center;
}
</style>
