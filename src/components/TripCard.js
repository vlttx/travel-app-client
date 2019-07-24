import React from 'react'
import { Link } from 'react-router-dom'


const TripCard = ({trip}) => {
	
	return (

		trip ?

		<div className="tripCard">
		<h3>{trip.name} ({trip.start_date}-{trip.end_date})</h3> <br/>
		<img src={trip.imageurl} alt={trip.name} width="500px" height="500px"/><br/><Link to={`/trips/${trip.id}/edit`}>Edit Trip Info</Link></div> :
		null
		)
}

export default TripCard