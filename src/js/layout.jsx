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
					<Switch>
						<Route exact path="/">
							<Form />
						</Route>
						<Route exact path="/home">
							<Navbar />
							<Home />
						</Route>
						{/* <Route exact path="/demo">
                            <Footer />			
							<Navbar />
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Navbar />
							<Single />
						</Route> */}
						<Route exact path="/planet/">
							<Navbar />
							<Planet /*component={Planet}*/ />
							<Footer />
						</Route>
						<Route exact path="/people/">
							<Navbar />
							<Character
							/*component={Character}*/
							/>
							<Footer />
						</Route>
						<Route path="/infoCharacter/:fid">
							<Navbar />
							<InfoCharacter />
							<Footer />
						</Route>
						<Route path="/infoPlanet/:fid">
							<Navbar />
							<InfoPlanet />
							<Footer />
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
