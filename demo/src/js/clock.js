import React,{Component} from 'react'

class Clock extends Component {
	constructor(){
		super()
		this.state = {
			dateer : new Date(),
		}
		console.log(this.state.dateer)
	}
	componentWillMount () {
	    this.timer = setInterval(() => {
	      this.setState({ dateer: new Date()})
	    }, 1000)
    }
    componentWillUnmount () {
       clearInterval(this.timer)
    }
	render(){
		return(
              <div>
                 <p>{this.state.dateer.toLocaleTimeString()}</p>
              </div>
              
		)
	}

}

export default Clock