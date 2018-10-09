import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './assets/css/sprite.css'		//加载雪碧图
import SpriteContainer from './components/SpriteContainer.vue'		//加载自定义的缩放雪碧图的组件

Vue.component('SpriteContainer', SpriteContainer);			//将SpriteContainer注册为全局组件

Vue.use(iView);		//使用iView插件

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
	window.document.title = to.meta.title;
	if(to.matched.some(record => record.meta.requiresAuth)){
		if(!window.localStorage.getItem("token")){
			window.document.title = '首页';
			next('/');
			alert("请登录");
		}else{
			next();
		}
	}else{
		next();
	}
})
router.afterEach((to, from, next) => {
	window.scrollTo(0,0);
})
new Vue({
  router,
  render: h => h(App),
  created(){

  }
}).$mount('#app')
