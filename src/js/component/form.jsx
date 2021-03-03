import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

export const Form = () => {
	return (
		<MDBContainer>
			<MDBRow>
				<MDBCol md="6">
					<form>
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
						<input type="email" id="defaultFormRegisterGenderEx" className="form-control" />
						<br />
						<label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
							Password
						</label>
						<input type="email" id="defaultFormRegisterPasswordEx" className="form-control" />
						<br />
						<label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
							Email
						</label>
						<input type="password" id="defaultFormRegisterEmailEx" className="form-control" />
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
