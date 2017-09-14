<template>
  <div class="login">
  <h4 class="news-tit">登陆页面</h4>
  <form>
    <div class="mg">
    <p><input type="text" value="用户名" v-model="name"></p>
    <span class="erro" id="input1" v-show="nameflag">用户名有误</span>
    </div>
    <div class="mg">
    <p><input type="text" value="密码" v-model="word"></p>
    <span class="erro" id="input2" v-show="wordflag">密码有误</span>
    </div>
    <em @click="lode">登陆</em>
  </form>
  </div>
</template>
<script>
   import axios from 'axios'
   export default {
   	    data(){
   	    	return{
   	    		name:'用户名',
   	    		word:'密码',
   	    		ze: /(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{4,23}/,
   	    		nameflag:false,
   	    		wordflag:false
   	    	}
   	    },
   	    methods:{
           lode(){
	           	  this.testname();
	           	  this.testwrod();
	           	  if(this.wordflag==false && this.nameflag==false){
                       console.log('qu qing siu');
                       //this.$router.push('/')
                       axios.get('',{
                       	 params:{name:this.name,word:this.word}
                       })
                       .then(function(response){

                       })
                       .cath(function(error){
                       	console.log(error);
                       })
	           	  }
            },
           testname(){
	           	  if(this.name==""){
	                   $("#input1").text("请输入用户名");
	                   this.nameflag = true
	           	  }else if(this.name=="用户名"){
	                   $("#input1").text("请输入用户名");
	                   this.nameflag = true
	           	  }else if(!this.ze.test(this.name)){
	                   $("#input1").text("请输入正确的格式"); 
	                   this.nameflag = true
	           	  }else{
	           	  	   $("#input1").text("");
	           	  	   this.nameflag = false
	           	  }
           },
           testwrod(){
	           	  if(this.word==""){
	                   $("#input2").text("请输入密码");
	                   this.wordflag = true
	           	  }else if(this.word=="密码"){
	                   $("#input2").text("请输入密码");
	                   this.wordflag = true
	           	  }else if(!this.ze.test(this.word)){
	                   $("#input2").text("请输入正确的格式"); 
	                   this.wordflag = true
	           	  }else{
	           	  	   $("#input2").text("");
	           	  	   this.wordflag = false
	           	  }
           }



   	    }
   }
</script>
<style scoped>
  .news-tit{
    font-size: 18px;
    margin-top: 60px;
    text-align: center;
  }
  .erro{color:red; font-size: 12px;}
  .mg{padding:5px 0px;}
</style>
