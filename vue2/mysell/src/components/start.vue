<template>
	<div class='starts'>
	  <span v-for='item in laststart' :class='item'></span>
	</div>
</template>
<script>
	export default {
		props:{
           scroe:{
           	  type:Number
           }
		},
		data(){
			return {

			}
		},
		computed:{
			laststart : function(){
			   let result = [];
               let scroe = Math.floor(this.scroe*2)/2;
               let inset = Math.floor(this.scroe);
               let haf = this.scroe%1 !==0;
               for (var i=0;i<inset;i++){
                   result.push('on')
               };
               if(haf){
               	  result.push('haf')
               };
               while(result.length<5){
               	  result.push('off')
               };
               console.log(result)
               return result
			}
		}
	}
</script>
<style>
	.starts span{display: inline-block;width: 25px;height: 25px;border:1px solid #ddd;}
	.starts span.on{background: yellow;}
	.starts span.off{background:#ccc;}
	.starts span.haf{background: red;}
</style>