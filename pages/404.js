import { withRouter } from "next/router";
import Link from "next/link";

const my404 = ({ statusCode, router }) => {
	const handlePrev = async (e) => {
		e.preventDefault();
		router.back();
	};
	return (
		<section className={`mb-3`}>
			<div className={`container-fluid m-0 text-center error404`}>
				<h1 className={`display-3`}>404</h1>
				<p className={`lead`}>Page Not Found</p>
				<p className={`lead`}>
					{statusCode
						? `An error ${statusCode} occurred on server`
						: "An error occurred on client"}
				</p>
				<Link href={`/`} passHref>
					<a className={`btn btn-sm btn-dark mr-1`}>Go Home!</a>
				</Link>
				<Link href={`#!`} passHref>
					<a onClick={handlePrev} className={`btn btn-sm btn-dark`}>
						Go Back!
					</a>
				</Link>
			</div>
		</section>
	);
};
my404.getStaticProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default withRouter(my404);
