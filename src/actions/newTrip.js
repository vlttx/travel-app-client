//sync actions


export const updateNewTrip = (formData) => {
	return {
		type: "UPDATE_NEWTRIP_FORM",
		formData
	}
}

export const resetNewForm = () => {
	return {
		type: "RESET_NEWTRIP_FORM"
	}
}

export const setFormDataForEdit = trip => {
	const tripData = {
		name: trip.name,
		startDate: trip.start_date,
		endDate: trip.end_date,
		imageurl: trip.imageurl
	}
	return {
	type: "SET_FORM_DATA_FOR_EDIT",
	tripData
}
}