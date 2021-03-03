import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo.jsx";
import { Single } from "./views/single.jsx";
import injectContext from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import { InfoCharacter } from "./views/infoCharacter.jsx";
import { Planet } from "./component/planet.jsx";
import { Character } from "./component/character.jsx";
import { InfoPlanet } from "./views/infoPlanet.jsx";
import { Form } from "./component/form.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Form />
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/planet/">
							<Planet
							/*component={Planet}*/
							/>
						</Route>
						<Route exact path="/people/">
							<Character
							/*component={Character}*/
							/>
						</Route>
						<Route path="/infoCharacter/:fid">
							<InfoCharacter />
						</Route>
						<Route path="/infoPlanet/:fid">
							<InfoPlanet />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
