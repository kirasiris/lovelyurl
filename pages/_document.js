/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="UTF-8" />
					<script
						src="https://kit.fontawesome.com/4cde37f226.js"
						crossOrigin="anonymous"
					></script>
					<script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
					<meta property="fb:app_id" content="258442714877712" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
