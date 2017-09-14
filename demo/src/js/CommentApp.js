import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import Clock from './Clock'
import Pheight from './newSayheight'
import Childexample from './props.children'
import BlackBorderContainer2 from './props.children3'
import Forms from './form1'
import Faterorms from './faster.js'
import Tabs from './tab.js'
import Licot from './licot'
import {bb,cc}  from './A';
import Divshow from './divshow'
import Divshow2 from './divshow2'

class CommentApp extends Component {
  constructor () {
    super()
    this.state = {
      comments: [],
      ishide : true,
    }
  }
  handleSubmitComment (comment) {
    //console.log(comment)
     //bb();
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
  }
  check(){
      this.setState({ishide :!this.state.ishide})
  }
  render() {
   //let d = cc();
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommentList comments={this.state.comments} />
        {this.state.ishide ? <Clock /> : null }
        <button onClick={this.check.bind(this)}>显示隐藏时钟</button>
        <Pheight content='refs的用法点击dom标签输出元素的高'/>
        <Childexample>
           <div>
            <h2>React.js 小书</h2>
            <div>开源、免费、专业、简单</div>
            订阅：<input />
          </div>
        </Childexample>
        <BlackBorderContainer2>
          <p>循环子节点1</p>
          <p>循环子节点2</p>
          <span>循环子节点3</span>
        </BlackBorderContainer2>
        <Faterorms/>
        <Tabs/>
      </div>
    )
  }
}

export default CommentApp