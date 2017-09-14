import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)


import Index from '../pages/index.vue'
import News from '../pages/news.vue'
import secondcomponent from '../pages/otherPages.vue'
import thirdcomponent from '../pages/otherPages2.vue'
import Userlist from '../pages/userlist.vue'
import Userdetail from '../pages/Userdetail.vue'
import Tab from '../pages/tab.vue'
export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component:Index,
      redirect:'userlist',
      children:[
          {
            path:'/userlist',
            component:Userlist
          },
          {
            path:'/userdetail',
            component:Userdetail
          },
          {
            path: '/tab',
            component: Tab
          }
      ]
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/second',
      component: secondcomponent
    },
    {
      path: '/third',
      component: thirdcomponent
    }
  ]
})
