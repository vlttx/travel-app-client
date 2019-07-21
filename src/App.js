import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser"
import Nav from "./components/Nav"
import MainContainer from "./components/MainContainer.js"


class App extends Component {

  componentDidMount(){
      this.props.getCurrentUser()
   
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello dear people!</h1>

        <img className="App-logo" src="https://static.tvtropes.org/pmwiki/pub/images/azula1.jpg" alt="smirk" /><br/>
     <Nav />
     <MainContainer />
      </header>

    </div>
  );
}
}


export default connect(null, { getCurrentUser })(App)


 // fetch("http://localhost:3001/api/v1/users/1")
    // .then(res => res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001/api/v1/users/1'))
    // .then(r=>r.json())
    // .then(res => res.text()) 
    // .then(console.log)