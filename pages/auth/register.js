import { useState } from "react";
import { withRouter } from "next/router";
// ACTIONS
import { register } from "@/actions/auth";
// HELPERS
import Layout from "@/layout/Layout";
import Content from "@/layout/Container";
// REACT-BOOTSTRAP
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import authRoutes from "@/routing/authRoutes";

const Register = ({ router }) => {
	const [registerData, setRegisterData] = useState({
		username: ``,
		email: ``,
		password: ``,
		password2: ``,
	});

	const { username, email, password, password2 } = registerData;

	const [validated, setValidated] = useState(false);

	const handleChange = (name) => (e) => {
		setRegisterData({ ...registerData, [name]: e.target.value });
	};

	const registerAccount = async (e) => {
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		}
		e.preventDefault();
		setValidated(true);
		register(registerData, router)();
	};

	const [passwordShown, setPasswordShown] = useState(false);
	const handlePasswordVisibility = () => {
		setPasswordShown(passwordShown ? false : true);
	};

	const resetForm = () => {
		setRegisterData({
			username: ``,
			name: ``,
			email: ``,
			password: ``,
			password2: ``,
		});
	};

	return (
		<Layout title={`Register`}>
			<Row>
				<Content fullWidth>
					<Form
						className="form p-5"
						noValidate
						validated={validated}
						onSubmit={registerAccount}
					>
						{/* Username */}
						<Form.Group>
							<Form.Label htmlFor="username">Username</Form.Label>
							<InputGroup>
								<div className="input-group-prepend">
									<InputGroup.Text id="username-text">
										<i className="fas fa-user" />
									</InputGroup.Text>
								</div>
								<Form.Control
									type="text"
									placeholder="Username"
									aria-label="username"
									aria-describedby="username-text"
									autoComplete="username"
									name="username"
									id="username"
									required
									onChange={handleChange("username")}
									value={username}
								/>
							</InputGroup>
						</Form.Group>
						{/* Email */}
						<Form.Group>
							<Form.Label htmlFor="email">Email</Form.Label>
							<InputGroup>
								<div className="input-group-prepend">
									<InputGroup.Text id="email-text">
										<i className="fas fa-envelope" />
									</InputGroup.Text>
								</div>
								<Form.Control
									type="email"
									placeholder="Email Address"
									aria-label="email"
									aria-describedby="email-text"
									autoComplete="email"
									name="email"
									id="email"
									minLength="6"
									required
									onChange={handleChange("email")}
									value={email}
								/>
							</InputGroup>
							<small className="form-text">Please use a Gmail account</small>
						</Form.Group>
						{/* Password */}
						<Form.Group>
							<Form.Label htmlFor="password">Password</Form.Label>
							<InputGroup>
								<div className="input-group-prepend">
									<InputGroup.Text id="password-text">
										<i className="fas fa-lock" />
									</InputGroup.Text>
								</div>
								<Form.Control
									type={passwordShown ? "text" : "password"}
									placeholder="Password"
									aria-label="Password"
									aria-describedby="password-text"
									autoComplete="password"
									name="password"
									id="password"
									minLength="6"
									required
									onChange={handleChange("password")}
									value={password}
								/>
							</InputGroup>
						</Form.Group>
						{/* Password2 */}
						<Form.Group>
							<Form.Label htmlFor="password2">Confirm Password</Form.Label>
							<InputGroup>
								<div className="input-group-prepend">
									<InputGroup.Text id="password2-text">
										<i className="fas fa-lock" />
									</InputGroup.Text>
								</div>
								<Form.Control
									type={passwordShown ? "text" : "password"}
									placeholder="Confirm Password"
									aria-label="Confirm Password"
									aria-describedby="password2-text"
									autoComplete="password2"
									name="password2"
									id="password2"
									minLength="6"
									required
									onChange={handleChange("password2")}
									value={password2}
								/>
							</InputGroup>
						</Form.Group>
						{/* View Password */}
						<Form.Group controlId="formBasicCheckbox">
							<Form.Check
								type="checkbox"
								label="View Password"
								onClick={handlePasswordVisibility}
							/>
						</Form.Group>
						{/* Buttons */}
						<Button
							type={`submit`}
							variant={`dark`}
							size={`sm`}
							className={`float-left`}
						>
							Register
						</Button>
						<Button
							type={`reset`}
							variant={`secondary`}
							size={`sm`}
							className={`float-right`}
							onClick={resetForm}
						>
							Reset
						</Button>
					</Form>
				</Content>
			</Row>
		</Layout>
	);
};

export default withRouter(authRoutes(Register));
