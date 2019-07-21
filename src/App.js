import React, { Component } from 'react';
import './App.css';
import Login from './components/LoginForm'
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser"

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
        <h2>Please log in to proceed further</h2><br/>
        <Login/>
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