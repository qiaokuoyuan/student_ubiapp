<template>
	<view><text>离线文件</text></view>
</template>

<script>
import http from '@/common/request.js';
export default {
	data() {
		return {
			file_list: []
		};
	},

	onLoad() {
		this.reload_offline_files();
		this.test();
	},
	methods: {
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
