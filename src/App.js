import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser"
import Login from "./components/LoginForm"
// import Logout from "./components/Logout"
import SignUp from "./components/SignUp"
import MyTrips from "./components/MyTrips"
// import MainContainer from "./components/MainContainer.js"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home"
import NewTrip from "./components/NewTrip"
import Nav from "./components/Nav"
import TripCard from "./components/TripCard"
import NewTripFormWrapper from "./components/NewTripFormWrapper"
import { setFormDataForEdit } from "./actions/newTrip"
import EditFormWrapper from "./components/EditFormWrapper"


class App extends Component {

  componentDidMount(){
      this.props.getCurrentUser()
   
  }

  render(){
   const {loggedIn, alltrips, setFormDataForEdit} = this.props
   return (
      <header className="App-header">  
    <div className="App">
     <Router>

      {loggedIn ? <Nav /> : null }
      <img className="App-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgT-jfLkw_rvE_ji-ijtGCS59tkbOAHHqlO-o-rNuiSYtMCdui" alt='earth'/><br/>
          <Switch>
          <Route exact path="/" render={()=> loggedIn ? <MyTrips /> : <Home />}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/my-trips" component={MyTrips}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/my-trips/new" component={NewTripFormWrapper}/>
          <Route exact path="/trips/:id"    render={props => {
           const trip = alltrips.find((trip) => trip.id === parseInt(props.match.params.id));
            return <TripCard trip={trip} {...props}/>
            }}/>
            <Route exact path="/trips/:id/edit"    render={props => {
           const trip = alltrips.find((trip) => trip.id === parseInt(props.match.params.id));
           // setFormDataForEdit(trip)
            return <EditFormWrapper trip={trip} {...props}/>
            }}/>
          </Switch>
      </Router>
  

    </div>
         </header>
  );
}
}


const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    alltrips: state.myTrips

  })
}


export default connect(mapStateToProps, { getCurrentUser, setFormDataForEdit })(App)
     

 // fetch("http://localhost:3001/api/v1/users/1")
    // .then(res => res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001/api/v1/users/1'))
    // .then(r=>r.json())
    // .then(res => res.text()) 
    // .then(console.log)