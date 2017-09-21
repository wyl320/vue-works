import Vue from 'vue'
import Router from 'vue-router'
import load from '@/components/load'
import Hello from '@/components/Hello'
import Home from '@/components/home'
import List from '@/pages/list'
import Detail from '@/pages/detail'
import Companya from '@/pages/companya'
import Companyb from '@/pages/companyb'
import ScrollbarPage from '@/pages/ScrollbarPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:'list',
      children:[
         {
          path:'list',
          name:'list',
          component:List
         },
         {
          path:'detail',
          name:'detail',
          component:Detail
         },
         {
          path:'companya',
          name:'companya',
          component:Companya
         },
         {
          path:'companyb',
          name:'companyb',
          component:Companyb
         },
         {
          path:'scrollbar',
          name:'scrollbar',
          component:ScrollbarPage
         }
      ]
    },
    {
      path:'/Hello/:username/:userid',
      name:'Hello',
      component: Hello
    },
    {
      path:'/load',
      name:'load',
      component:load
    }
  ]
})
