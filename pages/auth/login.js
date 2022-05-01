import { useEffect, useState } from "react";
import { withRouter } from "next/router";
// ACTIONS
import { login } from "@/actions/auth";
// HELPERS
import Layout from "@/layout/Layout";
import Content from "@/layout/Container";
// REACT-BOOTSTRAP
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import authRoutes from "@/routing/authRoutes";

const Login = ({ router }) => {
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
		rememberMe: false,
	});

	const { email, password, rememberMe } = loginData;

	// Remember me
	useEffect(() => {
		const email = localStorage.getItem("email");
		const password = localStorage.getItem("password");
		email &&
			password &&
			setLoginData((loginData) => ({
				...loginData,
				email,
				password,
				rememberMe: true,
			}));
	}, []);

	const handleChange = (name) => (e) => {
		setLoginData({ ...loginData, [name]: e.target.value });
	};

	const loginAccount = async (e) => {
		e.preventDefault();
		if (rememberMe) {
			localStorage.setItem("email", email);
			localStorage.setItem("password", password);
		} else {
			localStorage.removeItem("email");
			localStorage.removeItem("password");
		}
		login(loginData, router)();
	};

	const [passwordShown, setPasswordShown] = useState(false);
	const handlePasswordVisibility = () => {
		setPasswordShown(passwordShown ? false : true);
	};

	const resetForm = () => {
		setLoginData({
			email: "",
			password: "",
		});
	};

	return (
		<Layout title={`Login`}>
			<Row>
				<Content fullWidth>
					<Form className="form form-signing p-5" onSubmit={loginAccount}>
						<Form.Group>
							<Form.Label htmlFor="email">Email</Form.Label>
							<InputGroup>
								<div className="input-group-prepend">
									<InputGroup.Text id="email-text">
										<i className="fas fa-envelope" aria-hidden />
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
						</Form.Group>

						<Form.Group>
							<Form.Label htmlFor="password">Password</Form.Label>
							<InputGroup>
								<div className="input-group-prepend">
									<InputGroup.Text id="password-text">
										<i className="fas fa-lock" aria-hidden />
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

						<Form.Group
							controlId="rememberAccount"
							className={`float-left`}
							name={`rememberMe`}
							onChange={handleChange("rememberMe")}
							checked={rememberMe}
							readOnly
						>
							<Form.Check type="checkbox" label="Remember" />
						</Form.Group>

						<Form.Group controlId="viewPassword" className={`float-right`}>
							<Form.Check
								type="checkbox"
								label="View Password"
								onClick={handlePasswordVisibility}
							/>
						</Form.Group>
						<div className={`clearfix`}></div>

						<Button
							variant={`dark`}
							className={`float-left`}
							type={`submit`}
							size={`sm`}
							disabled={
								email.length > 0 && password.length > 0 ? !true : !false
							}
						>
							Login
						</Button>
						<Button
							variant={`secondary`}
							className={`float-right`}
							type={`reset`}
							size={`sm`}
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

export default withRouter(authRoutes(Login));
