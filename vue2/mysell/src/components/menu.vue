<template>
	<div class='menus'>
	  <template v-for='(item,index) in menulist'>
	  	  <h1 @click='one(index,item.isShowListItem)' :class='{active:index==noIndex}'>{{item.title}}</h1>
		  <ul :class='[checkActive(item.isShowListItem)? "":"on"] '>
		   <li v-for='lis in item.uldata'>{{lis.cont}}</li>
		  </ul>
	  </template>
	  
	</div>
</template>
<script>
    import _ from 'lodash'
	export default {
		props:{
			menulist:{
				type:Array
			}
		},
		data(){
			return {
                noIndex:0,
                al:['a100']
			}
		},
		methods:{
			one(index,id){
              this.noIndex = index
              if(this.al.indexOf(id) === -1){
                 this.al=[]
                 this.al.push(id);
              }else{
                 this.al = _.remove(this.al,function(n){
                 	return n !== id
                 })
              }
			},
			checkActive(index){
                return this.al.indexOf(index) == -1
			}
		},
		computed:{
			setflag(){
              
			}
		}
	}
</script>
<style scoped>
	.menus ul{display: none;}
	.menus h1{cursor: pointer;}
	.active{color:green;}
	.menus ul.on{display: block;}
	.menus{margin-top:40px;}
</style>