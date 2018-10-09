<template>
	<div id="app" :class="{'notIndex': !isIndex}" v-cloak>
		<div v-show="isIndex" class="indexHeader">
			<router-link to="/" active-class class="headerNavBtn">
				<SpriteContainer :width="45 * 2.5" :height="45" class="clearStructHeight">
					<div class="icon icon-ODSP"></div>
				</SpriteContainer>
			</router-link>
			<router-link to="/dataset" active-class class="headerNavBtn">数据</router-link>
			<router-link to="/visualTool" active-class class="headerNavBtn">接口</router-link>	
			<router-link to="/visualTool" active-class class="headerNavBtn">可视化</router-link>
			<div class="headerRightBtnGroup">
				<Button class="headerRightBtn" type="primary" v-if="!isLogin" @click="login">登录</Button>
				<Button class="headerRightBtn" type="warning" v-else @click="logout">注销</Button>
				<router-link to="/user">
					<Avatar icon="ios-person" />
				</router-link>		
			</div>			
		</div>
		<router-view class="content"></router-view>
		<div v-show="isIndex" class="indexFooter">
			<div class="indexFooterLeft">
				<div class="toCenterBox">
					<SpriteContainer :width="45 * 2.5" :height="45">
						<div class="icon-ODSP"></div>
					</SpriteContainer>
					<div style="font-size: 1.3rem;font-weight: bold;color: #00497A;margin: 5px 0px;">开放数据服务平台</div>
					<div style="font-size: .8rem;color: #aaa;">© 2017 华南师范大学 | 移动互联网应用与安全工程技术研究中心</div>
				</div>
			</div>
			<div class="indexFooterRight">
				<div class="toCenterBox">						
					<router-link to="/admin" active-class class="linkWithIcon">
						<Icon type="md-information-circle" /><span class="linkWord">关于</span>
					</router-link>
					<router-link to="/admin" active-class class="linkWithIcon">
						<Icon type="md-mail" /><span class="linkWord">留言</span>
					</router-link>
					<router-link to="/admin" active-class class="linkWithIcon">
						<Icon type="md-home" /><span class="linkWord">系统管理</span>
					</router-link>
					<router-link to="/admin" active-class class="linkWithIcon">
						<Icon type="md-hammer" /><span class="linkWord">开发服务</span>
					</router-link>
				</div>
			</div>		
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				isLogin: ''
			}
		},
		computed: {
			isIndex(){
				return this.$route.path === '/' || this.$route.path === '/dataset';
			}
		},
		created(){
			this.isLogin = window.localStorage.getItem("token") ? true : false;
			if(window.navigator.userAgent.includes('Trident/')){
				document.body.className="ms-ie";
			}
		},
		methods: {
			login(){
				window.localStorage.setItem("token", "this is a token");	//模拟登录成功后将服务器生成的token保存在localStorage中
				this.isLogin = true;
			},
			logout(){
				window.localStorage.clear();
				this.isLogin = false;
			}
		}
	}
</script>
<style>
	[v-cloak] {
		display: none;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box !important;
	}
	html, body {
		height: 100%;
		font-size: 16px !important;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		min-height: 100%;
		display: flex;
		flex-direction: column;
	}
	.icon {
		display: inline-block;
	}
	.ms-ie #app[class~=notIndex] {
		padding: 0;
	}
	.ms-ie #app {
		display: block;
		box-sizing: border-box;
		padding: 55px 0px 160px 0px;
		position: relative;
		background-color: #fff;
		overflow: auto;
	}
	.ms-ie .indexHeader {
		position: absolute;
		top: 0;
		width: 100%;
		height: 55px;
	}
	.ms-ie .indexFooter {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 160px;
	}
	.indexHeader {
		padding: 5px 10%;
		flex: 0 0 55px;
		background-color: #fff;
		text-align: left;
	}
	.headerNavBtn {
		vertical-align: middle;
		font-size: 1.3rem;
		color: #004979;
		font-weight: bold;
		display: inline-block;
		margin-right: 20px;
		text-decoration: none;
	}
	.headerRightBtnGroup {
		display: inline-block;
		height: 45px;
		line-height: 45px;
		font-size: 0;
		float: right;
	}
	.headerRightBtn {
		margin-right: 10px;
	}
	.content {
		flex: 1;
		background-color: #fff;
	}
	.indexFooter {
		flex: 0 0 160px;
		background-color: #e8e8e8;
		padding: 10px 10%;
		line-height: 140px;
	}
	.indexFooterLeft {
		height: 140px;
		line-height: 140px;
		float: left;
		font-size: 0;
	}
	.indexFooterRight {
		height: 140px;
		line-height: 140px;
		float: right;
		font-size: 0;
	}
	.linkWithIcon {
		display: block;
		font-size: .9rem;
		line-height: 1;
		color: #0D527F;
		margin: 5px 0px;
	}
	.linkWithIcon:last-of-type {
		margin-bottom: 0px;
	}
	.linkWord {
		vertical-align: middle;
		margin-left: 5px;
		font-weight: bold;
	}
	h1 {
		margin-top: 0;
	}
	.toCenterBox {
		display: inline-block;
		font-size: 1rem;
		line-height: normal;
		vertical-align: middle;
	}
	.clearStructHeight {
		vertical-align: bottom;
	}
	.router-link-exact-active {
		color: #77767b;
	}
</style>
