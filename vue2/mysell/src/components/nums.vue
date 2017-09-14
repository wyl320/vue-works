<template>
    <div class='ask'>
	<a href='javascript:;' @click='add'>+</a>
	<input type='text' v-model='number'>
	<a href="javascript:;" @click='mins'>-</a>
	</div>
</template>
<script >
	export default{
		    props:{
               max:{
               	type:Number,
               	default:5
               },
               min:{
               	type:Number,
               	default:1
               }
		    },
			data(){
				return {
			      number: this.min
			    }
			},
			methods:{
				add(){
				   if(this.number>=this.max){
				   	  return 
				   }else{
                      this.number++
				   }
				},
				mins(){
				   if(this.number<=this.min){
				   	  return 
				   }else{
                      this.number--
				   }
				}
			}
		
	}
</script>
<style>
	.ask a{display: inline-block;width:20px ;height: 20px;line-height:20px;text-align: center;border:1px solid #ddd;}
</style>