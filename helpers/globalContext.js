import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { setAuthToken } from "./utilities";
import { loadUser, logout } from "@/actions/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({
		token: ``,
		isAuthenticated: false,
		user: null,
	});

	const resetSetAuth = () => {
		setAuth({ token: ``, isAuthenticated: false, user: null });
	};

	const token = auth && auth.token ? auth.token : "";
	axios.defaults.headers.common["Content-Type"] = `application/json`;
	axios.defaults.headers.common["Accept"] = `application/json`;
	axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

	axios.interceptors.response.use(
		async (res) => {
			return res;
		},
		async (err) => {
			let res = err?.response;

			if (res?.status === 401 && res?.config && !res?.config?._isRetryRequest) {
				await logout()();
				resetSetAuth();
			}
		}
	);

	useEffect(() => {
		const localToken = async () => {
			let token = window.localStorage.xAuthToken;
			setAuthToken(token);
			if (token) {
				return await loadUser()()
					.then((result) => {
						setAuth({
							token: window.localStorage.xAuthToken,
							isAuthenticated: true,
							user: result?.data,
						});
					})
					.catch((err) => console.log("There was an error loading user"));
			}
		};
		localToken();
	}, []);

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
