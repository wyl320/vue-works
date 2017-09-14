import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		count:0
	},
	mutations:{
		'icrement':function(state,num){
			state.count = state.count +num 
		}
	},
	actions:{
		'icrement':function(context,num){
             context.commit('icrement',num)
		}
	},
	getters: {
	  // ...
	   'counter': (state) => {
	    return state.count
	  }
	}
})

