import { withRouter } from "next/router";
import Link from "next/link";
// REACT-BOOTSTRAP
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { logout } from "@/actions/auth";
import { APP_NAME } from "@/config";
const Header = ({ auth, router }) => {
	const isActive = (router, path) => {
		if (router.pathname === path) {
			return {
				backgroundColor: "#9A250F",
				"&:hover": {
					backgroundColor: "#a52a2a",
				},
			};
		}
	};
	return (
		<header>
			<Navbar bg={`danger`} expand={`lg`}>
				<div className={`container`}>
					<Link href={`/`} passHref>
						<a className={`navbar-brand text-white`}>
							<i className={`fa fa-heart mr-1`} id={`fa-heart`} aria-hidden />
							{APP_NAME}
						</a>
					</Link>
					<Navbar.Toggle aria-controls={`basic-navbar-nav`} />
					<Navbar.Collapse id={`basic-navbar-nav`} className={`text-uppercase`}>
						<Nav className={`me-auto`}>
							<Link href={`/`} passHref>
								<a
									className={`nav-link text-white`}
									style={isActive(router, `/`)}
								>
									Home
								</a>
							</Link>
							{auth?.isAuthenticated && (
								<Link
									href={{
										pathname: "/my-urls",
										query: {
											user: auth?.user?._id,
											page: 1,
											limit: 12,
											sort: `-createdAt`,
										},
									}}
									passHref
								>
									<a
										className={`nav-link text-white`}
										style={isActive(router, "/my-urls")}
									>
										My Urls
									</a>
								</Link>
							)}
							<Link href={`/about`} passHref>
								<a
									className={`nav-link text-white`}
									style={isActive(router, "/about")}
								>
									About
								</a>
							</Link>
						</Nav>
						<Nav>
							{!auth?.isAuthenticated && (
								<>
									<Link href={`/auth/login`} passHref>
										<a
											className={`nav-link text-white`}
											style={isActive(router, "/auth/login")}
										>
											Login
										</a>
									</Link>
									<Link href={`/auth/register`} passHref>
										<a
											className={`nav-link text-white`}
											style={isActive(router, "/auth/register")}
										>
											Register
										</a>
									</Link>
								</>
							)}
							{auth?.isAuthenticated && (
								<Link href={`#!`} passHref>
									<a
										onClick={() => logout(router)()}
										className={`nav-link text-white`}
									>
										Logout
									</a>
								</Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
			<div
				className={`jumbotron bg-danger rounded-0 text-white text-center text-monospace mb-0`}
				id={`myJumbotron`}
			>
				<Link href={`/`} passHref>
					<i
						className={`fa fa-heart ml-1 fa-10x mr-1`}
						id={`fa-heart`}
						style={{ cursor: `pointer` }}
						aria-hidden
					/>
				</Link>
			</div>
		</header>
	);
};

export default withRouter(Header);
