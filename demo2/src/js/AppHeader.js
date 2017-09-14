import React, { Component } from 'react'


class AppHeader extends Component {
     handlerKeyUp (event){
            if(event.keyCode === 13){
               let value = event.target.value;
               if(!value) return false;
               let newTodoItem = {
		                text: value,
		                isDone: false
		       };
		       event.target.value = "";
		       console.log(value)
		       this.props.addTodo(newTodoItem);
            }
     }
     render (){
     	return(
     		<div>
                <input type='text' onKeyUp={this.handlerKeyUp.bind(this)}/>
     		</div>
     	)
     }
}

export default AppHeader;