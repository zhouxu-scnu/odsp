<template>
	<div>
		<h1>This is Dataset page</h1>
		<h4>以下数据集信息从后台服务器跨域加载</h4>
		<div v-for="dataset in datasets">
			ID:{{dataset.id}}<br/>Name:{{dataset.name}}
		</div>
	</div>
</template>
<script type="text/javascript">
	import {ServerHost} from '../../projectConfig.js';
	// import $ from 'jquery';
	import {customXhr as $} from '../../customJs.js';
	export default {
		data(){
			return {
				datasets: []
			}
		},
		created(){
			const _this = this;
			$.get_t(ServerHost + 'dataset', function(data, status){
				_this.datasets = data.data;
			})
		}
	}
</script>
<style type="text/css" scoped>
	h4 {
		color: #cd0000;
	}
</style>