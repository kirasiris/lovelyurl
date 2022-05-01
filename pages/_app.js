import "@/css/app.css";
import "@/css/bootstrap.min.css";

import { AuthProvider } from "@/helpers/globalContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const myApp = ({ Component, pageProps }) => {
	return (
		<AuthProvider>
			<Component {...pageProps} />
			<ToastContainer />
		</AuthProvider>
	);
};

export default myApp;
