import { resetNewForm } from './newTrip'
//synchronous
export const setMyTrips = trips => {
	return {
		type: "SET_MY_TRIPS",
		trips
	}
}


 export const clearTrips = () => {
  return {
    type: "CLEAR_TRIPS"
  }
 }

 export const addTrip = trip => {
 	return {
 		type: "ADD_TRIP",
 		trip
 	}
 }

 export const updateTripSuccess = trip => {
 	return {
 		type: "UPDATE_TRIP",
 		trip
 	}
 }



//asynchronous 

export const getMyTrips = () => {
	return dispatch => {
		return fetch("http://localhost:3001/api/v1/trips", {
			credentials: "include",
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
		})
		.then(r => r.json())
		.then(response => {
			if (response.error){
				alert(response.error)
			} else {
				dispatch(setMyTrips(response))
			}
		})
		.catch(console.log)
	}
}

export const createTrip = (tripData, history) => {
	return dispatch => {
		const sendableTripData = {
			trip: {
				name: tripData.name,
				start_date: tripData.startDate,
				end_date: tripData.endDate,
				imageurl: tripData.imageurl,
				user_id: tripData.userId
			}
		}
		return fetch("http://localhost:3001/api/v1/trips", {
			credentials: "include",
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(sendableTripData)
		})
		.then(r=> r.json())
		.then(trip => {
			if (trip.error) {
				alert(trip.error)
			} else{
			dispatch(addTrip(trip))
			dispatch(resetNewForm())
			history.push(`/trips/${trip.id}`)
		}
		})
		.catch(console.log)
	}
}


export const updateTrip = (tripData, history) => {
	//this updateTrip is sending a fetch request
	return dispatch => {
		const sendableTripData = {
			trip: {
				name: tripData.name,
				start_date: tripData.startDate,
				end_date: tripData.endDate,
				imageurl: tripData.imageurl,
				user_id: tripData.userId
			}
		}
		return fetch(`http://localhost:3001/api/v1/trips/${tripData.tripId}`, {
			credentials: "include",
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(sendableTripData)
		})
		.then(r=> r.json())
		.then(trip => {
			if (trip.error) {
				alert(trip.error)
			} else{
			dispatch(updateTripSuccess(trip))
			//this update will update the store
			// dispatch(resetNewForm()) --> we included componentWillUnmount in edit wrapper which resets the form. 
			history.push(`/trips/${trip.id}`)
		}
		})
		.catch(console.log)
	}
}