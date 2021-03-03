import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

export const Form = () => {
	const [name, setName] = useState("");
	const [gender, setGender] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const SubmitData = e => {
		e.preventDefault();
		if (email === "" || password === "" || gender === "" || email === "") {
			alert("Datos incompletos o invalidos");
			console.table(name, gender, password, email);
		}
	};
	return (
		<MDBContainer>
			<MDBRow>
				<MDBCol md="6">
					<form onSubmit={e => e.SubmitData(e)}>
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
							/>
							<MDBInput label="Type your password" icon="lock" group type="password" validate />
						</div>
						<div className="text-center">
							<MDBBtn>Login</MDBBtn>
						</div>
					</form>
				</MDBCol>
				<MDBCol md="6">
					<form>
						<p className="h4 text-center mb-4">Sign up</p>
						<label htmlFor="defaultFormRegisterNameEx" className="grey-text">
							Name
						</label>
						<input type="text" id="defaultFormRegisterNameEx" className="form-control" />
						<br />
						<label htmlFor="defaultFormRegisterGenderEx" className="grey-text">
							Gender
						</label>
						<input type="text" id="defaultFormRegisterGenderEx" className="form-control" />
						<br />
						<label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
							Password
						</label>
						<input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
						<br />
						<label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
							Email
						</label>
						<input type="email" id="defaultFormRegisterEmailEx" className="form-control" />
						<div className="text-center mt-4">
							<MDBBtn color="unique" type="submit">
								Register
							</MDBBtn>
						</div>
					</form>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};
