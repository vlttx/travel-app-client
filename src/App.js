import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount(){
    fetch("http://localhost:3001/api/v1/users/1")
    // .then(res => res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001/api/v1/users/1'))
    // .then(r=>r.json())
    .then(res => res.text()) 
    .then(console.log)
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello dear people!</h1><br/>
        <img class="App-logo" src="https://static.tvtropes.org/pmwiki/pub/images/azula1.jpg"/>
      </header>
    </div>
  );
}
}

export default App;
