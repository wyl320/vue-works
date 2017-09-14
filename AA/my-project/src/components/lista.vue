<template>
	<div class='litem'>
        <ul>
           <li v-for="(da, index) in datalist">
           		<p>{{da.companytext}}</p>
           </li>
         <!--  <li v-for='item in datalist.data'> 
 			<p>{{item.companytext}}</p> -->
          	<!-- 	<router-link :to='{path:"detail",params:{id:item.id}}' :key="item.companytext">
          			{{item.companytext}}
          		</router-link> -->
     

          <!-- 	<p key="21">
          		<em class='popz'>{{item.saynum}}</em>
          	</p>
          	<p key="31" class='lin'>
          		<router-link to='/'>{{item.crash}}</router-link><router-link to='/'>
          			{{item.view}}
          		</router-link>
          		<router-link to='/'>{{item.photonum}}</router-link>
          	</p> -->
         <!--  </li> -->
        </ul>
	</div>
</template>
<script>
	export default{
		props:{
			datalist:this.datalist
		},
		created:function(){
           // this.$http.get('api/getlist').then(function(res){
           //      this.lista = res.data;
           // },function(err){
           // 	    console.log(err)
           // })
		 },
		 data(){
		 	return{}
		 },
		 watch:{
            datalist () {
		      return this.datalist
		    }
		},
		methods: {
		    // productIcon (item) {
		    //   return item.imgsrc
		    // }
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