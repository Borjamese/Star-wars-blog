import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			<div className="ml-auto">
				<Link to="/favoritos">
					<button className="btn btn-primary "> <i className="fa-regular fa-heart"></i> </button>
				</Link>
			</div>
		</nav>
	);
};
