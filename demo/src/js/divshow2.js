import React,{Component} from 'react'

class Divshow2 extends Component {
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
                             <div>dd</div>
                             <div style={{display:this.state.insa}}>ccc</div>
                         </div>
                   </div>
            )
   }
}

export default Divshow2