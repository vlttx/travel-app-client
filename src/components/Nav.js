import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout'
import Login from './LoginForm'


const Nav = ({currentUser}) => {
	return (
		<div className="nav">
		{currentUser ? <h2>Special welcome to {currentUser.name}</h2>: ""}
		{currentUser ? <Logout/> : <Login />}
		</div>
		)
}
const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Nav)