import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="UTF-8" />
					{/* <script  src="https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js"></script> */}
					<script
						src="https://kit.fontawesome.com/4cde37f226.js"
						crossOrigin="anonymous"
					></script>
					<script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
					{/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
					<link
						rel="stylesheet"
						href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/monokai-sublime.min.css"
					/>
					{/* <script  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/highlight.min.js"></script> */}
					{/* <script  charset="UTF-8" src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/languages/javascript.min.js"></script> */}
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
