import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'


//异步组件
const User =  r => require.ensure([],() => r(require('@/pages/User.vue')),'user') //webpack 提供的模块拆分函数
const Recommend =  r => require.ensure([],() => r(require('@/pages/Recommend.vue')),'recommend') //webpack 提供的模块拆分函数
const Singer =  r => require.ensure([],() => r(require('@/pages/Singer.vue')),'singer') //webpack 提供的模块拆分函数
const Rank =  r => require.ensure([],() => r(require('@/pages/Rank.vue')),'rank') //webpack 提供的模块拆分函数
const Search =  r => require.ensure([],() => r(require('@/pages/Search.vue')),'search') //webpack 提供的模块拆分函数
const RecommendDetail=  r => require.ensure([],() => r(require('@/pages/RecommendDetail.vue')),'recommenddetail') //webpack 提供的模块拆分函数
const PlayerDetail=  r => require.ensure([],() => r(require('@/pages/PlayerDetail.vue')),'playerdetail') //webpack 提供的模块拆分函数


Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/user',
    	name:'User',
    	component:User
    },
    {
      path:'/recommend',
      name:'Recommend',
      component:Recommend,
      children: [{
        path: 'recommenddetail',
        component: RecommendDetail
      }]
    },
    {
      path:'/singer',
      name:'Singer',
      component:Singer,
      children: [{
        path: 'playerdetail',
        component: PlayerDetail
      }]
    },
    {
      path:'/rank',
      name:'Rank',
      component:Rank
    },
    {
      path:'/search',
      name:'Search',
      component:Search
    },
    {
      path:'/',
      redirect:'/recommend' 
    }
  
  ]
})


/*{
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    */ 