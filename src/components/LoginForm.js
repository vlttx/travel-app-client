import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'

const Login = ({ username, password, updateLoginForm }) => {
	//since props is an object we can destructure it
	return (
		<form>
		<input 
		type="text"
		name="username"
		value={username}
		placeholder="username"
		onChange={({name, value}) => updateLoginForm({name, value})}
		/>
		<input 
		type="password"
		name="password"
		value={password}
		placeholder="password"
		onChange={({name, value})=> updateLoginForm({name, value})}
		/>
		<input type="submit" value="Log In"/>
		</form>

		)
}
//gives us props that we can pass as arg into this component
const mapStateToProps = state => {
	return {
		username: state.loginForm.username,
		password: state.loginForm.password
	}
}

export default connect(mapStateToProps, {updateLoginForm})(Login)
