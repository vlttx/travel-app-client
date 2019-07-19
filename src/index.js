import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import  thunk  from 'redux-thunk'
import { Provider } from 'react-redux'
import usersReducer from './reducers/users'
//naming this whatever we want as this is a default export

const reducer = combineReducers({
	user: usersReducer})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>, 
	document.getElementById('root'));

// const reducers = combineReducers({
// 	items: itemsReducer,
// 	itemFormData
// })
// const middleware = [thunk]; best when we have a lot more middleware


// export default createStore(reducers, composeEnhancer(applyMiddleware(...middleware)))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
