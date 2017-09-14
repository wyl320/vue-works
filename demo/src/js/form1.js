import React,{Component} from 'react'

class Forms extends Component {

  constructor(props){

  	super(props)

  	this.state=({
  		insa : props._text
  	})	

  }

  change (e){
      this.setState({
         insa : e.target.value
      })

      this.props.onset(e.target.value);
  }

  render(){
  	         
	          return (
		               <div>
		                   <input type='text' onChange={this.change.bind(this)} value={this.state.insa}/>
		               </div>
	          )
   }
}

export default Forms