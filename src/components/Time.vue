<template>
	<div>{{currentTime}}</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				currentTime: new Date()
			}
		},
		created(){
			setInterval(() => {
				this.currentTime = new Date();
			},1000);
		}
	}
</script>