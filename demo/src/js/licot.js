import React,{Component} from 'react'

class Licot extends Component {
  constructor(props){
  	super(props)
  	this.state=({
  		num :2,
      indexa :0
  	})
  }
 
  Sum(event){
     this.state.indexa = event.target.getAttribute("data")
     this.setState({
            ...this.state
      });
     this.props.onset(this.state.indexa)
  }

  render(){
           
            let b =[];
  	        for (let i= 0;i<this.state.num;i++) {
                  b.push(<li ref="myli" data={i} key={i} onClick={this.Sum.bind(this)}>{i+'aaa'}</li>)
            }
	          return (
		            <ul>{b}</ul>   
	          )
   }
}

export default Licot