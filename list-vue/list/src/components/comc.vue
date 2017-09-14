<template>
	<div>
		<div class="mks"><span><input type="checkbox" @click="allselet($event)"></span><span>发布时间</span><span>股票代码</span><span>公告标题</span></div>
		<div class="azheng">
			<div v-for="(item,index) in list" @click="chagela(item)">
				<p><span><input type="checkbox" :checked="item.ischeck"></span>
				<span>{{item.time}}</span>
				<span>{{item.title}}</span>
				<em>摘要</em></p>
	            <div v-show="item.flam">{{item.text}}</div>
			</div>
		</div>
	</div>
</template>
<script>
    import _ from 'lodash'
    export default {
    	 data(){
    	 	return {
    	 		list:[
    	 		   {id:"1",ischeck:false,time:"2012-09-08",title:"wodediaoti",text:"dddd",flam:false},
    	 		   {id:"2",ischeck:false,time:"2012-09-07",title:"wodedioti",text:"eeee",flam:false},
    	 		   {id:"3",ischeck:false,time:"2012-09-05",title:"wodiaoti",text:"rrrr",flam:false},
    	 		   {id:"4",ischeck:false,time:"2012-09-03",title:"wodeyiaoti",text:"cccc",flam:false},
    	 		   {id:"5",ischeck:false,time:"2012-09-04",title:"wodgebiaoti",text:"bbbb",flam:false},
    	 		   {id:"6",ischeck:false,time:"2012-09-02",title:"wodeiaoti",text:"vvvv",flam:false}
    	 		],
    	 		noindex:0
    	 	}
    	 },
    	 methods:{
    	 	chagela(item){
			   $.each(this.list,(i,lt)=> {
			   	   //console.log(this.list)
			   	   if(item.id!=lt.id){
			   	   	  lt.ischeck = false
                      lt.flam=false
			   	   }
               });
               if(item.ischeck){
                  item.ischeck=false,
                  item.flam=false
    	 	   }else{
                  item.ischeck=true,
                  item.flam=true
    	 	   }
    	 	},
    	 	allselet(e){
    	 		if(e.target.checked){
                    $.each(this.list,(i,lt)=>{
                      lt.ischeck=true
                      lt.flam=false
                    });
    	 		}else{
    	 			$.each(this.list,(i,lt)=>{
                      lt.ischeck=false
                    });
    	 		}
    	 	}
    	 }
    }
</script>
<style scoped>
	.mks span{display: inline-block;width: 100px;}
	.azheng span{display: inline-block;width: 100px;}
	.text{padding:8px;}
	.text{display: none;}
</style>