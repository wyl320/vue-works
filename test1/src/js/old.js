import React from 'react';
import ReactDOM from 'react-dom';
// import Router from 'react-router';
// import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import HelloHandler from './hello';
import inputfile from './Inputfile';


class App extends React.Component {
// let App = React.createClass({
  // render() {
  //   return (
  //     <div className="nav">ddd
  //        <inputfile ></inputfile>
  //     </div>
  //   );
  // }

render () {
    return (
      <div className="body">
         
         <HelloHandler ></HelloHandler>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));