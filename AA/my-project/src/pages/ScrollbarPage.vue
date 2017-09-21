<template>
	<div>
	 	scrollbar 
		<div id="test3" class="scrollbar-main">
	 		<div class="item-li li1"> 11</div>
	 		<div class="item-li li2">22 </div>
	 		<div class="item-li li3"> 333</div>
		</div>
	</div>
</template>
<script>
	export default{
		 data(){
		 	return{
		 		aa:""
		 	}
		 },
		 mounted:function(){
		 	 
		 	 $('#test3').jscrollbar();

		 }
	}
</script>
<style>
	.scrollbar-main{
		width: 600px;
		height: 400px;

		margin: 0 auto;
        /*width: 630px;*/
        overflow: hidden;
        /*height: 443px;*/
        background: gray;

	}

	.item-li{
		width: 100%;
		height: 250px;
	}
	.li1{
		background: #ccc;
	}

	.li2{
		background: red;
	}

	.li3{
		background: yellow;
	}
</style>