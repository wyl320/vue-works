import React,{Component} from 'react'

class Divshow extends Component {
  constructor(props){
    super(props)
    this.state=({
      insa : 'block'
    })
  }
  render(){
             
            return (
                   <div> 
                         <div className='box'>
                             <div style={{display:this.state.insa}}>dd</div>
                             <div>ccc</div>
                         </div>
                   </div>
            )
   }
}

export default Divshow