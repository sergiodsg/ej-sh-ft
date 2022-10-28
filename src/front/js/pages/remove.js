import React, { useState, useEffect, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Remove = () => {
	const { store, actions } = useContext(Context);

	const [formValues, setFormValues] = useState({
		id: "",
    	name: "",
    	powers: ""
	  });

	const submitForm = (e) => {
		e.preventDefault();
		actions.removeSuperhero(formValues);
	  };

	return (
		<div className="container">
			<div className="container mx-auto form-1">
				<Form>
					<Form.Group className="m-3" controlId="formBasicID">
						<Form.Label>Enter the ID of the superhero you want to remove</Form.Label>
						<Form.Control type="text" placeholder="ID"  value={formValues.id} onChange={(e) => setFormValues({ ...formValues, id: e.target.value })}/>
					</Form.Group>
				</Form>
				<Button className="m-3" variant="primary" type="submit" onClick={submitForm}>
              		Remove
            	</Button> 
			</div>
		</div>
	);
};
