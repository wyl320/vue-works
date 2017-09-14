import React,{Component} from 'react'

class Pheight extends Component {
	sayheight (e){
        console.log(e.target.clientHeight)
	}
	render(){
		return (
			    <p  onClick={this.sayheight.bind(this) }>
			        {this.props.content}
			    </p>
        )
	}

}

export default Pheight