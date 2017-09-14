<template>
	<div class='litem'>
        <ul>
          <li v-for='item in lista.data'>
          	<span><img :src="productIcon(item)"></span>
          	<p><router-link :to='{name:"detail",params:{userId:item.id,uername:item.saynum}}'>{{item.companytext}}</router-link></p>
          	<p><em class='popz'>{{item.saynum}}</em></p>
          	<p class='lin'><router-link to='/'>{{item.crash}}</router-link><router-link to='/'>{{item.view}}</router-link><router-link to='/'>{{item.photonum}}</router-link></p>
          </li>
        </ul>
	</div>
</template>
<script>
	export default{
		created:function(){
           this.$http.get('api/getlist').then(function(res){
                this.lista = res.data;
           },function(err){
           	    console.log(err)
           })
		 },
		 data(){
		 	return{
		 		lista:{}

		 	}
		 },
		 watch:{
            lista () {
		      return this.lista
		    }
		},
		methods: {
		    productIcon (item) {
		      return item.imgsrc
		    }
		},
		mounted:function(){
		    
		    	
		   
		}
	}
</script>
<style scoped>
	.litem li{padding:20px 10px 10px 130px;position: relative;height: 90px}
	.litem li span{width:100px; height: 100px;border:1px solid #ddd;display: inline-block;position: absolute;top:24px;left:20px;}
	.litem li p{padding-top:8px;font-size: 18px;text-align: left;}
	.popz{color: #999;}
	.litem li a{color: #2c84cc}
	.litem li span img{width:100px; height:100px;}
	p.lin a{display: inline-block;margin-right:15px;font-size:12px;}
</style>