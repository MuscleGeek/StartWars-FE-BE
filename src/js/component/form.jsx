import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

export const Form = () => {
    const [actions, store] = useContext();
	const [name, setName] = useState("");
	const [gender, setGender] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const SubmitRegisterUser = e => {
		e.preventDefault();
		if (email === "" || password === "" || gender === "" || email === "") {
			alert("Datos incompletos o invalidos");
			console.table(name, gender, password, email);
		}
    };
    
    const SubmitLoginUser = e => {
		e.preventDefault();
		if (password === "" || email === "") {
			alert("Datos incompletos o invalidos");
			console.table(password, email);
		}
	};
	return (
		<MDBContainer>
			<MDBRow>
				<MDBCol md="6">
					<form onSubmit={e => e.SubmitLoginUser(e)}>
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
                                group type="password" 
                                validate 
                                onChange={e => setPassword(e.target.value)}
                                />
						</div>
						<div className="text-center">
							<MDBBtn color="unique" 
                                    type="submit"
                                    onClick={() => {
                                            actions.SubmitLoginUser(password,email);
                                            }}>       
								SignIn
							</MDBBtn>
						</div>
					</form>
				</MDBCol>
				<MDBCol md="6">
					<form onSubmit={e => e.SubmitRegisterUser(e)}>
						<p className="h4 text-center mb-4">Sign up</p>
						<label htmlFor="defaultFormRegisterNameEx" className="grey-text">
							Name
						</label>
                        <input type="text" 
                               id="defaultFormRegisterNameEx" 
                               className="form-control"
                               onChange={e => setName(e.target.value)} 
                               />
						<br />
						<label htmlFor="defaultFormRegisterGenderEx" className="grey-text">
							Gender
						</label>
                        <input type="text" 
                               id="defaultFormRegisterGenderEx" 
                               className="form-control" 
                               onChange={e => setGender(e.target.value)}
                               />
						<br />
						<label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
							Password
						</label>
                        <input type="password" 
                               id="defaultFormRegisterPasswordEx" 
                               className="form-control" 
                               onChange={e => setPassword(e.target.value)}
                               />
						<br />
						<label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
							Email
						</label>
                        <input type="email" 
                               id="defaultFormRegisterEmailEx" 
                               className="form-control" 
                               onChange={e => setEmail(e.target.value)}
                               />
						<div className="text-center mt-4">
                            <MDBBtn color="unique" 
                                    type="submit"
                                    onClick={() => {
                                            actions.SubmitRegisterUser(name,gender,password,email);
                                            }}>       
								Register
							</MDBBtn>
						</div>
					</form>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};
