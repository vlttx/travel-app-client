import React from 'react';
import { updateNewTrip } from '../actions/newTrip'
import { createTrip } from '../actions/myTrips'
import { connect } from 'react-redux'

const NewTrip = ({ formData, updateNewTrip, history, userId, trip, handleSubmit, editMode }) => {

	const handleOnChange = event => {
		const { name, value } = event.target
		//updateNewTrip(name, value)
		const enteredNewTrip = {
			...formData,
			[name]:value

		}
		updateNewTrip(enteredNewTrip)
		//passing the object into a function that came from imported action
	
	}

	// const handleSubmit = event => {
	// 	event.preventDefault()
 //        createTrip({
 //            ...formData,
 //            userId
 //        }, history)


	// }

  return (


    <form onSubmit={event => {
        event.preventDefault()
        handleSubmit(event, formData, userId, history)}}>
    <h3> Add trip details: </h3>
    	<input 
    	type="text"
    	name="name"
        value={formData.name}
    	onChange={handleOnChange}
    	placeholder="trip name"
    	/><br/>
    	<input 
    	type="text"
    	name="startDate"
    	onChange={handleOnChange}
    	value={formData.startDate}
    	placeholder="start date"
    	/><br/>
    	<input 
    	type="text"
    	name="endDate"
    	onChange={handleOnChange}
    	value={formData.endDate}
    	placeholder="end date"
    	/><br/>
        <input 
        type="text"
        name="imageurl"
        onChange={handleOnChange}
        value={formData.imageurl}
        placeholder="add image url"
        /><br/>
    	<input type="submit" value={ editMode ? "Update" : "Add"}/>

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
		formData: state.newTrip,
        userId
	}
}

export default connect(mapStateToProps, { updateNewTrip})(NewTrip);