<template>
    <div class='dolist'>
	<input type='text'  v-on:keyup.enter="add(this.event)" v-model.lazy="myValue" placeholder="please enter somthings">
	<ul>
	  <li v-for='(item,index) in meglist'>
	     <input type='checkbox' v-model='item.ischeck' :value ="'list-' + item.value2" @click='change(item.id)'>
	     <label>{{item.value2}}</label>
	   </li>
	</ul>
	<span>没有完成的:{{last}}</span>
	<span>已经完成的:{{dos.length}}</span>
	<p v-show="meglist.length>0"><input type='checkbox' @click='all()' >全选</p>
	<span>Checked names: {{ dos }}</span>
	<input type='checkbox'  >
	</div>
</template>
<script>
import _ from 'lodash'
	// export default {
 //         data(){
 //         	return {
 //         		meglist:[],
 //         		dos:[],
 //         		myValue :'',
 //                flag:false
 //         	}
 //         },
 //         methods:{
 //         	add(e){
 //                let obj = {value2:this.myValue,id:(this.meglist.length +1),ischeck:false};
 //         		this.meglist.push(obj);
 //         	},
 //         	all(){
 //                this.flag=!this.flag
 //                this.dos = []
 //                let self = this
 //                if(this.flag){
 //                     this.meglist.forEach(function(da){
 //                      console.log( da.ischeck);
 //                       da.ischeck = true;
 //                       self.dos.push(da.id)
 //                      })
 //                }else{
 //                    this.meglist.forEach(function(da){
 //                      console.log( da.ischeck);
 //                       da.ischeck = false;
 //                       self.dos = []
 //                     })
 //                }
 //                console.log(this.meglist);
 //         	},
 //         	change(id){
 //              if(this.dos.indexOf(id) ===-1){
 //                 this.dos.push(id)
 //              }else{
 //                 this.dos=_.remove(this.dos,function(n){
 //                       return n !== id
 //                 })
 //              }
 //              console.log(this.dos)
 //         	}
 //         },
 //         computed:{
 //         	last(){
 //         		return this.meglist.length - this.dos.length
 //         	}
 //         }

	// }
  export default {
      data(){
        return {
             meglist:[],
             dos:[],
             myValue :'',
             flag:false
        }
      },
      methods:{
            add(e){
                 let obj = {value2:this.myValue,id:(this.meglist.length +1),ischeck:false};
                 this.meglist.push(obj);
            },
            all(){
                 this.flag=!this.flag
                 //let self = this
                 if(this.flag){
                     this.meglist.forEach(function(da){
                       da.ischeck = true;
                      })
                      this.change()
                }else{
                    this.meglist.forEach(function(da){
                       da.ischeck = false;
                     })
                    this.change()
                }
          },
          change(id){
              this.dos = this.meglist.filter(function(n){
                  return n.ischeck
              })
          }
      },
      computed:{
          last(){
            return  this.meglist.length - this.dos.length
          }
      }

  }
</script>
<style>
	
</style>