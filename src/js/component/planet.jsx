import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Card, Button, Col, Row, ButtonToolbar } from "react-bootstrap";
import PropTypes from "prop-types";

import { Context } from "../store/appContext.jsx";

import "../../styles/demo.scss";
import { propTypes } from "react-bootstrap/esm/Image";

export const Planet = props => {
	const { store, actions } = useContext(Context);

	return (
		<Container fluid>
			<Row>
				{store.planets.map((planet, i) => (
					<Col md={3} className="mt-1 mb-2" key={i}>
						<Card style={{ width: "18rem" }}>
							<Card.Img variant="top" src={planet.image} />
							<Card.Body>
								<Card.Title>{planet.name}</Card.Title>
								<Card.Text>
									Diameter: {planet.diameter}
									<br />
									Climate: {planet.climate}
									<br />
									Gravity: {planet.terrain}
									<br />
									Population: {planet.population}
									<br />
								</Card.Text>
								<ButtonToolbar
									className="justify-content-between d-flex"
									aria-label="Toolbar with Button groups">
									<Link to={`/infoPlanet/${i}`}>
										<Button variant="primary">Get info</Button>
									</Link>
									<Button
										variant="outline-warning"
										onClick={() => actions.addFavorites(planet.name, "planet")}>
										<i className="far fa-heart" />
									</Button>
								</ButtonToolbar>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};
