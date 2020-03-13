<template>
	<view>
		<uni-nav-bar :statusBar="true"  title="个人中心"></uni-nav-bar>

		<!-- 如果登陆 -->
		<view class="" v-show="isLogin">
			<view class="uni-flex" style="margin-top: 100rpx; margin-bottom: 10rpx ;-webkit-justify-content: center;justify-content: center;">
				<image :src="userLogo" mode="scaleToFill" style="height: 200rpx;width: 200rpx"></image>
			</view>
			<view class="uni-flex" style="margin-top: 10rpx; margin-bottom: 3rpx ;-webkit-justify-content: center;justify-content: center;">
				<view class="">
					<text>{{ UnitName }}</text>
				</view>
			</view>
			<view class="uni-flex" style="margin-top: 10rpx; margin-bottom: 3rpx ;-webkit-justify-content: center;justify-content: center;">
				<view class="">
					<text>{{ RealName }}</text>
				</view>
			</view>

			<uni-list>
				<uni-list-item title="我的离线课程" @click="toMyOffline()" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" />
				<uni-list-item title="修改密码" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" />
				<uni-list-item title="清除缓存" @click="clearOfflineFiles()" :badge-text="badge" :show-badge="true" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" />
				<uni-list-item title="版本更新" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" />
			</uni-list>

			<button type="primary" @click="exit()" style="margin: 40rpx;">退出登陆</button>
		</view>

		<!-- 如果没有登陆，输入账号密码 -->
		<view class="" v-if="!isLogin" style="margin: 40rpx;">
			<image src="../../../static/default_course_logo.jpg" style="height: 300rpx; width: 100%;" mode="scaleToFill"></image>

			<input type="text" v-model="username" placeholder="账号" style="border: solid 3rpx #00E5EE; border-radius: 10rpx; font-size: x-large;" />
			<input
				type="text"
				v-model="password"
				placeholder="密码"
				style="border: solid 3rpx #00E5EE; border-radius: 10rpx; font-size: x-large; margin-top: 20rpx; margin-bottom: 30rpx;"
			/>
			<button type="primary" @click="login()">登陆</button>
		</view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import uniSection from '@/components/uni-section/uni-section.vue';
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
import http from '@/common/request.js';
export default {
	components: {
		uniSection,
		uniList,
		uniListItem,
		uniNavBar
	},
	onShow() {
		// this.login();

		this.$store.dispatch('getUserInfo');

		this.getOffileFilesSize();
	},

	computed: {
		// 缓存文件大小
		badge() {
			// 如果是多少K
			if (this.total_size <= 1024 * 1024) {
				return parseInt(this.total_size / 1024) + 'K';
			}
			// 如果是多少M
			if (this.total_size > 1024 * 1024 && this.total_size <= 1024 * 1024 * 1024) {
				return parseInt(this.total_size / (1024 * 1024)) + 'M';
			}
			// 大于1个g都按照g算

			return parseInt(this.total_size / (1024 * 1024 * 1024)) + 'G';
		},

		// 是否已经登陆
		isLogin() {
			return this.$store.getters.getUserInfo.UserID;
		},

		userLogo() {
			return this.$store.getters.getUserInfo.Logo;
		},
		RealName() {
			return this.$store.getters.getUserInfo.RealName;
		},
		UnitName() {
			return this.$store.getters.getUserInfo.UnitName;
		}
	},
	data() {
		return {
			current_head_cookie: '',
			input_head_cookie: '',
			username: 'stu_qiaokuoyuan',
			password: '123456',
			total_size: 0
		};
	},
	methods: {
		// 清除缓存文件
		clearOfflineFiles() {
			let that = this;
			console.log('clearOfflineFiles');
			uni.showModal({
				cancelText: '取消',
				confirmText: '确定',
				title: '提示',
				content: '确定要删除吗',
				success(r) {
					// 如过确定删除
					if (r.confirm) {
						uni.setStorageSync('download_task', '[]');

						// 先获取已经缓存的文件
						uni.getSavedFileList({
							success(r_fs) {
								let file_count = r_fs.fileList.length;
								let del_count = 0;
								r_fs.fileList.forEach(f => {
									uni.removeSavedFile({
										filePath: f.filePath,
										success() {
											++del_count;
											console.log('已经删除' + del_count + '个');
											if (del_count == file_count) {
												uni.showToast({
													title: '删除完成'
												});
											}
										}
									});
								});
							}
						});
					}
				}
			});
		},
		// 跳转到离线文件
		toMyOffline() {
			uni.navigateTo({
				url: '../offlineFiles/offlineFiles'
			});
		},

		// 获取离线缓存文件大小
		getOffileFilesSize() {
			let that = this;
			uni.getSavedFileList({
				success(r) {
					console.log('fs==>', JSON.stringify(r));
					that.total_size = 0;
					r.fileList
						.map(f => {
							return f.size;
						})
						.forEach(_size => {
							that.total_size += _size;
						});
				}
			});
		},

		// 登陆方法
		login() {
			let that = this;

			let _p = that.password;
			let _u = that.username;

			let sign = '';
			let timestamp = '';
			let encoded_passwrod = '';
			let token = '';
			let sid = '';
			let appid = '';

			// 先获取sign
			http.request({
				url: '/api/nologin/getsign',
				method: 'GET'
			}).then(r => {
				r = that.fr(r);
				if (r.Code == 200) {
					sign = r.Data.sign;
					timestamp = r.Data.timestamp;

					// 加密密码
					http.request({
						url: '/api/nologin/GetEncodePass?password=' + _p
					}).then(r_p => {
						r_p = that.fr(r_p);
						if (r_p.Code == 200) {
							encoded_passwrod = r_p.Data;

							// 根据加密后的密码 获取token

							uni.request({
								url: `http://ve.cnki.net/sso/m/login?appId=coeduapi&name=${_u}&pass=${encoded_passwrod}&code=local`,
								header: {
									appid: 'coeduapi',
									sign: sign,
									timestamp: timestamp
								}
							}).then(r3 => {
								r3 = that.fr(r3);

								if (r3.Head.ErrorCode == 0) {
									// 如过密码正确
									token = r3.Body.token;
									console.log('token is==>', token);
									uni.setStorageSync('token', token);
									uni.setStorageSync('sid', sid);
									uni.showToast({
										title: '登陆成功'
									});
									that.$store.dispatch('getUserInfo');
								} else {
									// 如过密码错误
									uni.showToast({
										title: r3.Head.ErrorMessage,
										icon: 'none'
									});
								}
							});
						}
					});
				}
			});
		},

		// 退出方法
		exit() {
			// 清空token和sid
			uni.setStorageSync('token', '');
			uni.setStorageSync('sid', '');

			// 清空用户信息  UserID
			let userInfo = this.$store.getters.getUserInfo;
			userInfo.UserID = 0;

			// 将每个参数都改成空

			// let userInfo2 = { ...userInfo };
			// let keys = Object.keys(userInfo2);

			// console.log('kyes:', keys);
			// keys.forEach(k => {
			// 	userInfo2[k] = '';
			// });

			// console.log('new userInfo:', JSON.stringify(userInfo2));
			this.$store.commit('setUserInfo', userInfo);
			console.log('new userInfo:', JSON.stringify(userInfo));
		}
	}
};
</script>

<style></style>
