<template>
<div>
  <transition name='bounce'>
    <p  v-show='isshow' mode='in-out'>ppppp</p>
  </transition>
  <button @click='show' class='bts'>toggle</button>
</div>
</template>
<script>
	export default {
	    data (){
	    	return{
		     isshow:true
		    }
	    },
	    methods:{
           show (){
              this.isshow = !this.isshow
           }
	    }
	}
</script>
<style >
	/*.fades-enter-active,.fades-leave-active{transition:all .5s;}
	.bts{margin-top:100px;}
	.fades-enter{
		opacity: 0;
		transform:translateX(-400px);
	}
	.fades-leave-to{
		opacity: 0;
		transform:translateX(400px);
	}*/
	.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>