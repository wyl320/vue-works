<template>
    <div class='tablink'>
	<a href='javascript:;' v-for='(item,index) in listg' @click='addclass(index,item.value)' 
	:class='{active:activeak(item.value)}' >{{item.text}}</a>
	</div>
</template>
<script>
	export default{
		props:{
			listg:{
				type:Array,
				default:[
				  {text:'aaa',value:0}
				]
			}
		},
		data(){
			return{
				nowIndex:0,
				idlist :[]
			}
		},
		methods:{
			addclass(index,a){
				if(this.idlist.indexOf(a)===-1){
                      this.idlist.push(a);
				}else{
                   var sef = this
                   this.idlist=_.remove(this.idlist,function(n){
                       return n!== a
                   })
				}
			},
			activeak(a){
                return this.idlist.indexOf(a) != -1
			}
		}
	}
</script>
<style>
	.tablink a{display: inline-block;width:100px;height:30px; display: inline-block;border:1px solid #ddd;line-height: 30px;text-align: center;}
	.tablink a.active{background: green;color: #fff;}
</style>