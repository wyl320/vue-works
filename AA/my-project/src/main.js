// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
Vue.config.productionTip = false,
Vue.use(VueResource)
const store = new Vuex.Store({
    state:{
      userInfo: { //保存用户信息
        nick: null,
        ulevel: null,
        uid: null,
        portrait: null
      },
      word :{
      	accent:null,
      	pass:null
      }
    },
    mutation:{
      updateUserInfo(state,newInfo){
          this.state.userInfo = newInfo
      },
      setword (state,newword){
      	  this.state.word = newword
      }
    },
    actions:{
      getlodfo (content,newInfo){
        content.commit('updateUserInfo',newInfo)
      }
    }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
