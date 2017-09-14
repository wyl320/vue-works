import React, { Component } from 'react';
import ListA from './ListA';
import $ from 'jquery';

class Listcomment extends Component {
    constructor(props){
        super(props)
        this.state = {
        	list : null
        }
    }
    getXMLHttpRequest () {
    	      let xhr;  
              if(window.ActiveXObject) {  
                       xhr= new ActiveXObject("Microsoft.XMLHTTP");  
              }else if (window.XMLHttpRequest) {  
                       xhr= new XMLHttpRequest();  
              }else {  
                       xhr= null;  
              }  
              return xhr; 
        
    }
    getlist () {
    	      let xhr = this.getXMLHttpRequest();  
              xhr.open("GET","http://www.mocky.io/v2/58c77ec92700002c022bb00b",true);
              xhr.send(null);
              xhr.onreadystatechange= () => {  
                       if(xhr.readyState == 4 && xhr.status == 200) {  
                            let reslut=eval("("+xhr.responseText+")");
                            this.setState({
                            	list:reslut.data.hostList
                            })
                            console.log(this.state.list)
                       }  
              };  
    }
    // componentDidMount() {
    //     this.getlist();
    //     console.log('aaaa')
    // }
    render () {
     	let ht = null;
      	if(this.state.list){
      		ht = [];
      		this.state.list.map(function(da,i){
      			ht.push(<ListA key={i} onset={da} />);
      		})
      	}
        return(
            <div>
              <p><button onClick={this.getlist.bind(this)}>获取数据</button></p>
              <ul className="ul">{ht}</ul>
            </div>
        )
    }

}

export default Listcomment;



