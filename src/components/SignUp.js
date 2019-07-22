import React from 'react'
import { connect } from 'react-redux'
import { updateSignUpForm } from '../actions/signupForm'
// import { signup } from '../actions/currentUser'

const SignUp = ({ signupForm, updateSignUpForm }) => {
	//since props is an object we can destructure it

	const handleMainInputChange = event =>  {
		const { name, value } = event.target
		const updatedFormInfo = {
			...signupForm,
			[name]:value

		}
		updateSignUpForm(updatedFormInfo)
		//passing the object into a function that came from imported action
	
	}

	const handleHometownInputChange = event =>  {
		const { name, value } = event.target
		const updatedFormInfo = {
			...signupForm,
			hometown: {
			...signupForm.hometown,
			[name]:value
		}
		}
		updateSignUpForm(updatedFormInfo)
		//passing the object into a function that came from imported action
	
	}

	const handleSubmit = event => {
		event.preventDefault()
		// signup(signupForm)


	}
	return (
		<form onSubmit={handleSubmit}>
		<input 
		type="text"
		name="name"
		value={signupForm.name}
		placeholder="name"
		onChange={handleMainInputChange}
		/>
		<input 
		type="text"
		name="username"
		value={signupForm.username}
		placeholder="username"
		onChange={handleMainInputChange}
		/>
		<input 
		type="text"
		name="city"
		value={signupForm.hometown.city}
		placeholder="city"
		onChange={handleHometownInputChange}
		/>
		<input 
		type="text"
		name="state"
		value={signupForm.hometown.state}
		placeholder="state"
		onChange={handleHometownInputChange}
		/>
		<input 
		type="text"
		name="country"
		value={signupForm.hometown.country}
		placeholder="country"
		onChange={handleHometownInputChange}
		/>
		<input 
		type="password"
		name="password"
		value={signupForm.password}
		placeholder="password"
		onChange={handleMainInputChange}
		/>
		<input type="submit" value="Sign Up"/>
		</form>

		)
}
//gives us props that we can pass as arg into this component
const mapStateToProps = state => {
	return {
		signupForm: state.signupForm
		//getting the whole object instead of separate keys/values
	}
}

export default connect(mapStateToProps, {updateSignUpForm })(SignUp)