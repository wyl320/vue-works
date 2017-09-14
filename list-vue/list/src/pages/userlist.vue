<template>
   <div class="lt">
    	<h3>基本表格</h3>
    	<table>
    		<tr>
    			<td><span><input type="checkbox"></span></td>
    			<td><span>Id</span></td>
    			<td><span>姓名</span></td>
    			<td><span>姓别</span></td>
    			<td><span>年龄</span></td>
    			<td><span>生日</span></td>
    			<td><span>邮编</span></td>
    			<td><span>地址</span></td>
    			<td><span>操作</span></td>
    		</tr>
    	</table>
    	<Listitem :listArray="listArr" @onchange="uplist" @oncrect="cretlist"></Listitem>
      <Altfrom :nowitem="nowitem"  v-show="isform" @onclose="clomt"></Altfrom>
   </div>
</template>
<script>
    import axios from 'axios'
    import Listitem from '@/components/listitem'
    import Altfrom from '@/components/altfrom'
    import _ from 'lodash'
	export default {
		components:{
			Listitem,
      Altfrom
		},
		created () {
            this.loadList();
        },
		data(){
			return {
              listArr: [],
              nowitem:{},
              isform:false
			}
		},
		methods:{
			uplist(item){
                this.listArr=_.remove(this.listArr,(idx)=>{
                	return idx.uid !== item.uid
                })
                
			},
      clomt(){
        this.isform = false
      },
      cretlist(item){
                this.nowitem = item,
                this.isform=true
                //console.log(this.nowitem)
      },
			loadList: function() {
                console.log("初始化加载数据开始...");
                var _this = this;
                _this.loading = true;
                axios.get('http://www.mocky.io/v2/58c77ec92700002c022bb00b', {
                  params: {
                    
                  }
                })
                .then(function (response) {
                  _this.loading = false;
                  _this.listArr = response.data.data.hostList;
                  console.log(response)
                  //console.log(_this.listArr,"加载完成");
                })
                .catch(function (error) {
                  console.log(error);
                });
            }
		},
		watch:{
			 listArr: function() {
                return this.listArr
       },
       nowitem : function(){
              return this.nowitem
       }
		}
	}
</script>
<style scoped>
	.lt{width:100%;}
	.lt h3{width:100%;}
	.lt table{width:100%;}
</style>