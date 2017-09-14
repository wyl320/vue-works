<template>
   <div class='menu'>
             <!-- <div v-for='item in newlistdata'> 
                <h3>{{item.spice}}</h3>
                <h2>{{item.data}}</h2>
             </div> -->
             <div v-for='item in newlistdata'>
                <h3>{{item.spice}}</h3>
                <ul v-for='item2 in item.data' class='afist'>
                	<li>
                	    <span class='larman' :class='{"spancur":item2.expanded}' v-on:click='toggleChildren(item2)'>{{item2.current}}<em></em></span>
                	    <div v-show ='item2.expanded' class='linkct'>
                	       <router-link active-class="active" v-for='item3 in item2.smaller' :to='{name:item3.path,params:{ userId: 123 }}'>{{item3.title}}</router-link>
                	    </div>
                	</li>
                </ul>
             </div>
            <router-link to="/Hello/wuyali/45">注册2</router-link>

             
	</div>
</template>
<script>
	export default {
        props:{
            listdata: {
		      type: Object
		    }
        },
		data(){
			return{
                newlistdata:this.listdata.data
			}
		},
		watch:{
            listdata () {
		      return this.listdata
		    }
		},
		methods:{
			toggleChildren:function(item){
				item.expanded = !item.expanded;
				//console.log(item)
			}
			//console.log(this.newlistdata)
		},
		mounted(){
			//console.log(this.newlistdata)
		}
	}
</script>
<style scoped>
  .menu h2{font-size: 16px;color:#000;margin:0px;padding:0px;padding:8px; line-height: 20px;border-bottom:1px solid #eee;background:#eee;cursor: pointer;border-left:3px solid #ea6f5a;}
	.menu h3{font-size:15px;color:#000;margin:0px;padding:0px;padding:8px; line-height: 20px;border-bottom:1px solid #eee;cursor: pointer;border-left:3px solid #ea6f5a;}
	.menu ul li{font-size: 12px;padding:8px 10px;}
	.larman:hover{background:#ea6f5a;color:#fff;}
	.larman{display: inline-block;width:95%;height: 30px;line-height: 30px;padding-left:5%;cursor: pointer;font-size: 15px;position: relative;}
	.menu ul.afist > li{padding:0px;}
	.linkct a{display: block;height:25px;line-height: 25px;padding-left:8%;width:92%;}
	.spancur{background:#ea6f5a;color:#fff;}
	.larman em{display: inline-block;width: 0px;height: 0px;font-size: 0px;border-width:5px;border-color:#757272 transparent transparent transparent;border-style:solid;position: absolute;right:10px;top:13px;}
	.spancur em{border-color:transparent  transparent #fff transparent;top:8px;}
	.active{color:#ea6f5a;}
</style>