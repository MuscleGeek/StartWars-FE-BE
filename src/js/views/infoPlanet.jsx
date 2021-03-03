import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Jumbotron, Card } from "react-bootstrap";

import { Context } from "../store/appContext.jsx";

export const InfoPlanet = () => {
	const { store, actions } = useContext(Context);
	//hacer busqueda por id
	const param = useParams();
	const paramByID = store.planets[param.fid];
	return (
		<Jumbotron>
			<div className="row">
				<div className="col">
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src={paramByID.image} />
					</Card>
				</div>
				<div className="col">
					<div className="text-center">
						<h1>{paramByID.name}</h1>
						<blockquote className="blockquote text-justify">
							<strong>Star Wars</strong>, space opera film series (created by George Lucas) that became
							one of the most successful and influential franchises in motion picture history. Begun in
							the 1970s and ’80s and resuscitated at the turn of the 21st century, the Star Wars films
							continually advanced the field of motion picture special effects and developed into an
							enormously lucrative merchandising industry.
							<hr />
						</blockquote>
					</div>
				</div>
			</div>
			<div className="row">
				<table className="table table-hover">
					<thead>
						<tr>
							<th scope="col">Diameter</th>
							<th scope="col">Climate</th>
							<th scope="col">Gravity</th>
							<th scope="col">Terrain</th>
							<th scope="col">Population</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{paramByID.diameter}</td>
							<td>{paramByID.climate}</td>
							<td>{paramByID.gravity}</td>
							<td>{paramByID.terrain}</td>
							<td>{paramByID.population}</td>
						</tr>
					</tbody>
				</table>
				<hr />
				<div className="col text-center">
					<Link to="/planet">
						<button className="btn btn-warning">Back 2 Planets</button>
					</Link>
				</div>
			</div>
		</Jumbotron>
	);
};
