import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Col, Row, Container, ButtonToolbar } from "react-bootstrap";
import PropTypes from "prop-types";

import { Context } from "../store/appContext.jsx";

import "../../styles/demo.scss";
import { propTypes } from "react-bootstrap/esm/Image";

export const Character = props => {
	const { store, actions } = useContext(Context); //obtenermos acceso a nuestras collecciones y funciones por medio del appContext por medio de su estado*/

	return (
		<Container fluid>
			<Row>
				{store.characters.map((
					character,
					i /*recorremos el los personajes y cada personaje queda dentro de una carta*/
				) => (
					<Col md={3} className="mt-1 mb-2" key={i}>
						<Card style={{ width: "18rem" }}>
							<Card.Img variant="top" src={character.image} />
							<Card.Body>
								<Card.Title>
									<h1>{character.name}</h1>
								</Card.Title>
								<Card.Text>
									<strong>Hair:</strong> {character.hair_color}
									<br />
									<strong>Skin:</strong> {character.skin_color}
									<br />
									<strong>Height:</strong> {character.height}
									<br />
								</Card.Text>
								<ButtonToolbar
									className="justify-content-between d-flex"
									aria-label="Toolbar with Button groups">
									<Link to={`/infoCharacter/${i}`}>
										<Button variant="primary">Get Info</Button>
									</Link>
									<Button
										variant="outline-warning"
										onClick={() => actions.addFavorites(character.name, "character")}>
										<i className="far fa-heart" />
									</Button>
									{/* nos redirige a la colleccion de personajes */}
								</ButtonToolbar>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};
