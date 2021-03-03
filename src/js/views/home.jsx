import React from "react";
import "../../styles/carousel.scss";
import { Carousel, CarouselItem, CarouselItemProps, CarouselProps } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Home = () => (
	<div className="container text-center mt-5">
		<Carousel>
			<Carousel.Item interval={1000}>
				<Link to="/people/">
					<img
						className="d-block w-100"
						src="https://fondosmil.com/fondo/23598.jpg"
						alt="Go to Characters Area"
					/>
					<Carousel.Caption>
						<h3>Personajes</h3>
						<p>Informacion Personaje</p>
					</Carousel.Caption>
				</Link>
			</Carousel.Item>
			<Carousel.Item interval={1000}>
				<Link to="/planet/">
					<img
						className="d-block w-100"
						src="https://images7.alphacoders.com/712/712440.jpg"
						alt="Go to Planets Area"
					/>
					<Carousel.Caption>
						<h3>Planetas</h3>
						<p>Informacion Planetas</p>
					</Carousel.Caption>
				</Link>
			</Carousel.Item>
		</Carousel>
	</div>
);
