import "@/css/app.css";
import "@/css/bootstrap.min.css";

import { AuthProvider } from "@/helpers/globalContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SSRProvider } from "react-bootstrap";

const myApp = ({ Component, pageProps }) => {
	return (
		<AuthProvider>
			<SSRProvider>
				<Component {...pageProps} />
			</SSRProvider>
			<ToastContainer />
		</AuthProvider>
	);
};

export default myApp;
