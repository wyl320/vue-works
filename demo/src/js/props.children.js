import React,{Component} from 'react'

class Childexample  extends Component{

	render () {
		return(
              <div className='card'>
                  <div className='card-content'>
                    {this.props.children}
                  </div>
              </div>
		)
	}
	
}

export default Childexample