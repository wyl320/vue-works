import React,{Component} from 'react'
import Forms from './form1'

class Faterorms extends Component {
  constructor(props){
  	super(props)
  	this.state=({
  		insa : '123'
  	})
  }
 
  Sum(a){
     this.setState({
        insa : a
     })
  }

  render(){
  	         
	          return (
		               <div>
                       <p><span>t</span><span>{this.state.insa}</span></p>
		                   <Forms _text={this.state.insa} onset={this.Sum.bind(this)}/>
		               </div>
	          )
   }
}

export default Faterorms