<template>
	<div>
		<div>
			<input type='text' v-model='val1'>
			<input type='button' v-on:click='sub'>
		</div>

		<div>
			<list :datalist='datalist'></list>
		</div>


		
	</div>
</template>
<script>
    
    import list from '@/components/lista'

	export default{
		components: {
		     list
		},
		created(){
			console.log(" --created- ");

			let params = {name:this.val1}
			this.loadServer(params);
		},
		 data(){
		 	return{
		 		val1:'',
		 		datalist:[]
		 	}
		 },
		 methods:{
		 	loadServer(params){

		 	    this.$http.get('api/getlist',{params:params}).then(function(res){
	                this.datalist = res.data.data;
	                console.log(" -loadServer-- ");
	                console.log(this.datalist);
	           },function(err){
	           	    console.log(err)
	           })
		 	},
		 	sub(){
		 		// let params = {name:this.val1}
				// this.loadServer(params);
		 	}
		 }
	}
</script>
<style>
	
</style>