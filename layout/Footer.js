import React from "react";
import Link from "next/link";
import { APP_NAME, KEVINFONSECA_URL } from "@/config";

const Footer = (props) => {
	return (
		<footer
			className={`bg-danger text-white text-center text-monospace footer mt-auto py-3`}
		>
			<div className={`container`}>
				<p className={`m-0`}>
					<Link href={`/`} passHref>
						<a className={`text-white me-1`}>{APP_NAME}</a>
					</Link>
					<i className={`fa fa-code me-1`} id={`fa-code`} aria-hidden />
					made with
					<i className={`fa fa-heart ms-1 me-1`} id={`fa-heart`} aria-hidden />
					&#38; &#9749; by
					<a
						href={KEVINFONSECA_URL}
						target={`_blank`}
						rel={`noopener noreferrer`}
						className={`ms-1 text-white`}
					>
						Kevin
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
