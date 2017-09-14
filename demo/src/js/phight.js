import React,{Component} from 'react'

class Pheight extends Component {

	constructor (props) {
		super(props);
		this.state = {
			isheight : 0
		}
	}
	cok(e){
	  this.state.isheight = e.target.offsetHeight;
	  this.setState({
            ...this.state
      });
      // refs.aa
   	  // let h = e.target.offsetHeight;//this.p.offsetHeight;
      // this.setState({
      //  	   isheight:h
      //  });
      console.log(this.state.isheight)
    }    
	render(){ 
		return(
              <div>
              		<p ref="aa" onClick={this.cok.bind(this)} >{this.props.content}</p>
              </div>
              
		)
	}

}

export default Pheight2;