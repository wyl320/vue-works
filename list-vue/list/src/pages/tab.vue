<template>
	<div class="tabbox"  >
	    <template >
	    	<ul class="tab clearfix">
	    	    <li v-for="(item, index) in fenlie" @click="changetab(index)" >{{item.name}}</li>
	    	</ul>
	    	<div class="tably">
				<div v-for="(item2,index) in fenlie" class="aa" :class="{active:nowindex==index}">
					<component keep-alive :is="currentView"></component>
				</div>
			</div>
	    </template>
	    <div class="lmer">
	    	<ul class="clearfix">
	    	  <li v-for="(item,index) in fenlie2" @click="change2(index)">{{item.name}}</li>
	    	</ul>
	    	<div class="lmer_box">
	    	  <component :is="currentView2"></component>
	    	</div>
	    </div>
	</div>
</template>
<script>
    import Coma from '@/components/coma'
    import Comb from '@/components/comb'
    import Comc from '@/components/comc'
    import Comd from '@/components/comd'
	export default {
		data(){
			return {
				fenlie:[
				          {id:'01',name:'A股'},
				          {id:'02',name:'新三板'}
				       ],
				nowindex:0,
				nowindex2:0,
				currentView:Coma,
				currentView2:Comc,
				fenlie2:[
                          {id:'01',name:'披露公告'},
				          {id:'02',name:'公司财务对比'}
				]
			}
		},
		components:{
			Coma,
			Comb,
			Comc,
			Comd
		},
		methods:{
			changetab(item){
				this.nowindex = item;
				if(this.nowindex==1){
					this.currentView = Comb
				}else{
					this.currentView = Coma
				}
			},
			change2(item){
				this.nowindex2 = item;
				if(this.nowindex2==1){
					this.currentView2 = Comd
				}else{
					this.currentView2 = Comc
				}
			}
			
		}
	}
</script>
<style scoped>
	.tabbox ul.tab li{float:left;padding:0px 10px;margin-right:5px;padding-top:5px;}
	.tably .aa{display: none;}
	.tably div.active{display: block;}
	.lmer ul li{float:left;margin-left:8px;}
	.lmer{margin-top:30px;}
	.lmer_box{margin-left:8px;margin-top:10px;}
</style>