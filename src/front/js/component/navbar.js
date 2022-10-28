import React from "react";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<button className="btn btn btn-success">
					<FontAwesomeIcon
                        className="fs-2"
                        icon={faHome}
                      />
					</button>
				</Link>
				<div className="ml-auto">
					<Link to="/id-search">
						<button className="btn btn-outline-secondary mx-2">Search by id</button>
					</Link>
					<Link to="/name-search">
						<button className="btn btn-outline-secondary mx-2">Search by name</button>
					</Link>
					<Link to="/add">
						<button className="btn btn-outline-secondary mx-2">Add</button>
					</Link>
					<Link to="/modify">
						<button className="btn btn-outline-secondary mx-2">Modify</button>
					</Link>
					<Link to="/remove">
						<button className="btn btn-outline-secondary mx-2">Remove</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
