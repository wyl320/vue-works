import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import HelloHandler from './hello.js';
//显示隐藏
var Clickbt = React.createClass({ 
           getInitialState:function(){
             return{
                 Asate : true
             };
           },
           change:function(event){
             if(this.state.Asate){
                 this.setState({
                   Asate :false
                 });
             }else{
                 this.setState({
                   Asate :true
                 });
             } 
           },
           
           render:function(){
             let span = null;
             if(this.state.Asate){
              span = <span ref='tip'>fffff</span>;
             }
              return (
                       <div>
                        <button onClick={this.change}>{this.props.name}</button>
                       {span}
                      </div>
              )
           }
});

var Inputfile = React.createClass({
    getInitialState:function(){
       return{
          ak : 'cc',
          val:"aaaa"
       };
    },
    ochange:function(event){
       this.setState({val:event.target.value})
    },
    onfocus:function(){
       this.setState({val:''})
    },
    render:function(){
       return(
            <div>
              <input type='text' ref="a" onFocus={this.onfocus} onChange={this.ochange} value={this.state.val} className='shove'/>
              <span>{this.state.val}</span>
            </div>
       )
    }
});      

React.render(
         <Inputfile name='text'/>,        
         document.getElementById("react")
  
)