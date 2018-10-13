<template>
	<div>
		<h1>This is Admin page</h1>
		<h3>以下时间是一个components文件夹下的组件，每秒刷新一次</h3>
		<button @click="$router.push('/')">返回首页</button>
		<current-time></current-time>
		<div class="placeholder"></div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Time from '@/components/Time.vue';

	export default {
		components: {
			currentTime: Time
		}
	}
</script>
<style type="text/css" scoped>
	h3 {
		color: #cd0000;
	}
	.placeholder {
		height: 1000px;
	}
</style>
