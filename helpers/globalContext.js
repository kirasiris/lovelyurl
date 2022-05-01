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

	const [globalSettings, setGlobalSettings] = useState(null);

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
		}
		window.addEventListener("storage", () => {
			if (!window.localStorage.xAuthToken) logout()();
		});
	}, []);

	return (
		<AuthContext.Provider value={{ auth, setAuth, globalSettings }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
