import React, { useState, useEffect, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Modify = () => {
	const { store, actions } = useContext(Context);

	const [formValues, setFormValues] = useState({
		idToMod: "",
		id: "",
    	name: "",
    	powers: ""
	  });

	const submitForm = (e) => {
		e.preventDefault();
		actions.modifySuperhero(formValues);
	  };

	return (
		<div className="container">
			<div className="container mx-auto form-1">
				<Form>
					<Form.Group className="m-3" controlId="formBasicID">
						<Form.Label>Enter the ID of the superhero to modify</Form.Label>
						<Form.Control type="text" placeholder="ID"  value={formValues.idToMod} onChange={(e) => setFormValues({ ...formValues, idToMod: e.target.value })}/>
					</Form.Group>
					<Form.Group className="m-3" controlId="formBasicID">
						<Form.Label>New ID</Form.Label>
						<Form.Control type="text" placeholder="ID"  value={formValues.id} onChange={(e) => setFormValues({ ...formValues, id: e.target.value })}/>
					</Form.Group>
					<Form.Group className="m-3" controlId="formBasicName">
						<Form.Label>New Name</Form.Label>
						<Form.Control type="text" placeholder="Name" value={formValues.name} onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}/>
					</Form.Group>
					<Form.Group className="m-3" controlId="formBasicPowers">
						<Form.Label>New Powers</Form.Label>
						<Form.Control type="text" placeholder="Powers" value={formValues.powers} onChange={(e) => setFormValues({ ...formValues, powers: e.target.value })}/>
					</Form.Group>
				</Form>
				<Button className="m-3" variant="primary" type="submit" onClick={submitForm}>
              		Modify
            	</Button> 
			</div>
		</div>
	);
};
