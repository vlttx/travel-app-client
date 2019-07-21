 
//synchronous action creators return plain JS objects

 export const setCurrentUser = user => {
 	return {
 		type: "SET_CURRENT_USER",
 		// payload: user (that's in the arg) or we can use shorthand:
 		user
 	}
 }
//asynchronous action creators (thunk allows to use dispatch) that return FUNCTION and promise
//which as an argument receives. Happens before the synchronous action
 export const login = credentials => {
 	return dispatch =>{
		return fetch("http://localhost:3001/api/v1/login",{
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(credentials)
		})
 	}
 }