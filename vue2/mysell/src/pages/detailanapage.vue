<template>
    <div>
	  <selectng :selections='districts' @on-change='dosomethisng()'></selectng>
	  <Chosetag :listg='list'></Chosetag>
	  <Nums></Nums>
	  <Start :scroe='scroe'></Start>
	  <Tab :dalist='dalist'></Tab>
	  <Tree :menulist='menulist'></Tree>
	  <Menus :menulist='menulist'></Menus>
	  <Chosetags :listg='list'></Chosetags>
	</div>
</template>
<script>
 import Selectng from '../components/select.vue'
 import Chosetag from '../components/chosetag.vue'
 import Nums from '../components/nums.vue'
 import Start from '../components/start.vue'
 import Tab from '../components/tab.vue'
 import Tree from '../components/tree.vue'
 import Menus from '../components/menu.vue'
 import Menus2 from '../components/menu2.vue'
 import Chosetags from '../components/chosetags.vue'
 export default {
 	components:{
           Selectng,Chosetag,Nums,Start,Tab,Tree,Menus,Menus2,Chosetags
    },
 	data(){
 		return {
 			districts: [
			        {
			          label: '北京',
			          value: 0
			        },
			        {
			          label: '上海',
			          value: 1
			        },
			        {
			          label: '广州',
			          value: 2
			        },
			        {
			          label: '天津',
			          value: 3
			        },
			        {
			          label: '武汉',
			          value: 4
			        },
			        {
			          label: '重庆',
			          value: 5
			        }
            ],
            list:[
				    {text:'aaa',value:0},
				    {text:'bbb',value:1},
				    {text:'ccc',value:2},
				    {text:'ddd',value:3}
			],
			scroe:3.2,
			dalist:[
               {litext:'text1',box1:'somethings1'},
               {litext:'text2',box1:'somethings2'},
               {litext:'text3',box1:'somethings3'},
               {litext:'text4',box1:'somethings4'}
			],
			menulist:[
			    {
			    	title:'荣大科技',
			    	isShowListItem : 'a100',
			    	uldata:[
			    	   {cont:'荣大科技aaa',icon:true	},
			    	   {cont:'荣大科技bbb',icon:true	},
			    	   {cont:'荣大科技ccc',icon:true	},
			    	   {cont:'荣大科技ddd',icon:true	}
			    	]
			    },
			    {
			    	title:'小米科技',
			    	isShowListItem : 'a101',
			    	uldata:[
			    	   {cont:'小米科技aaa',icon:true	},
			    	   {cont:'小米科技bbb',icon:true	},
			    	   {cont:'小米科技ccc',icon:true	},
			    	   {cont:'小米科技ddd',icon:true	}
			    	]
			    },
			    {
			    	title:'英迈科技',
			    	isShowListItem : 'a102',
			    	uldata:[
			    	   {cont:'英迈科技aaa',icon:true	},
			    	   {cont:'英迈科技bbb',icon:true	},
			    	   {cont:'英迈科技ccc',icon:true	},
			    	   {cont:'英迈科技ddd',icon:true	}
			    	]
			    }
			]
 		}
 	},
 	methods:{
 		dosomethisng(){
           console.log('this.selections[this.nowIndex]')
 		}
 	}
 }
</script>
<style></style>