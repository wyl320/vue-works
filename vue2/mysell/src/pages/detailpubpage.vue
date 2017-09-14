<template>
    <div>
	<Listsearch :aflist='aflist'></Listsearch>
	</div>
</template>
<script>
	import Listsearch from '../components/listsearch.vue'
	export default {
		components:{
			Listsearch
		},
		data (){
			return {
				aflist:[
	               {names:'rice',ischeck:false,cery:'food',price:200},
	               {names:'pen',ischeck:false,cery:'qita',price:20},
	               {names:'brad',ischeck:false,cery:'food',price:1},
	               {names:'banana',ischeck:false,cery:'friut',price:5},
	               {names:'phone',ischeck:false,cery:'elect',price:2000},
	               {names:'apple',ischeck:false,cery:'friut',price:10},
	               {names:'noddles',ischeck:false,cery:'food',price:55},
	               {names:'pring',ischeck:false,cery:'food',price:34},
	               {names:'momo',ischeck:false,cery:'food',price:10}
	 			]
			}
		}
	}
</script>
<style></style>