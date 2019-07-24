import React from 'react'


const TripCard = ({trip}) => {
	
	return (

		trip ?

		<div className="tripCard">
		<h3>{trip.name} ({trip.start_date}-{trip.end_date})</h3> <br/>
		<img src={trip.imageurl} alt={trip.name} width="500px" height="500px"/></div> :
		null
		)
}

export default TripCard