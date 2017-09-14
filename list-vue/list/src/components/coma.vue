<template>
	<div class="mid">
		<div class="clearfix">
		   <span class="foan">条件选择：</span>
		   <div class="diang">
			   <ul class="clearfix tagul">
			        <li v-for="(item,index) in list" @click="chose(index,$event)">{{item.type}}</li>
			   </ul>
			   <div>
			   	  <div v-for="(item,index) in list" class="hga" :class="{active:noflags[index].flag}">
			   	     <em v-for="(its,index) in item.tag"  @click="chid(index,$event)">{{its}}</em>
			   	   </div>
			   </div>
		   </div>
		</div>
	</div>
</template>
<script>
    import {eventBus} from '@/eventbus'
	export default {
		  data(){
		  	return {
		  		list:[
	                     {
	                     	type:"公告类型",
	                     	tag:["补充及更正01","特别处理和退市","投资者关系信息","一季度报告增发中介机构","报告债券公告"]
	                     },
	                     {
	                     	type:"新三板",
	                     	tag:["补充及更正02","特别处理和退市","投资者关系信息","一季度报告增发中介机构","报告债券公告"]
	                     }
		  		     ],
		  		 noflags:[
			  		        {id:0,flag:false},
			  		        {id:1,flag:false}
		  		 ]
		  	}
		  },
		  methods:{
			  	chose(index,e){
                   this.nodex = index;
                   let rest=""
                   $.each(this.noflags, function(i, item){  
                       if(i!==index){
                          rest = i
                       };
                   }); 
                   e.stopPropagation(); 
                   this.noflags[rest].flag =false;
                   this.noflags[index].flag =!this.noflags[index].flag;
			  	},
			  	chid(index,e){
                   console.log(index);
                    e.stopPropagation(); 
			  	}
		  },
		  mounted(){
				eventBus.$on('resetcome',()=>{
					$.each(this.noflags,function(i,item){
                        item.flag = false
					})
				})
		  }
	}
</script>
<style scoped>
	.mid ul li{float:left;}
	.mid{margin-top:10px;margin-left:8px;}
	h2{color:green;padding-bottom:10px;}
	.tagul li{padding-right:5px;padding-bottom:5px;width:100px;height:22px;line-height: 22px;border:1px solid #ddd;text-align: center;margin-left:5px;}
	.foan{float:left;}
	.diang{float:left;}
	.hga{display: none;}
	.active{display: block;}
	.hga{padding:5px;}
	.hga em{display: inline-block;margin-left:8px;}
</style>