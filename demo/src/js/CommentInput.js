import React, { Component } from 'react'


class CommentInput extends Component {
 constructor () {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }
  handleUsernameChange(event){
     this.setState({
       username: event.target.value
     })
     console.log(this.state.username+':::::')
  }
  handleContentChange(event){
     this.setState({
     	content: event.target.value
     })
  }
  handleSubmit(){
  	//if (this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({username, content})
    //}
  }
  render() {
    return (
		      <div>
		        <div>
		          <span className='comment-field-name'>用户名：</span>
		          <div>
		            <input value={this.state.username} onChange={this.handleUsernameChange.bind(this)}/>
		          </div>
		        </div>
		        <div>
		          <span>评论内容：</span>
		          <div>
		            <textarea value={this.state.content} onChange={this.handleContentChange.bind(this)}/>
		          </div>
		        </div>
		        <div>
		          <button onClick={this.handleSubmit.bind(this)}>
		            发布
		          </button>
		        </div>
		      </div>

    )
  }


}

export default CommentInput

