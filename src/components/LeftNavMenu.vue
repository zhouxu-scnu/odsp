<template>
	<div>		
		<div class="toHomePage" @click="toHomePage">
			<SpriteContainer :width="130" :height="130 / 2.5">
				<div class="icon icon-ODSP-reverse"></div>
			</SpriteContainer>
		</div>
		<Menu theme="dark" accordion :width="width">
			<template v-for="(menu, index) in menus">
				<Submenu :name="index + 1">
					<template slot="title">
						<Icon :type="menu.iconType" />{{menu.title}}
					</template>
					<template v-for="(menuItem, subIndex) in menu.menuItems">
						<router-link :to="menuItem.url" class="navMenuLink">
							<MenuItem :name="(index + 1) + '-' + (subIndex + 1)">
								{{menuItem.name}}
							</MenuItem>
						</router-link>
					</template>
				</Submenu>
			</template>
		</Menu>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: {
			width: {
				type: String,
				default: '240px'
			},
			role: {
				type: String,
				required: true
			}
		},
		data(){
			return {
				menus: []
			}
		},
		watch: {
			role(currentRole){
				switch (currentRole)
				{
				case 'user':
					this.menus = [
						{
							title: '内容管理',
							iconType: 'ios-paper',
							menuItems: [
								{name: '文章管理',url: '/user/time'},
								{name: '评论管理', url: '/user/placeHolder'},
								{name: '举报管理', url: '/user/placeHolder'}
							]
						},
						{
							title: '用户管理',
							iconType: 'ios-people',
							menuItems: [
								{name: '新增用户',url: '/user/placeHolder'},
								{name: '活跃用户', url: '/user/placeHolder'}
							]
						},
						{
							title: '统计分析',
							iconType: 'ios-stats',
							menuItems: [
								{name: '活跃分析',url: '/user/placeHolder'},
								{name: '时段分析', url: '/user/placeHolder'},
								{name: '流失用户', url: '/user/placeHolder'}
							]
						},
					];
					break;
				case 'expert':
					this.menus = [
						{
							title: '用户管理',
							iconType: 'ios-people',
							menuItems: [
								{name: '新增用户',url: '/user/placeHolder'},
								{name: '活跃用户', url: '/user/placeHolder'}
							]
						},
						{
							title: '统计分析',
							iconType: 'ios-stats',
							menuItems: [
								{name: '数据发布工具',url: '/user/placeHolder'},
								{name: '元数据管理工具', url: '/user/placeHolder'},
								{name: '流失用户', url: '/user/placeHolder'}
							]
						},
					];
					break;
				}
			}
		},
		mounted(){
			
		},
		methods: {
			toHomePage(){
				this.$router.push('/');
			}
		}
	}
</script>
<style type="text/css" scoped>
	.navMenuLink {
		color: #fff;
	}
	.toHomePage {
		font-size: 0;
		text-align: center;
		margin-top: 10px;
		cursor: pointer;
	}
</style>