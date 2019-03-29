<template>
	<div id="app">
		{{msg}}
		<navbar slot="navbar" :title="$route.meta.title" v-show="$route.meta.navShow"></navbar>
	</div>
</template>

<script>
	import navbar from './componets/NavBar.vue'
	//import foot from './componets/Footer.vue'

	export default {
		name: 'app',
		components: {
			navbar,
			tabbar
		},
		methods: {},
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
	}
</style>