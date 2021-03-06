import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { Redirect } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import "../../styles/index.scss";

export const Form = () => {
	const { actions, store } = useContext(Context);
	const [name, setName] = useState("");
	const [gender, setGender] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const SubmitRegisterUser = e => {
		//Validation Block 4 Signup Form
		e.preventDefault();
		if (name === "" || gender === "" || password === "" || email === "") {
			alert("Datos incompletos o invalidos");
		} else {
			console.log(name, gender, password, email);
			actions.signup(name, gender, password, email);
		}
	};

	const SubmitLoginUser = e => {
		//Validation Block 4 Login Form
		e.preventDefault();
		if (password === "" || email === "") {
			alert("Datos incompletos o invalidos");
		} else {
			console.table(password, email);
			actions.login(password, email);
		}
	};
	return (
		<div className="pos-xy">
			<MDBContainer>
				<MDBRow>
					<MDBCol md="6">
						<form onSubmit={e => SubmitLoginUser(e)}>
							<p className="h5 text-center mb-4">Sign in</p>
							<div className="grey-text">
								<MDBInput
									label="Type your email"
									icon="envelope"
									group
									type="email"
									validate
									error="wrong"
									success="right"
									onChange={e => setEmail(e.target.value)}
								/>
								<MDBInput
									label="Type your password"
									icon="lock"
									group
									type="password"
									validate
									onChange={e => setPassword(e.target.value)}
								/>
							</div>
							<div className="text-center">
								<MDBBtn color="unique" type="submit" onClick={e => SubmitLoginUser(e)}>
									SignIn
								</MDBBtn>
							</div>
						</form>
					</MDBCol>
					<MDBCol md="6">
						<form onSubmit={e => SubmitRegisterUser(e)}>
							<p className="h4 text-center mb-4">Sign up</p>
							<label htmlFor="defaultFormRegisterNameEx" className="grey-text">
								Name
							</label>
							<input
								type="text"
								id="defaultFormRegisterNameEx"
								className="form-control"
								onChange={e => setName(e.target.value)}
							/>
							<br />
							<label htmlFor="defaultFormRegisterGenderEx" className="grey-text">
								Gender
							</label>
							<input
								type="text"
								id="defaultFormRegisterGenderEx"
								className="form-control"
								onChange={e => setGender(e.target.value)}
							/>
							<br />
							<label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
								Password
							</label>
							<input
								type="password"
								id="defaultFormRegisterPasswordEx"
								className="form-control"
								onChange={e => setPassword(e.target.value)}
							/>
							<br />
							<label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
								Email
							</label>
							<input
								type="email"
								id="defaultFormRegisterEmailEx"
								className="form-control"
								onChange={e => setEmail(e.target.value)}
							/>
							<div className="text-center mt-4">
								<MDBBtn color="unique" type="submit" onClick={e => SubmitRegisterUser(e)}>
									Register
								</MDBBtn>
							</div>
						</form>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</div>
	);
};
