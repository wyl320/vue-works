<template>
	<div class='menu'>
	  <template v-for='(item,index) in menulist'>
	  	  <h1 @click='one(index)' :class='{active:index==noIndex}'>{{item.title}}</h1>
		  <ul :class='{on:index==noIndex}'>
		   <li v-for='lis in item.uldata'>{{lis.cont}}</li>
		  </ul>
	  </template>
	  
	</div>
</template>
<script>
	export default {
		props:{
			menulist:{
				type:Array
			}
		},
		data(){
			return {
                noIndex:0
			}
		},
		methods:{
			one(index){
              this.noIndex = index
			}
		}
	}
</script>
<style scoped>
	.menu ul{display: none;}
	.menu h1{cursor: pointer;}
	.active{color:green;}
	.menu ul.on{display: block;}
</style>