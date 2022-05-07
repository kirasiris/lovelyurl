import { useState, createContext, useEffect } from "react";
import { setAuthToken } from "./utilities";
import { loadUser, logout } from "@/actions/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({
		token: ``,
		isAuthenticated: false,
		user: null,
	});

	useEffect(() => {
		if (window.localStorage.xAuthToken) {
			setAuthToken(window.localStorage.xAuthToken);
			loadUser()()
				.then((result) => {
					setAuth({
						token: window.localStorage.xAuthToken,
						isAuthenticated: true,
						user: result?.data,
					});
				})
				.catch((err) => console.log("There was an error loading user"));
			// Load global settings and make them available through whole application
		} else {
			logout()();
		}
	}, []);

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
