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