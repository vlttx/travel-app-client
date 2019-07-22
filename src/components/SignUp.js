import React from 'react'
import { connect } from 'react-redux'
import { updateSignUpForm } from '../actions/signupForm'
import { signup } from '../actions/currentUser'

const SignUp = ({ signupForm, updateSignUpForm, signup }) => {
	//since props is an object we can destructure it

	const handleInputChange = event =>  {
		const { name, value } = event.target
		const updatedFormInfo = {
			...signupForm,
			[name]:value

		}
		updateSignUpForm(updatedFormInfo)
		//passing the object into a function that came from imported action
	
	}

	const handleSubmit = event => {
		event.preventDefault()
		login(loginForm)


	}
	return (
		<form onSubmit={handleSubmit}>
		<input 
		type="text"
		name="name"
		value={signUpForm.name}
		placeholder="name"
		onChange={handleInputChange}
		/>
		<input 
		type="text"
		name="username"
		value={signUpForm.username}
		placeholder="username"
		onChange={handleInputChange}
		/>
		<input 
		type="password"
		name="password"
		value={signUpForm.password}
		placeholder="password"
		onChange={handleInputChange}
		/>
		<input type="submit" value="Sign Up"/>
		</form>

		)
}
//gives us props that we can pass as arg into this component
const mapStateToProps = state => {
	return {
		signUpForm: state.signupForm
		//getting the whole object instead of separate keys/values
	}
}

export default connect(mapStateToProps, {updateSignUpForm, signup })(SignUp)