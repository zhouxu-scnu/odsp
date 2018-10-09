<template>
	<div>
		<div id="chart" style="width: 800px;height: 400px;"></div>
	</div>	
</template>
<script type="text/javascript">
	import echarts from 'echarts'
	export default {
		data(){
			return {
				option: {
					legend: {},
					tooltip: {},
					dataset: {
						dimensions: ['product', '2015', '2016', '2017'],
						source: [
							{product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
							{product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
							{product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
							{product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
						]
					},
					xAxis: {type: 'category'},
					yAxis: {},
					series: [
						{type: 'bar'},
						{type: 'bar'},
						{type: 'bar'}
					]
				}
			}
		},
		mounted(){
			this.drawChart();
		},
		watch: {
			option: {
				handler(newOption){
					this.drawChart();
				},
				deep: true
			}
		},
		methods: {
			drawChart(){
				var myChart = echarts.init(document.getElementById('chart'));
				myChart.setOption(this.option);
			}
		}
	}
</script>
<style type="text/css" scoped>
	#main {

	}
</style>