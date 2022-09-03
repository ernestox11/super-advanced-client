import "./App.css";

import LoginScreen from "./components/LoginScreen/LoginScreen";
// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";

function App() {
	// const [user, setUser] = useState();
	return (
		<div className="App">
			<BrowserRouter>
				<header>
					<h1>Hello World</h1>
				</header>
				<nav>
					<NavLink to="">Home</NavLink>
					<NavLink to="login">Login</NavLink>
					<NavLink to="admin">Admin </NavLink>
				</nav>
			</BrowserRouter>
		</div>
	);
}

export default App;
