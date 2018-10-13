<template>
	<div class="container">
		<div class="leftNav">
			<LeftNavMenu width="200px" :role="userRole"></LeftNavMenu>
		</div>
		<div class="content">
			<router-view></router-view>
			<!-- <div style="height: 3000px;"></div> -->
		</div>
	</div>
</template>
<script type="text/javascript">
	import LeftNavMenu from '@/components/LeftNavMenu.vue';
	export default {
		data(){
			return {
				userRole: ''
			}
		},
		components: {
			LeftNavMenu
		},
		created(){
			setTimeout(() => {
				this.userRole = 'user';
			},50);
		},
		mounted(){
			
		}
	}
</script>
<style type="text/css" scoped>
	.container {
		display: flex;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	.leftNav {
		flex: 0 0 200px;
		align-items: stretch;
		background-color: #515a6e;
	}
	.content {
		flex: 1;
		align-items: stretch;
		overflow: auto;
	}
</style>