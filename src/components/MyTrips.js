import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const MyTrips = props => {
	const tripCards = props.trips.length > 0 ? 
	props.trips.map( t => <Link to={`/trips/${t.id}`} key={t.id}>{t.name}<br/></Link>) : "No trips at the moment"
	return tripCards
	}


const mapStateToProps = state => {
	return {
	trips: state.myTrips
}
}

export default connect(mapStateToProps)(MyTrips)