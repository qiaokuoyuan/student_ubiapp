<template>
	<view>
		<view class="">
			<view class="" v-for="(q, qi) in list_questions" :key="qi">
				xxx
				<view class="">
					<!-- 题目 -->
					<uni-section :title="q.Exercise.Content.replace(/<\/?.+?>/g, '')" type="line"></uni-section>

					<!-- 如果是单选 -->
					<view class="" v-if="q.Exercise.TypeID == 1">
						<!-- 每个选项 -->
						<view class="" v-for="(o, oi) in q.Exercise.Options" :key="oi">{{ o.Answer }}</view>
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
export default {
	components: {
		uniNavBar,
		uniSection
	},
	data() {
		return {
			// 作业id
			homeworkId: '',

			list_questions: []
		};
	},

	onLoad(o) {
		console.log('onLoad');
		this.homeworkId = o.homeworkId;
	},

	onShow() {
		console.log('onShow');
		this.reloadQuestions();
	},
	methods: {
		// 刷新问题集合
		reloadQuestions() {
			let that = this;
			http.request({
				url: '/api/HomeWorkAndTest/GetExerciseByHomeWorkID',
				data: {
					homeworkId: that.homeworkId
				}
			}).then(r => {
				r = that.fr(r);
				if (r.Code == 200) {
					that.list_questions = r.Data.Data.CoResourceView || [];
				}
			});
		}
	}
};
</script>

<style></style>
