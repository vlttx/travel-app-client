const initialState = {
	name: "",
	startDate: "",
	endDate: "",
	imageurl: ""
}

export default (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_NEWTRIP_FORM":
		return action.formData

		case "RESET_NEWTRIP_FORM":
		return initialState
		
		default:
		  return state
	}
}