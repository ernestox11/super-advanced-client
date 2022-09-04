import "./App.css";

import LoginScreen from "./pages/LoginScreen";
// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AdminPanel from "./pages/AdminPanel";

function App() {
	let activeClassName = "nav-active";
	// const [user, setUser] = useState();
	return (
		<div className="App">
			<BrowserRouter>
				<div className="app-menu">
					<header>{/* <h1 className="App-header">COMPONENTS</h1> */}</header>
					<nav>
						<NavLink
							to=""
							className={
								("nav-link ",
								({ isActive }) => (isActive ? activeClassName : "nav-link"))
							}
						>
							Home
						</NavLink>
						<NavLink
							to="login"
							className={
								("nav-link ",
								({ isActive }) => (isActive ? activeClassName : "nav-link"))
							}
						>
							Login
						</NavLink>
						<NavLink
							to="admin"
							className={
								("nav-link ",
								({ isActive }) => (isActive ? activeClassName : "nav-link"))
							}
						>
							Admin{" "}
						</NavLink>
					</nav>
				</div>
				<Routes>
					<Route path="/" element={""} />
					<Route path="login" element={<LoginScreen />} />
					<Route path="admin" element={<AdminPanel />} />
					{/* <Route path="*" element={<Error />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
