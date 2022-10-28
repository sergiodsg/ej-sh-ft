import React, { useState, useEffect, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Add = () => {
	const { store, actions } = useContext(Context);

	const [formValues, setFormValues] = useState({
		id: "",
    	name: "",
    	powers: ""
	  });

	const submitForm = (e) => {
		e.preventDefault();
		actions.addSuperhero(formValues);
	  };

	return (
		<div className="container">
			<div className="container mx-auto" style={{ maxWidth: 500, height: 'auto' }}>
				<Form>
					<Form.Group className="m-3" controlId="formBasicID">
						<Form.Label>ID</Form.Label>
						<Form.Control type="text" placeholder="ID"  value={formValues.id} onChange={(e) => setFormValues({ ...formValues, id: e.target.value })}/>
					</Form.Group>
					<Form.Group className="m-3" controlId="formBasicName">
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" placeholder="Name" value={formValues.name} onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}/>
					</Form.Group>
					<Form.Group className="m-3" controlId="formBasicPowers">
						<Form.Label>Powers</Form.Label>
						<Form.Control type="text" placeholder="Powers" value={formValues.powers} onChange={(e) => setFormValues({ ...formValues, powers: e.target.value })}/>
					</Form.Group>
				</Form>
				<Button className="m-3" variant="primary" type="submit" onClick={submitForm}>
              		Add
            	</Button> 
			</div>
		</div>
	);
};
