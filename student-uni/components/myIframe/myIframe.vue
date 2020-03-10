<template>
	<view><web-view :src="url"></web-view></view>
</template>

<script>
export default {
	data() {
		return {};
	},

	props: {
		url: {
			default: '',
			type: String
		}
	},
	methods: {}
};
</script>

<style></style>
