<template>
	<div>
	  <ul>
	    <li v-for="item in listArray">
	      <span><input type="checkbox"></span>
	      <span>{{item.uid}}</span>
	      <span>{{item.gotGold}}</span>
	      <span>{{item.gotSilve}}</span>
	      <span>{{item.gotCopper}}</span>
	      <span>{{item.giftCount}}</span>
	      <span>{{item.username}}</span>
	      <span>{{item.upLiveCode}}</span>
	      <span><em v-on:click="crect(item)">修改</em><em v-on:click="delet(item)">删除</em></span>
	    </li>
	  </ul>
	</div>
</template>
<script>
	export default {
		props:{
          listArray:{
          	type:Array
          }
		},
		data(){
			return {

			}
		},
		methods: {
			delet(item){
				this.$emit('onchange',item)
			},
			crect(item){
				this.$emit('oncrect',item);
				//console.log(item)
			}
		}
	}
</script>
<style scoped>
	
</style>