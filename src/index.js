import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Content from './components/content';
import Nav from './components/nav';
function Result(){
  return(
    <div>
      <Nav/>
      <Content/>
    </div>
  )
}
ReactDOM.render(<Result/>, document.getElementById('root'));
