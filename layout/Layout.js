import { useContext } from "react";
import Head from "next/head";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import { APP_NAME, APP_DESCRIPTION, PUBLIC_URL } from "@/config";
import AuthContext from "@/helpers/globalContext";

const Layout = ({
	title = `${APP_NAME}`,
	description = `${APP_DESCRIPTION}`,
	postImage = ``,
	imageWidth = `1873`,
	imageHeight = `900`,
	videoWidth = "1873",
	videoHeight = "900",
	card = "",
	robots = "",
	category = "",
	canonical = `${PUBLIC_URL}`,
	url = "",
	author = "Kevin Uriel Azuara Fonseca",
	createdAt = "",
	updatedAt = "",
	locales = "",
	posType = "post",
	sectionClass = "",
	containerClass = "",
	cssLink,
	cssInline,
	jsLink,
	children,
}) => {
	const { auth } = useContext(AuthContext);
	return (
		<>
			<Head>
				{title && (
					<title>
						{APP_NAME} | {title}
					</title>
				)}
				{description && (
					<meta name="description" content={`${description}`}></meta>
				)}
				{robots && <meta name="robots" content={`${robots}`} />}
				{canonical && <link rel="canonical" href={`${canonical}`} />}
				{locales?.length > 0 &&
					locales.map((locale, i) => (
						<meta property="og:locale" key={i} content={`${locale}`} />
					))}
				{locales?.length > 0 &&
					locales.map((locale, i) => (
						<link
							rel="alternate"
							href={`${canonical}/${locale}`}
							key={`${locale}`}
							hrefLang={`${locale}`}
						/>
					))}
				{posType && <meta property="og:type" content={`${posType}`} />}
				{title && <meta property="og:title" content={`${title}`} />}
				{description && (
					<meta property="og:description" content={`${description}`} />
				)}
				{canonical && url && (
					<meta property="og:url" content={`${canonical + `/` + url}`} />
				)}
				{title && <meta property="og:site_name" content={`${title}`} />}
				{author && <meta property="article:author" content={`${author}`} />}
				{category && (
					<meta property="article:section" content={`${category}`} />
				)}
				{createdAt && (
					<meta property="article:published_time" content={`${createdAt}`} />
				)}
				{updatedAt && (
					<meta property="article:modified_time" content={`${updatedAt}`} />
				)}
				{updatedAt && (
					<meta property="og:updated_time" content={`${updatedAt}`} />
				)}
				{postImage !== `` && (
					<meta property="og:image" content={`${postImage}`} />
				)}
				{postImage !== `` && (
					<meta property="og:image:secure_url" content={`${postImage}`} />
				)}
				{postImage !== `` && imageWidth && (
					<meta property="og:image:width" content={`${imageWidth}`} />
				)}
				{postImage !== `` && imageHeight && (
					<meta property="og:image:height" content={`${imageHeight}`} />
				)}
				{videoWidth && (
					<meta property="og:video:width" content={`${videoWidth}`} />
				)}
				{videoHeight && (
					<meta property="og:video:height" content={`${videoHeight}`} />
				)}
				{card && <meta name="twitter:card" content={`${card}`} />}
				{description && (
					<meta name="twitter:description" content={`${description}`} />
				)}
				{title && <meta name="twitter:title" content={`${title}`} />}
				<meta name="twitter:site" content={`@kirasiris`} />
				{canonical && url && (
					<meta property="twitter:url" content={`${canonical + `/` + url}`} />
				)}
				{videoWidth && (
					<meta property="twitter:player:width" content={`${videoWidth}`} />
				)}
				{videoHeight && (
					<meta property="twitter:player:height" content={`${videoHeight}`} />
				)}
				{postImage !== `` && (
					<meta name="twitter:image" content={`${postImage}`} />
				)}
				<meta name="twitter:creator" content={`@kirasiris`} />
				{cssLink && (
					<link rel="stylesheet" href={`${cssLink}`} media="all"></link>
				)}
				{jsLink && (
					<script async src={`${jsLink}`} crossOrigin="anonymous"></script>
				)}
				{cssInline && <style>{cssInline}</style>}
			</Head>
			<Header auth={auth} />
			<main>
				<section>
					<div className={`container`}>{children}</div>
				</section>
			</main>
			<Footer auth={auth} />
		</>
	);
};

export default Layout;
