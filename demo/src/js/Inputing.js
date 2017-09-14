import React,{ Component } from 'react'

class Inputs extends Component{
	constructor(props){
		 super(props)
		 this.state = {
		 	ischecking:false
		 }
	}
	render(){
		return(
			<input type='text' checked = {this.state.ischecking}/>
		)
	}
}

export default Inputs;