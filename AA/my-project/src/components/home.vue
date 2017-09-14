<template>
	<div class='content'>
		<div class='left'>
			<!-- <template v-for='intem in listdata.data'>
				<h2>{{intem.spice}}</h2>
				<div v-for='(int,index) in intem.data'>
				<h3 @click='show(index)'>{{int.current}}</h3>
				<ul v-bind:class="{'textdanger': index==noIndex }">
					<li v-for='inser in int.smaller'>{{inser.title}}</li>
				</ul>
				</div></template> -->
				<!-- <Tree></Tree>-->
				

		       <Menua :listdata='listdata' v-if='showdata'></Menua>
			
		</div>
		<div class='right'>
		    <transition name='fade' mode='out-in'>
			<router-view></router-view>
			</transition>
		</div>
	</div>
</template>
<script>
    import Menua from '@/components/menua'
    import Tree from '@/components/tree'
    import List from '@/pages/list'
    import Detail from '@/pages/detail'
	import Companya from '@/pages/companya'
	import Companyb from '@/pages/companyb'
	export default {
		components: {
		     Menua,
		     Tree,
		     List,
		     Detail,
		     Companya,
		     Companyb
		},
		data(){
			return{
                 listdata:{},
                 hasError:false,
                 noIndex:0,
                 showdata:false
			}
		},
		methods:{
			show(a){
				this.noIndex =a
				//console.log(this.noIndex)
			}
		},
		mounted:function(){
          this.$http.get('api/treedom').then(function(res){
               this.listdata = res.data 
               this.showdata = true
               //console.log(this.listdata)
          },function(erro){
               //console.log(erro)
          })
		}
	}
</script>
<style scoped>
	.content{width:100%;clear:both;overflow:hidden;min-height: 704px;}
	.left{width:200px;float:left;border-right:1px solid #ddd;min-height: 704px;text-align:left;background: #fff;}
	.right{float:left;min-height: 704px;}
	.left h2{font-size: 16px;color:#fff;margin:0px;padding:0px;padding:8px; line-height: 20px;border-bottom:1px solid #7cb228;background:#7cb228;cursor: pointer;}
	.left h3{font-size:15px;color:#000;margin:0px;padding:0px;padding:8px; line-height: 20px;border-bottom:1px solid #999;cursor: pointer;}
	.left ul li{font-size: 12px;padding:8px 10px;}
	.left ul{display: none;}
	.left ul li:hover{background: #7cb228;color:#fff;}
	.left ul.textdanger{display: block;}
	.fade-enter{opacity: 0;}
	.fade -leave{opacity: 1;}
	.fade-enter-active{transition:opacity .5s;}
	.fade-leave-active{opacity:0;transition:opacity .5s;}
</style>