import React,{Component} from 'react'

class Comment extends Component {
	render(){
		return(
              <div>
                 <span>{this.props.comment.username} </span>;
                 <p>{this.props.comment.content}</p>
              </div>
              
		)
	}

}

export default Comment