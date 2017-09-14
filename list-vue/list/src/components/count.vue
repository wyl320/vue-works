<template>
	<div>{{countms}}</div>
</template>
<script>
	export default {
		data(){
			return {

			}
		},
		computed :{
			countms () {
			  return this.$store.state.count
			}
		}
	}
</script>
<style></style>