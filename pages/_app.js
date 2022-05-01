import "@/css/app.css";
import "@/css/bootstrap.min.css";
import "//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/monokai-sublime.min.css";

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
