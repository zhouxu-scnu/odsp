<template>
	<div>
		<div class="odspBgImg">
			<Input suffix="ios-search" size="large" style="width: 35%;"/>
		</div>	
		<CatalogsIndex class="homeContent"></CatalogsIndex>
		<PlatformNews class="homeContent"></PlatformNews>
	</div>
</template>
<script type="text/javascript">
	import PlatformNews from '../components/PlatformNews.vue';
	import CatalogsIndex from '../components/CatalogsIndex.vue';
	export default {
		data(){
			return {
				
			}
		},
		components: {
			PlatformNews,
			CatalogsIndex
		},
		created(){
			
		},
		methods: {
			
		}
	}
</script>
<style type="text/css" scoped>
	.odspBgImg {
		height: 300px;
		line-height: 250px;
		background-image: url('../assets/images/b1.png');
		background-size: cover;
		text-align: center;
	}
	.homeContent {
		padding: 20px 10%;
	}
</style>