import React from 'react';
import { updateNewTrip } from '../actions/newTrip'
import { connect } from 'react-redux'

const NewTrip = ({ newTripForm, updateNewTrip, history}) => {

	const handleOnChange = event => {
		const { name, value } = event.target
		//updateNewTrip(name, value)
		const enteredNewTrip = {
			...newTripForm,
			[name]:value

		}
		updateNewTrip(enteredNewTrip)
		//passing the object into a function that came from imported action
	
	}

	const handleSubmit = event => {
		event.preventDefault()


	}

  return (


    <form onSubmit={handleSubmit}>
    <h3> Add a new trip: </h3>
    	<input 
    	type="text"
    	name="name"
    	onChange={handleOnChange}
    	value={newTripForm.name}
    	placeholder="trip name"
    	/><br/>
    	<input 
    	type="text"
    	name="startDate"
    	onChange={handleOnChange}
    	value={newTripForm.startDate}
    	placeholder="start date"
    	/><br/>
    	<input 
    	type="text"
    	name="endDate"
    	onChange={handleOnChange}
    	value={newTripForm.endDate}
    	placeholder="end date"
    	/><br/>
    	<input type="submit" value="Add"/>

    </form>
  );
};

const mapStateToProps = state => {
	// const {name, startDate, endDate} = state.newTrip
	// return {
	// 	name,
	// 	startDate,
	// 	endDate
	// }
	return {
		newTripForm: state.newTrip
	}
}

export default connect(mapStateToProps, { updateNewTrip })(NewTrip);