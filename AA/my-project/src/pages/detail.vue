<template>
	<div>{{mesage}}{{$route.params.userId}}</div>
</template>
<script>
	export default{
		 data(){
		 	return{
		 		mesage:'detail'
		 	}
		 },
		 mounted: function(){
	        console.log(this.$route.params);
         }
	}
</script>
<style>
	
</style>