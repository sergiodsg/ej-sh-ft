import React, { useState, useEffect, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const IdSearch = () => {
	const { store, actions } = useContext(Context);

	const [formValues, setFormValues] = useState({
		id: "",
    	name: "",
    	powers: "",
		click: ""
	  });

	const submitForm = (e) => {
		e.preventDefault();
		store.superheros = [];
		actions.searchByIdSuperhero(formValues);
		setFormValues({ ...formValues, click: true})
	  };

	return (
		<div className="container">
			<div className="container mx-auto form-1">
				<Form>
					<Form.Group className="m-3" controlId="formBasicID">
						<Form.Label>Search by ID</Form.Label>
						<Form.Control type="text" placeholder="ID"  value={formValues.id} onChange={(e) => setFormValues({ ...formValues, id: e.target.value })}/>
					</Form.Group>
				</Form>
				{
					((formValues.id != 0) && (formValues.click === true)) &&
					<div className="card">
						<div className="card-header">
							<h4>List of all superheros</h4>
						</div>
						<div className="card-body d-flex justify-content-center">
							<div className="table-responsive table-wrapper mx-auto">
								<table id="userList" className="table table-bordered table-hover table-striped">
									<thead className="thead-light">
										<tr>
											<th scope="col">ID</th>
											<th scope="col">Name</th>
											<th scope="col">Powers</th>
										</tr>
									</thead>
									<tbody>
										{store.superheros.map((item, index) => (
											<tr key={index}>
												<td>{item.id}</td>
												<td>{item.name}</td>
												<td>{item.powers}</td>
											</tr>
										))}
									</tbody>
								</table>       
							</div>
						</div>
					</div>
				}
				<Button className="m-3" variant="primary" type="submit" onClick={submitForm}>
              		Search
            	</Button> 
			</div>
		</div>
	);
};
