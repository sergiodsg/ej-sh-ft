import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  let superhero = {
    id: "0",
    name: "sh1",
    powers: "i don't have powers",
  };

  actions.addSuperhero(superhero);

  return (
    
	  <div className="container mx-auto mb-5">
		<div className="card">
			<div className="card-header">
				<h4>Superhero list</h4>
			</div>
			<div className="card-body d-flex justify-content-center">
				<div className="table-responsive table-wrapper mx-auto">
					<table id="userList" className="table table-bordered table-hover table-striped">
						<thead className="thead-light">
							<tr>
								<th scope="col">id</th>
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
	</div>
  );
};
