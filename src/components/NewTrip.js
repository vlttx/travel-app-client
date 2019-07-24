import React from 'react';
import { updateNewTrip } from '../actions/newTrip'
import { createTrip } from '../actions/myTrips'
import { connect } from 'react-redux'

const NewTrip = ({ newTripForm, updateNewTrip, history, createTrip, userId }) => {

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
        createTrip({
            ...newTripForm,
            userId
        }, history)


	}

  return (


    <form onSubmit={handleSubmit}>
    <h3> Add a new trip: </h3>
    	<input 
    	type="text"
    	name="name"
        value={newTripForm.name}
    	onChange={handleOnChange}
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
        <input 
        type="text"
        name="imageurl"
        onChange={handleOnChange}
        value={newTripForm.imageurl}
        placeholder="add image url"
        /><br/>
    	<input type="submit" value="Add"/>

    </form>
  );
};

const mapStateToProps = state => {
    const userId =  state.currentUser ? state.currentUser.id : ""
	// const {name, startDate, endDate} = state.newTrip
	// return {
	// 	name,
	// 	startDate,
	// 	endDate
	// }
	return {
		newTripForm: state.newTrip,
        userId
	}
}

export default connect(mapStateToProps, { updateNewTrip, createTrip })(NewTrip);