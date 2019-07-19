import { createStore, applyMiddleware, combineReducers, compose } from 'redux' 
import usersReducer from './reducers/users'
import  thunk  from 'redux-thunk'

const reducer = combineReducers({
	users: usersReducer})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
// const reducers = combineReducers({
// 	items: itemsReducer,
// 	itemFormData
// })
// const middleware = [thunk]; best when we have a lot more middleware


// export default createStore(reducers, composeEnhancer(applyMiddleware(...middleware)))