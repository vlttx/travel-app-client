import React from 'react'

const Login = () => {
	return (
		<form>
		<input 
		type="text"
		name="username"
		placeholder="username"
		// onChange={}
		/>
		<input 
		type="password"
		name="password"
		placeholder="password"
		// onChange={}
		/>
		<input type="submit" value="Log In"/>
		</form>

		)
}

export default Login
