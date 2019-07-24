import React, { Component } from 'react';
import { setFormDataForEdit } from "../actions/newTrip"
import { updateTrip, deleteTrip } from "../actions/myTrips"
import { connect } from "react-redux"
import NewTrip from "./NewTrip"
import { resetNewForm } from "../actions/newTrip"



class EditFormWrapper extends Component {
 

 componentDidMount(){
 	this.props.trip && this.props.setFormDataForEdit(this.props.trip)
 }

 componentDidUpdate(prevProps){
 	this.props.trip && !prevProps.trip && this.props.setFormDataForEdit(this.props.trip)

 }

 componentWillUnmount(){
 		console.log(this.props)
 		this.props.resetNewForm()
 }
 handleSubmit = (event, formData, userId) => {
 		const { updateTrip, trip, history } = this.props
		event.preventDefault()
		updateTrip({
            ...formData,
            tripId: trip.id,
            userId
        }, history)
	}

	render() {
		const { history, deleteTrip, trip } = this.props
		const tripId = trip ? trip.id : null 
	return <>
			<NewTrip editMode history={this.history} handleSubmit={this.handleSubmit}/>
			<button style={{color:"red"}}onClick={()=>deleteTrip(tripId, history)}> Delete </button>
			</>
}
	};


export default connect(null, { updateTrip, setFormDataForEdit, resetNewForm, deleteTrip })(EditFormWrapper);