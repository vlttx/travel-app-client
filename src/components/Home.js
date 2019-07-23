import React from 'react';
import Login from './LoginForm'
import Signup from './SignUp'
import { Link } from "react-router-dom";
import '../App.css';


const Home = () => (
	<div>
	<h3>Welcome! Please <Link to="/signup" className="link">Sign Up</Link> or <Link to="/login" className="link">Log In</Link>!</h3>
	</div>
);

export default Home;