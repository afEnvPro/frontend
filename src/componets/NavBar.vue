<template>
	<af-navbar slot="navbar" :title="title">
		<div>
			<span>首页</span>
			<span>关于我们</span>
			<span>我们的服务</span>
			<span>活动</span>
			<span>媒体报道</span>
			<span>加入我们</span>
		</div>
	</af-navbar>
</template>

<script>
	export default {
		props: ['title'],
		methods: {
			back() {
				if(window.history.length <= 1) {
					this.$router.push({
						path: '/'
					})
					return false
				} else {
					this.$router.go(-1)
				}
			}
		}
	}
</script>

<style>

</style>