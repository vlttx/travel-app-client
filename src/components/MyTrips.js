import React from 'react'
import { connect } from 'react-redux'
import TripCard from "./TripCard"


const MyTrips = props => {
	const tripCards = props.trips.map( t => <TripCard trip={t} key={t.id}/>)
	return (

		tripCards.length > 0 ? tripCards : "No trips at the moment")

	}


const mapStateToProps = state => {
	return {
	trips: state.myTrips
}
}

export default connect(mapStateToProps)(MyTrips)