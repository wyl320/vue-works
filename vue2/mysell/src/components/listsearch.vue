<template>
    <div class='list'>
		<p><a href='javascript:;' @click='all()' >全选</a>&nbsp;&nbsp;&nbsp;<a href='javascript:;' @click='delet()'>删除</a></p>
		<span></span><span>序号</span><span>价格</span><span>种类</span><span>名称</span>
		<ul>
			<li v-for='(product,index) in newpl'>
			  <span><input type='checkbox' v-model='product.ischeck'></span>
			  <span>{{index}}</span>
			  <span>{{product.price}}</span>
			  <span>{{product.cery}}</span>
			  <span>{{product.names}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
 export default {
 	props:{
        aflist:{
        	type:Array,
        	default:[]
        }
 	},
 	data(){
 		return{
           isflg:false,
           nel:null,
           newpl:this.aflist
 		}
 	},
 	methods:{
 		all(){
           this.isflg =!this.isflg
           if(this.isflg){
              this.aflist.forEach(function(idx){
	    		idx.ischeck = true;
	    	  });
           }else{
             this.aflist.forEach(function(idx){
	    		idx.ischeck = false;
	    	  });
           }
 		},
 		delet(){
 			this.newpl = this.newpl.filter(function(m){
              return !m.ischeck
            });
            //console.log(this.newpl)
 		}
 	}
 }
</script>
<style>
	.list span{display: inline-block;width: 100px;}
</style>