



export default (state = [], action) => {
	switch (action.type) {

		case "SET_MY_TRIPS":
		  return action.trips
		case "ADD_TRIP":
		return state.concat(action.trip)
		case "UPDATE_TRIP":
		return state.map(trip => trip.id===action.trip.id ? action.trip : trip)
		case "CLEAR_TRIPS":
		  return []
		default:
		  return state
	}
}