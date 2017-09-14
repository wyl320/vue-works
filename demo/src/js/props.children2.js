import React,{Component} from 'react'

class BlackBorderContainer extends Component {
  render(){
  	          let a = [];
	          for(let i=0;i<this.props.children.length;i++){
	             a.push(<div className='blackborder' key={i}>{this.props.children[i]}</div>)
	          }
	           
	          return (
	            <div>{a}</div>
	          )
   }
}

export default BlackBorderContainer