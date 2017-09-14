import React,{Component} from 'react'

class BlackBorderContainer2 extends Component {
  constructor(){
  	super()
  }
  render(){
  	          /*let a = [];
	          for(let i=0;i<this.props.children.length;i++){
	             a.push(<div className='blackborder' key={i}>{this.props.children[i]}</div>)
	          }*/
	          let a=[];
	          this.props.children.map(
	                    	(da,i)=>a.push(<div className='blackborder' key={i}>{this.props.children[i]}</div>)
			  )
	          return (
		                <div>{a}</div>
	          )
   }
}

export default BlackBorderContainer2