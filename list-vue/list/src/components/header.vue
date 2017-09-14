<template>
  <div class="header">
    <img src="../assets/logo.png">
  </div>
</template>
<script>
    export default{
        data(){
            return{
                msg: 'Hello vue'
            }
        }
    }
</script>
<style scoped>
    .header{
        width: 100%;
        margin: 0 auto;
        height: 50px;
        background: #444859;
    }
    .header img{
        display: block;
        width:50px;
        height: 50px;
    }
</style>
