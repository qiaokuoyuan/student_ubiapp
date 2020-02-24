<template>
	<view>
		<!-- 我的作品详情页面 -->
		<uni-nav-bar leftIcon="arrowleft" @clickLeft="back()" :title="artifactInfo.title" rightText="作品详情" @clickRight="show.artifactInfo = true"></uni-nav-bar>

		<!-- 中间的作品内容 -->
		<view class="" style="margin: 40rpx; word-break: break-all;">
			<view class="" v-html="artifactInfo.content"></view>

			<!-- 下面多留白一块，给按钮流出位置 -->
			<view class="" style="height: 300rpx;"></view>
		</view>

		<!-- 固定下方按钮 -->
		<view class="uni-flex uni-row" style="position: fixed; bottom: 150rpx; width: 100%;" v-if="false">
			<view class="" style="width: 1%;"></view>

			<!-- 点赞 -->
			<view class="btn">
				
				<!-- 如过已经点赞过 -->
				<uni-icons type="hand-thumbsup-filled" style="line-height:100rpx ; margin-left: 80rpx;" size="30"></uni-icons>
				<uni-icons type="hand-thumbsup" style="line-height:100rpx ; margin-left: 80rpx;" size="30"></uni-icons>
				<text style="line-height:100rpx ; margin-left: 30rpx; font-size: large;">33</text>
			</view>

			<view class="" style="width: 2%;"></view>

			<!-- 浏览 -->
			<view class="btn">
				<uni-icons type="eye" style="line-height:100rpx ; margin-left: 80rpx;" size="30"></uni-icons>
				<text style="line-height:100rpx ; margin-left: 30rpx; font-size:30rpx;">33</text>
			</view>

			<view class="" style="width: 1%;"></view>
		</view>

		<!-- 右侧抽屉信息 -->
		<uni-drawer :visible="show.artifactInfo" @close="show.artifactInfo = false" mode="right">
			<view class="" style="height: 100%; overflow:auto">
				<!-- 标题 -->
				<uni-section type="line" title="作品名称"></uni-section>
				<view class="" style="margin: 30rpx;">
					<text>{{ artifactInfo.title }}</text>
				</view>

				<!-- 编辑团队 -->
				<uni-section type="line" title="编辑团队"></uni-section>
				<view class="" style="margin: 30rpx;">
					<text>{{ artifactInfo.team }}</text>
				</view>

				<!-- 学      校 -->
				<uni-section type="line" title="学校"></uni-section>
				<view class="" style="margin: 30rpx;">
					<text>{{ artifactInfo.school }}</text>
				</view>

				<!-- 提交日期 -->
				<uni-section type="line" title="提交日期"></uni-section>
				<view class="" style="margin: 30rpx;">
					<text>{{ artifactInfo.date }}</text>
				</view>

				<!-- 作品评价 -->
				<uni-section type="line" title="作品评价"></uni-section>
				<view class="" style="margin: 30rpx;">
					<text>{{ artifactInfo.pingjia }}</text>
				</view>

				<!-- 评价教师 -->
				<uni-section type="line" title="评价教师"></uni-section>
				<view class="" style="margin: 30rpx;">
					<text>{{ artifactInfo.pingjia_teacher }}</text>
				</view>

				<!-- 评语 -->
				<uni-section type="line" title="评语"></uni-section>
				<view class="" style="margin: 30rpx;">
					<text>{{ artifactInfo.pingyu }}</text>
				</view>
			</view>
		</uni-drawer>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import http from '@/common/request.js';
import uniSection from '@/components/uni-section/uni-section.vue';
import uniIcons from '@/components/uni-icons/uni-icons.vue';
import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
export default {
	components: {
		uniDrawer,
		uniIcons,
		uniNavBar,
		uniSection
	},
	onLoad(o) {
		this.id = o.id;
		this.reloadArtifactInfo();
	},
	data() {
		return {
			id: '',
			title: '',

			artifactInfo: {
				title: '',
				team: '',
				school: '',
				date: '',
				pingjia: '',
				pingjia_teacher: '',
				pingyu: '',
				content: '',
				
				// 是否已经点赞
				isThumbUp:false
			},
			show: {
				artifactInfo: false
			}
		};
	},
	methods: {
		back() {
			uni.navigateBack({});
		},
		reloadArtifactInfo() {
			let that = this;
			http.request({
				url: '/api/StudentWork/GetStudentWorkInfo?studentWorkCode=' + that.id
			}).then(r => {
				r = that.fr(r);
				if (r.Code == 200) {
					that.artifactInfo.title = r.Data.StudentWorkName;
					that.artifactInfo.team = r.Data.StudentWorkMember.map(e => {
						return e.RealName;
					}).join(',');
					that.artifactInfo.school = r.Other;
					that.artifactInfo.date = r.Data.CreateTime.substring(0, 10);
					that.artifactInfo.pingjia = r.Data.Score;
					that.artifactInfo.pingjia_teacher = r.Data.ReviewsTeacherName;
					that.artifactInfo.pingyu = r.Data.Reviews;
					that.artifactInfo.content = r.Data.Content;

					// that.artifactInfo.content = new Array(9999).fill('x');
				}
			});
		}
	}
};
</script>

<style>
.btn {
	width: 48%;
	height: 100rpx;
	background-color: #00e5ee;
	/* border-radius: 10rpx; */
	border: solid 1rpx #00e5ee;
}
</style>
