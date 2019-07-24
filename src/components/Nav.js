import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout'
// import Login from './LoginForm'
import { NavLink } from 'react-router-dom'


const Nav = ({currentUser, loggedIn}) => {
	return (
		<div className="nav">
		<NavLink exact activeClass to="/">Home  |</NavLink>
		<NavLink exact activeClass to="/my-trips">My Trips  |</NavLink>
		<NavLink exact activeClass to="/my-trips/new">New Trip  |</NavLink>
		{ loggedIn ? <Logout/> : null} 	
		 <h2>Special welcome to {currentUser.name} from {currentUser.hometown.city}</h2>
		</div>
		)
}
const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    loggedIn: !!state.currentUser
  }
}

export default connect(mapStateToProps)(Nav)
	// <NavLink exact activeClass to="/logout">Log Out</NavLink>

