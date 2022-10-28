import React from "react";
import { Link } from "react-router-dom";
import { faSpider } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<button className="btn btn btn-primary d-flex align-items-center">
					<FontAwesomeIcon
                        className="fs-2 me-2"
                        icon={faSpider}
                      /> Home (List of all superheros)
					</button>
				</Link>
				<div className="ml-auto">
					<Link to="/id-search">
						<button className="btn btn-outline-danger mx-2">Search by id</button>
					</Link>
					<Link to="/name-search">
						<button className="btn btn-outline-danger mx-2">Search by name</button>
					</Link>
					<Link to="/add">
						<button className="btn btn-outline-danger mx-2">Add</button>
					</Link>
					<Link to="/modify">
						<button className="btn btn-outline-danger mx-2">Modify</button>
					</Link>
					<Link to="/remove">
						<button className="btn btn-outline-danger mx-2">Remove</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
