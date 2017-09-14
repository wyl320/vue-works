<template>
<div class='selectUi'>
	<span @click='toggle'>{{selections[this.nowindex].label}}</span>
	<em></em>
	<transtion name="fade">
	<ul v-show='isage'>
	  <li v-for='(item,index) in selections' @click='chose(index)'>{{item.label}}</li>
	</ul>
	</transtion>
</div>
</template>
<script>
export default{
	props:{
        selections:{
        	type:Array,
	        default: [{
		        label: 'test',
		        value: 0
	        }]
        }
	},
	data (){
		return {
			isage:false,
			nowindex:0
		}
	},
	methods:{
		toggle (){
			this.isage =!this.isage
		},
		chose(e){
           this.nowindex=e
           this.isage =!this.isage
           this.$emit('on-change',this.selections[this.nowIndex])
		}

	}
}
</script>
<style>
body{}
.selectUi{width:100px;height: 25px;border:1px solid #ddd;}
.selectUi span{text-align: left;line-height: 25px;display: block;width:90%;margin-left:8%;}
.selectUi ul{width:99px;border:1px solid #ddd;}
.selectUi ul li{width:90%;padding-left:5%;padding-right:5%;height:25px;line-height:25px;border-bottom:1px solid #ddd;}
.selectUi{position: relative;}
.selectUi em{position: absolute;top:11px;right:7px;font-size: 0px;width:0px;height: 0px;
	border-top:4px #333 solid; 
	border-right:4px transparent solid;
	border-bottom:4px transparent solid;
	border-left:4px transparent solid;
}
.selectUi ul li:hover{background: #ddd;}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>