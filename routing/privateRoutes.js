import Redirect from "@/layout/Redirect";
import { useContext } from "react";
import AuthContext from "@/helpers/globalContext";

const privateRoutes = (WrappedComponent) => {
	return (props) => {
		const { auth } = useContext(AuthContext);
		// checks whether we are on client / browser or server.
		if (typeof window !== "undefined") {
			const accessToken = localStorage.getItem("xAuthToken");

			// If there's token, set it
			// if (accessToken) setAuthToken(accessToken);
			// if (accessToken) () => loadUserAuth()();

			// If there is no access token we redirect to "/" page.
			if (!accessToken && !auth?.isAuthenticated) {
				return <Redirect to={`/auth/login`} />;
			}

			// If this is an accessToken we just render the component that was passed with all its props

			return <WrappedComponent {...props} />;
		}

		// If we are on server, return null
		return null;
	};
};

export default privateRoutes;
