<template>
	<button @click='add'>累加按钮</button>
</template>
<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
           add(){  
           	  this.$store.dispatch('icrement', 5)
           }
		}
	}
</script>
<style></style>