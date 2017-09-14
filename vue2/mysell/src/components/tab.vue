<template>
    <div>
		<div class='tab-cont'>
		  <ul>
		    <li v-for='(item,index) in dalist' @click='chages(index)' :class='{on:index==noIndex}'>{{item.litext}}</li>
		  </ul>
		  <div class='tab-dy'>
		    <div v-for='(item,index) in dalist' :class='{on2:index==noIndex}'>{{item.box1}}</div>
		  </div>
		</div>
		<textarea v-model='message'></textarea>
		<div>{{message}}</div>
	</div>
</template>
<script>
	export default{
		props:{
			dalist:{
               type:Array
			}
		},
		data(){
			return {
				noIndex:0,
				message:''
			}
		},
		methods:{
			chages(e){
               this.noIndex = e
			}
		}
	}
</script>
<style scoped>
.on{color:red;background: #ddd;}
.tab-dy div{display: none;height: 300px;width: 100%;}
.tab-dy div.on2{display: block;}
.tab-cont ul li{border:1px solid #ddd;width:100px;height: 30px;line-height:30px;text-align: center;float:left;}
.tab-dy{clear:both;}
.tab-cont{border:1px solid #000;width:409px;}
</style>