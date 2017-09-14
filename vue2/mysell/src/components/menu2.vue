<template>
 <div class="nav2-wrap">
     <div class="nav2-left">
     	<ul class="ul-1th">
     	  <li v-for="nav in nav2List" class="li-1th">
     	     <span v-on:click="checkList(nav.value)" class="nav2-span">
     	         {{nav.title}}
     	     </span> 

     	  	 <ul class="ul-2th" 
     	  	     v-bind:class="[checkActive(nav.value)?'panelt':'']"
     	  	 >
     	  	 	<li v-for="item in nav.list" class="li-2th">
     	  	 		{{item.name}}
     	  	 	</li>
     	  	 </ul>
     	  </li>	
     	</ul>
     </div>	
     <div class="nav2-right">
     	 <keep-alive>
           <router-view></router-view>
         </keep-alive>
     </div>
 </div>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
  	return {
  		isPanelt:false,
  		nowIndexes:[],
  		nav2List: {
	  		sa:{
	  			title:'Synoptic Analysis',
	  			value:'200',
	  			list: [
		           {
		              name:'high altitude',
		              path:'high-altitude'
		           },
		           {
		              name:'low altitude',
		              path:'low-altitude'
		           }
	  			]
	  		},
	  		storms:{
	  			title:'storms',
	  			value:'201',
	  			list:[
	           {
                name:'thunderstorm',
                path:'thunderstorm'
	           },
	           {
	           	name:'sandstorm',
                path:'sandstorm'
	           }
	  			]
	  		},
	  		mr:{
	  			title:'meteorology reports',
	  			value:'202',
	  			list:[
	           {
                name:'MET-reports',
                path:'met-reports'
	           }
	  			]
	  		},
	  		radar:{
	  			title:'radar',
	  			value:'203',
	  			list:[
	           {
                name:'composite reflectance',
                path:'com-reflect'
	           }
	  			]
	  		},
	  		satellite:{
	  			title:'satellite',
	  			value:'204',
	  			list:[
	           {
                name:'infrared 1',
                path:'infrared1'
	           },
	           {
	           	  name:'infrared 2',
                  path:'infrared2'
	           },
	           {
	           	  name:'visible light',
	           	  path:'visiblelight'
	           },
	           {
	           	  name:'vapor',
	           	  path:'vapor'
	           }
	  			]
	  		},
	  		aircraft:{
	  			title:'aircraft',
	  			value:'205',
	  			list:[
	           {
                name:'aircraft',
                path:'aircraft'
	           }
	  			]
	  		},
	  		light:{
	  			title:'lightning',
	  			value:'206',
	  			list:[
	           {
                name:'lightning',
                path:'lightning'
	           }
	  			]
	  		}
  	    },
  	    nav2List2: {
          "sa":  {
	  			"title":"Synoptic Analysis",
	  			"list": [
		           {
		              "name":"high altitude",
		              "path":"high-altitude"
		           },
		           {
		              "name":"low altitude",
		              "path":"low-altitude"
		           }
	  			]
	  		},
	  		"storms":{
	  			"title":"storms",
	  			"list":[
		           {
	                "name":"thunderstorm",
	                "path":"thunderstorm"
		           },
		           {
		           	  "name":"sandstorm",
	                  "path":"sandstorm"
		           }
	  			]
	  		}
  	    } 	  
  	}
  },
  methods: {
  	checkList: function(index) {
  		if(this.nowIndexes.indexOf(index) === -1 ){
  			this.nowIndexes=[]  //清空数组，来收回之前展开的菜单
  			this.nowIndexes.push(index);
  			console.log(this.nowIndexes)
  		}
  		else{		
  			this.nowIndexes = _.remove(this.nowIndexes,(idx)=>{
                 return idx !== index
            })
            console.log(this.nowIndexes)
  		}
  	},
  	checkActive (index) {
  	   return	this.nowIndexes.indexOf(index) != -1 
       console.log(this.nowIndexes)
  	}
  }	
}
</script>

<style scope>
.nav2-wrap{
	width: 100%;
	height: 100%;
	margin-top: 10px;
}
.nav2-left{
	float: left;
	width: 270px;
	
	border: 2px black solid;
    height: 560px;
}	
.nav2-right{
    width: auto;
    margin-left: 275px;
    height: 560px;
}
.ul-1th{
	cursor: pointer;
	color: white;
	background: #666770
}
.nav2-span{
	display: block;
	height: 40px;
	font-size: 14px;
    font-weight: bold;
    text-align: left;
  
    height: 40px;
    color: #fff;
    border-bottom: 1px solid #3a3b3d;
    line-height: 40px;
    padding-left: 9px;
    letter-spacing: 1px;
}
.li-2th{
	height: 40px;
	text-align: left;
	background: #505153;
	color: #d3d6df;
	font-size: 14px;
    font-weight: bold;
    text-align: left;
    /*width: 100%;*/
    height: 40px;
    color: #fff;
    border-bottom: 1px solid #3a3b3d;
    line-height: 40px;
    padding-left: 18px;
    letter-spacing: 1px;
}
.li-2th:hover{
	background: #4491e0;
}
.ul-2th{
	display:none
}
.panelt{
	display: block
}
</style>