import React,{Component} from 'react'
import Licot from './licot'
import Divshow from './divshow'
import Divshow2 from './divshow2'
class Tabs extends Component {
  constructor(props){
  	super(props)
  	this.state=({
  		insa : 'block',
      indexg : 0
  	})
  }
 
  Sum2(a){
     this.state.indexg = a
     this.setState({
            ...this.state
      });
     console.log(this.state.indexg)
  }
  
  render(){
  	         
	          return (
		               <div> 
                         <div className='tabbox'>
                               <Licot onset={this.Sum2.bind(this)}/>
                               {this.state.indexg=='0'?<Divshow/>:<Divshow2/>}
                         </div>
                   </div>
	          )
   }
}

export default Tabs