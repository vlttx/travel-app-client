export default (state = [], action) => {
	switch (action.type) {

		case "SET_MY_TRIPS":
		  return action.trips
		case "ADD_TRIP":
		return state.trips.concat(action.trips)
		case "CLEAR_TRIPS":
		  return []
		default:
		  return state
	}
}