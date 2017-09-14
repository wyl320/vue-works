<template>
	<div class='header'>
	   <router-link class='mg' to='/'>{{msg}}</router-link>
	   <div class='rigtlink'>
	   <router-link to='/load' class='ak'>登陆</router-link>
	   <router-link to="/Hello/wuyali2/46">注册</router-link>
	   </div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
			  msg: 'Applogo'
			}
		}
	}
</script>
<style scoped>
.header{height: 50px;background: #000;color: #fff;text-align: left;position: relative;}
.mg{margin-left:20px;}	
.header a{color: #fff;text-decoration: none;}
.rigtlink{position: absolute;right:20px;top:0px;}
.rigtlink{width: 86%;text-align: right;}
</style>