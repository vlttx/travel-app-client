import React from 'react';
import { createTrip } from "../actions/myTrips"
import { connect } from "react-redux"
import NewTrip from "./NewTrip"



const NewTripFormWrapper = ({ history, createTrip }) => {

	const handleSubmit = (event, formData, userId, history) => {

		event.preventDefault()
		createTrip({
            ...formData,
            userId
        }, history)
	}
	return <NewTrip history={history} handleSubmit={handleSubmit}/>
	};


export default connect(null, { createTrip })(NewTripFormWrapper);