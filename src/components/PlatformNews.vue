<template>
	<div>
		<div class="platformNewsTitle">平台动态</div>
		<div v-for="news in platformNews" class="newsPad">
			<h3>{{news.title}}</h3>
			<div class="time">{{news.time}},来自{{news.from}}</div>
			<p class="content">{{news.content}}</p>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				platformNews: [
					{
						title: '系统适用公告1',
						time: '2017年8月21日21点59分',
						from: '系统管理员',
						content: '在这里您将找到数据、工具和资源来进行研究，开发web和移动应用程序、设计数据的可视化效果，和更多。在这里您将找到数据、工具和资源来进行研究，开发web和移动应用程序、设计数据的可视化效果，和更多。'
					},
					{
						title: '系统适用公告2',
						time: '2017年8月1日22点09分',
						from: '系统管理员',
						content: '在这里您将找到数据、工具和资源来进行研究，开发web和移动应用程序、设计数据的可视化效果，和更多。在这里您将找到数据、工具和资源来进行研究，开发web和移动应用程序、设计数据的可视化效果，和更多。'
					}
				]
			}
		}
	}
</script>
<style type="text/css" scoped>
	.platformNewsTitle {
		border-left: 8px solid;
		padding-left: 10px;
		font-size: 1.5rem;
		font-weight: bold;
		color: #00497A
	}
	.newsPad {
		margin: 10px 0px;
		padding-left: 20px;
		padding-bottom: 5px;
		border-bottom: 1px dashed #ccc;
	}
	.newsPad:last-of-type {
		border-bottom: none;
		padding-bottom: 0;
	}
	.time {
		color: #aaa;
		font-size: 0.8rem;
	}
	.content {
		text-indent: 2em;
/*		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;*/
	}
</style>