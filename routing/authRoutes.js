import { setAuthToken } from "@/helpers/utilities";
import Redirect from "@/layout/Redirect";
const authRoutes = (WrappedComponent) => {
	return (props) => {
		// checks whether we are on client / browser or server.
		if (typeof window !== "undefined") {
			const accessToken = localStorage.getItem("xAuthToken");

			// If there's token, set it
			if (accessToken) setAuthToken(accessToken);

			// If there is no access token we redirect to "/" page.
			if (accessToken) {
				return <Redirect to={`/`} />;
			}

			// If this is an accessToken we just render the component that was passed with all its props

			return <WrappedComponent {...props} />;
		}

		// If we are on server, return null
		return null;
	};
};

export default authRoutes;
