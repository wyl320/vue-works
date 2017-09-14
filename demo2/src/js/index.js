
import React from 'react';
import ReactDOM from 'react-dom';
// import Alessons from './lesson';//此处代码引入重复了。所以浏览器下会有警告，注释掉此行即可
import Top from './Top.js';
import ListA from './ListA';
import '../css/index.css';

ReactDOM.render(
  <Top />,
  document.getElementById('root')
)