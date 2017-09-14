<template>
	<div class="markfom">
	  <div class="mark"></div>
	  <div class="fomg">
		  <h2><span>修改质料</span><em v-on:click="close">关闭</em></h2>
	      <div class="center">
	      	<p>{{this.nowitem.username}}</p>
	      	<p><input type="text" :value="this.nowitem.username"></p>
	      </div>
	      <p><button>确定</button></p>
      </div>
	</div>
</template>
<script>
	export default {
		props:{
            nowitem:{
            	type:Object
            }
		},
		data(){
			return {
                ismark:false,
                nowuser:{}
			}
		},
		methods:{
			close(){
                this.$emit("onclose")
			}
		},
		watch:{
			nowitem(){
				return this.nowitem
			}
		}
	}
</script>
<style scoped>
	.mark{position: absolute;top:0px;left:0px;background: #000;opacity: 0.5;width:100%;height: 100%;}
	.fomg{width:300px;height:300px;position: absolute;top:50%;left:50%;margin-top:-150px;margin-left:-150px;border:1px solid #ddd;background: #fff;}
</style>