<template>
	<view>
		<!-- 头部导航 -->
		<view class="example-body">
			<uni-nav-bar left-icon="arrowleft" right-text="课程简介" left-text="返回" :title="courseDesc.courseTitle" @clickLeft="back" @clickRight="show_desc = true" />
		</view>

		<!-- 中间目录列表 -->
		<view class=""><mix-tree :list="courseCatalog"  @itemClick="itemClick"></mix-tree></view>

		<!-- 简介抽屉 -->
		<uni-drawer :visible="show_desc" @close="show_desc = false" :mask="true" mode="right">
			<view style="height: 100%; overflow: auto;">
				<uni-section title="课程简介" type="line"></uni-section>
				<uni-notice-bar :text="courseDesc.introduction"></uni-notice-bar>

				<uni-section title="选课对象" type="line"></uni-section>
				<uni-notice-bar :text="courseDesc.target"></uni-notice-bar>

				<uni-section title="授课信息" type="line"></uni-section>
				<uni-notice-bar :text="`【${courseDesc.type}】`"></uni-notice-bar>

				<uni-section title="教师简介" type="line"></uni-section>
				<uni-card
					:title="courseDesc.teacherInfo.teahcerName"
					thumbnail=""
					:extra="courseDesc.teacherInfo.teacherRank || '暂无称号'"
					:note="courseDesc.teacherInfo.teacherDesc"
				>
					<view class="image-box"><image class="image" mode="aspectFill" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" /></view>
				</uni-card>

				<uni-section title="团队成员" type="line"></uni-section>
				<uni-notice-bar
					:text="
						courseDesc.members
							.map(e => {
								return e.teahcerName;
							})
							.join(',')
					"
				></uni-notice-bar>

				<uni-section title="课程要求" type="line"></uni-section>
				<uni-notice-bar :text="courseDesc.requirement"></uni-notice-bar>
			</view>
		</uni-drawer>

		<!-- 左下角按钮 -->
		<uni-fab ref="fab" :pattern="fabPattern" :content="fabContent" horizontal="left" vertical="bottom" direction="horizontal" @trigger="trigger" />
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue';
import uniSection from '@/components/uni-section/uni-section.vue';
import uniCard from '@/components/uni-card/uni-card.vue';
import mixTree from '@/components/mix-tree/mix-tree';
import uniFab from '@/components/uni-fab/uni-fab.vue';


const catalog = [
	{
		id: 1,
		name: '第一单元云计算概论',
		children: [
			{
				id: 11,
				name: '1.1云计算概述'
			},
			{
				id: 12,
				name: '1.2云计算数据中心'
			}
		]
	},
	{
		id: 2,
		name: '第二单元云计算关键技术',
		children: [
			{
				id: 21,
				name: '2.1虚拟化技术'
			},
			{
				id: 22,
				name: '2.2虚拟化实验'
			},
			{
				id: 23,
				name: '2.3云安全技术'
			}
		]
	}
];

export default {
	components: {
		uniNavBar,
		uniDrawer,
		uniNoticeBar,
		uniSection,
		uniCard,
		mixTree,
		uniFab
	},

	created() {
		setTimeout(() => {
			this.courseCatalog = catalog;
		}, 300);
	},
	data() {
		return {
			// 是否显示简介
			show_desc: false,

			// 页面中心的课程目录
			courseCatalog: [],

			// 课程简介中课程信息
			courseDesc: {
				courseTitle: '云计算与技术运用',
				introduction:
					'云计算是继1980年代大型计算机到客户端-服务器的大转变之后信息技术领域又一次巨变。从技术上看,大数据与云计算的关系就像一枚硬币的正反面一样密不可分。大数据的特色在于对海量数据的挖掘, 但它必须依托云计算的分布式处理、分布式数据库、云存储和虚拟化技术。“云计算技术与应用”课程在介绍云计算历史、发展及趋势的基础上，重点介绍云计算关键技术、基础架构及各种主流解决方案。课程主要内容包括：云计算概述、云计算关键技术、云服务体系、云计算主流解决方案（Google云计算、Amazon云计算、IBM云计算等）、开源云计算与大数据处理平台（OpenStack、Hadoop等）。由于云计算是近年来计算机科学技术中的研究和应用热点，技术平台更新快，因此本课程会紧密跟踪主流云计算技术及发展，拓宽学生知识面。',
				target: '对云计算有一定基础的学员',
				type: '网授',
				teacherInfo: {
					teacherLogo: '//ve.cnki.net/sso/pic/976eae6c-e378-44f8-ba43-c5033213a554',
					teahcerName: '熊凡',
					techerRank: '',
					teacherDepartment: '研发部',
					teacherDesc: 'java技术专家'
				},
				members: [
					{
						teacherLogo: '//ve.cnki.net/sso/pic/976eae6c-e378-44f8-ba43-c5033213a554',
						teahcerName: '陆蓉'
					},
					{
						teacherLogo: '//ve.cnki.net/sso/pic/976eae6c-e378-44f8-ba43-c5033213a554',
						teahcerName: '李小红'
					}
				],
				requirement:
					'学习本课程前应具备以下几个方面的预备知识： l） 理解计算机组成原理的基本知识； 2） 具备基础的操作系统知识，掌握基本Linux操作命令； 3） 理解计算机网络的基本原理； 4） 掌握基础的Java编程语言。'
			},

			// fab 按钮样式
			fabPattern: {
				color: '#7A7E83',
				backgroundColor: '#fff',
				selectedColor: '#007AFF',
				buttonColor: '#007AFF'
			},

			// fab弹出内容
			fabContent: [
				{
					iconPath: '/static/component.png',
					selectedIconPath: '/static/componentHL.png',
					text: '学习',
					active: false
				},
				{
					iconPath: '/static/api.png',
					selectedIconPath: '/static/apiHL.png',
					text: '交流',
					active: false
				},
				{
					iconPath: '/static/template.png',
					selectedIconPath: '/static/templateHL.png',
					text: '作品',
					active: false
				}
			]
		};
	},

	methods: {
		trigger(e) {
			console.log(e);
		},
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		// 树中元素点击事件
		itemClick(item) {
			console.log(item);
		},
	
	}
};
</script>

<style>
.example-body {
	padding: 5rpx 0;
	padding-top: 20rpx;
	flex-direction: column;
	/* #ifndef APP-NVUE */
	display: block;
	/* #endif */
}
</style>
