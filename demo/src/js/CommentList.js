import React, { Component } from 'react'
import Comment from './comment'

class CommentList extends Component {
	  static defaultProps = {
          comments: []
      }
	  render() {
	  /*	const comments = [
		      {username: 'Jerry', content: 'Hello'},
		      {username: 'Tomy', content: 'World'},
		      {username: 'Lucy', content: 'Good'}
        ];*?

        //let ht = [];

      //   for(let i=0;i<comments.length;i++){
      //   	let li = <div key={"op"+i}>
      //                  <span>{comments[i].username}</span>
      //                  <span>{comments[i].content}</span>
      //                </div>;
		    // ht.push(li);
	     // }
		
		/*comments.map(function(da,i){
			ht.push(<div>{da.username }  {da.content}</div>);
		});*/

	     //return(<div id="aaa">{ht}</div>);

	     return(
            <div>
               {
               	  this.props.comments.map((comment,i)=> <Comment comment={comment} key={i} />)
               }
            </div>
	     )
	  }
}

export default CommentList