<template>
    <footer class="fixed-bottom clearfix">
        <div class="col4">
          <router-link to="/">index</router-link>
        </div>
        <div class="col4">
          <router-link to="/news">news</router-link>
        </div>
        <div class="col4">
          <router-link to="/second">menu3</router-link>
        </div>
        <div class="col4">
          <router-link to="/third">menu4</router-link>
        </div>
    </footer>
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
    .fixed-bottom {
        
        background: #fff;
        width: 100%;
        
        z-index: 99;
        border-top: 1px solid #ccc;
    }
    .fixed-bottom div {
        display: inline-block;
        float: left;
        text-align: center;
    }
    .fixed-bottom a {
        width: 100%;
        display: inline-block;
        font-size: 12px;
        color: #7a7a7a;
        line-height: 50px;
        font-size: 20px;
        text-decoration: none;
    }
    .col4{width:25%;background: #f0f3f4}
</style>
