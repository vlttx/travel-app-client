import React, { Component } from 'react';
import { setFormDataForEdit } from "../actions/newTrip"
import { updateTrip } from "../actions/myTrips"
import { connect } from "react-redux"
import NewTrip from "./NewTrip"
import { resetNewForm } from "../actions/newTrip"



class EditFormWrapper extends Component {
 

 componentDidMount(){
 	this.props.setFormDataForEdit(this.props.trip)
 }

 componentDidUpdate(prevProps){
 	this.props.trip && !prevProps.trip && this.props.setFormDataForEdit(this.props.trip)

 }

 componentWillUnmount(){
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
	return <NewTrip editMode history={this.history} handleSubmit={this.handleSubmit}/>
}
	};


export default connect(null, { updateTrip, setFormDataForEdit, resetNewForm })(EditFormWrapper);