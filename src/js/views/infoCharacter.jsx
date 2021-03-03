import { Jumbotron, Card } from "react-bootstrap";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext.jsx";

export const InfoCharacter = () => {
	const { store, actions } = useContext(Context);

	const param = useParams();
	const paramByID =
		store.characters[
			param.fid
		]; /*obtenemos nuestro personaje por medio del ID para luego poderlo mostrar en un card con los los atributos obtenidos array usando parametro*/

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
						<p>
							<blockquote className="blockquote text-justify">
								<strong>Star Wars</strong>, space opera film series (created by George Lucas) that
								became one of the most successful and influential franchises in motion picture history.
								Begun in the 1970s and ’80s and resuscitated at the turn of the 21st century, the Star
								Wars films continually advanced the field of motion picture special effects and
								developed into an enormously lucrative merchandising industry.
								<hr />
							</blockquote>
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<table className="table table-hover">
					<thead>
						<tr>
							<th scope="col">Height</th>
							<th scope="col">Hair Color</th>
							<th scope="col">Skin Color</th>
							<th scope="col">Gender</th>
							<th scope="col">Birth Year</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{paramByID.height}</td>
							<td>{paramByID.hair_color}</td>
							<td>{paramByID.skin_color}</td>
							<td>{paramByID.gender}</td>
							<td>{paramByID.birth_year}</td>
						</tr>
					</tbody>
				</table>
				<hr />
				<div className="col text-center">
					<Link to="/people">
						<button className="btn btn-warning">Back 2 Characters</button>
					</Link>
					{/* boton que nos redirige a la coleccion de personajes */}
				</div>
			</div>
		</Jumbotron>
	);
};
