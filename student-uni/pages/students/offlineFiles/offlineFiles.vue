<template>
	<view>
		<uni-nav-bar leftIcon="arrowleft" @clickLeft="toMyCourse()"></uni-nav-bar>

		<!-- 下载文件列表 -->
		<view class="">
			<!-- 每个下载任务 -->
			<view class="" v-for="(t, ti) in list_download_task" :key="ti">
				<view class="uni-flex uni-row" style="border-bottom: solid 1px #07C160;">
					<!-- 下载的文件名 -->
					<view class="" style="width: 600rpx; height: 150rpx; padding-left: 30rpx;">
						<text style="line-height: 150rpx; font-size: large;" @click="read(t)">{{ t.filename }}</text>
					</view>

					<!-- 下载进度 -->
					<view class="" style="margin-left: 20rpx;height: 150rpx; width: 150rpx; text-align: center;">
						<text v-if="t.is_downloaded" style="font-size: large; text-align: center; line-height: 150rpx;">已下载</text>
						<text v-else style="font-size: xx-large; line-height: 150rpx;">{{ t.rate }}%</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import http from '@/common/request.js';
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
export default {
	components: {
		uniNavBar
	},

	created() {
		let that = this;

		// 获取下载队列
		this.it = setInterval(function() {
			let get_task = uni.getStorageSync('download_task');
			
			that.list_download_task = get_task;
		}, 500);
	},

	beforeDestroy() {
		clearInterval(this.it);
	},
	data() {
		return {
			file_list: [],

			getAppRate: 0,

			// 下载队列
			list_download_task: [],

			// 查询下载进度计时器
			it: ''
		};
	},

	computed: {
		rate() {
			return getApp().globalData.downloadRate;
		}
	},

	onLoad() {
		this.reload_offline_files();
		this.test();
	},
	methods: {
		// 阅读资源
		read(item) {
			console.log(JSON.stringify(item));
			
			// 跳转到阅读页面
			uni.navigateTo({
				url:`../read/read?isLocal=1&fileid=${item.fileid}`
			})
		},
		// 跳转到我的课程
		toMyCourse() {
			uni.switchTab({
				url: '../myCourse/myCourse'
			});
			
			
		},
		// 测试接口

		test() {
			console.log('测试 接口 test');
			http.request({
				url: 'http://ve.cnki.net/coeduApi/api/UserExtended/GetUser?userId='
			}).then(r => {
				console.log('测试 接口 返回', JSON.stringify(r));
			});
		},
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

<style></style>
