/*class index {
          constructor (name,age){
             this.name = name;
             this.age = age;
          }
          telephone (){
             console.log(this.name)
          }

}
export {index};*/
import React from 'react'
import ReactDOM from 'react-dom'
import CommentApp from './CommentApp'
import Clock from './Clock'
import '../css/index.css'

ReactDOM.render(
  <CommentApp />,
  document.getElementById('root')
)