<template>
    <div class="dexbox clearfix">
        <div class="dexleft">
           <h2>用户管理</h2>
           <ul>
             <router-link tag="li" to="userlist">用户列表</router-link>
             <router-link tag="li" to="userdetail">用户个人信息</router-link>
             <router-link tag="li" to="tab">切换列表</router-link>
           </ul>
        </div>
        <div class="dexright">
          <router-view></router-view>
        </div>
    </div>
</template>
<script>
    // ajax 使用官方推荐的 axios
    //import axios from 'axios'
    import Userlist from '@/pages/userlist'
    import Userdetail from '@/pages/userdetail'
    import Tab from '@/pages/tab'
    export default{
        components: { // 挂载组件
          Userlist,
          Userdetail,
          Tab
        },
        data () {
            return{
                loading: false,
                listArr: [],
            }
        },
        methods: {
            // loadList: function() {
            //     console.log("初始化加载数据开始...");
            //     var _this = this;
            //     _this.loading = true;
            //     axios.get('http://www.mocky.io/v2/58c77ec92700002c022bb00b', {
            //       params: {
                    
            //       }
            //     })
            //     .then(function (response) {
            //       _this.loading = false;
            //       _this.listArr = response.data.data.hostList;
            //       console.log(_this.listArr,"加载完成");
            //     })
            //     .catch(function (error) {
            //       console.log(error);
            //     });
            // },
            // loadMore: function(){
            //     console.log("load more")
            //     var _this = this;
            //     _this.loading = true;
            //     axios.get('https://api.github.com/search/code?q=addClass+in:file+language:js+repo:jquery/jquery', {
            //       params: {
                    
            //       }
            //     })
            //     .then(function (response) {
            //       _this.loading = false;
            //       _this.listArr = _this.listArr.concat(response.data.items);
            //     })
            // }
            
        }
    }
</script>

<style scoped>
  button{
    display: block;
    margin: 0 auto;
    line-height: 30px;
    border: 1px solid #ddd;
    color: #41b883;
  }
  a{
    color: #35495e;
    font-size: 16px;
  }
  ul{
    margin-bottom: 60px;
  }
  li{
    line-height: 32px;
    border-bottom: 1px solid #ddd;
    padding: 0 10px;
  }
  b{
    font-size: 12px;
    color: #35495e;
  }
  .loading{
    text-align: center;
  }
  .dexleft{float:left;width:200px;border-right:1px solid #ddd;min-height:700px;}
  .dexright{float:left;}
  .dexleft h2{height:35px;line-height:35px;padding-left:10px;border-left:3px solid red;}
</style>
