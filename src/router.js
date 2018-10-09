import Vue from 'vue'
import Router from 'vue-router'

//对首屏可以直接访问到的组件采用静态加载，避免刷新时产生晃动
import Home from './views/Home.vue'
import User from './views/User.vue'
import Admin from './views/Admin.vue'
import Dataset from './views/Dataset.vue'
import VisualTool from './views/VisualTool.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页'
      },
      // component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')     //异步加载组件会导致刷新页面时，在加载完成前的瞬间显示首页的顶部导航和底部的组件，从而产生晃动，这里采用静态加载
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      meta: {
        requiresAuth: true,
        title: '用户'
      },
      component: User,
      children: [
        {
          path: 'time',
          meta: {
            title: '时间'
          },
          //对子级路由里的组件采用异步加载，减少首屏加载时间，但刷新时会产生晃动，暂时没找到更好的解决办法
          component: () => import(/* webpackChunkName: "time" */ '@/components/Time.vue')
        },
        {
          path: 'placeHolder',
          meta: {
            title: '占位页'
          },
          component: () => import(/* webpackChunkName: "placeHolder" */ '@/components/PlaceHolder.vue')
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      meta: {
        title: '管理员'
      },
      component: Admin
    },
    {
      path: '/dataset',
      name: 'dataset',
      meta: {
        title: '数据集'
      },
      component: Dataset
    },
    {
      path: '/visualTool',
      name: 'visualTool',
      meta: {
        title: '可视化工具'
      },
      component: VisualTool
    }
  ]
})
