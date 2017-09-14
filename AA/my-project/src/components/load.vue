<template>
	 <div class='aload'>
	    <div>登陆</div>
	    <input type='text' v-model='account'>
	    <input type='password' v-model='password'>
	    <button @click='login()'>登陆</button>
	 </div>
</template>
<script>
	export default{
		data(){
		   return {
		        isLoging: false,
		  		account: '',
		  		password: ''
  	       }
		},
		methods:{
				login(){
					if(this.account!='' && this.password!=''){
					    //this.toLogin();
					    this.$router.push('/Hello');
					}
				},
			    toLogin(){

			  		//一般要跟后端了解密码的加密规则
			  		//这里例子用的哈希算法来自./js/sha1.min.js
			  		//let password_sha = hex_sha1(hex_sha1( this.password ));
			  		//需要想后端发送的登录参数
			  		let loginParam = {
			  			account: this.account,
			  			password:this.password
			  		}
			          //设置在登录状态
			        this.isLoging = true;
			  		//请求后端
			  		this.$http.post( 'example.com/login.php', 
			  		{param: loginParam}).then((response) => {
			            if(response.data.code == 1){
			              //如果登录成功则保存登录状态并设置有效期
			              let expireDays = 1000 * 60 * 60 * 24 * 15;
			              this.setCookie('session', response.data.session, expireDays);
			              //跳转
			              this.$router.push('/Hello'); 
			            }
				      }, (response) => {
				         console.log('denglu chu cuo ')
				      });
                    }
		    }
	}
</script>
<style scoped>
	
</style>