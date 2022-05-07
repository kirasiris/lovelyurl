import { useState, useEffect, useContext } from "react";
import { withRouter } from "next/router";
// ACTIONS
import { getMyUrls } from "@/actions/url";
// HELPERS
import Layout from "@/layout/Layout";
import Content from "@/layout/Container";
import NothingFoundAlert from "@/layout/NothingFoundAlert";
// REACT-BOOTSTRAP
import AuthContext from "@/helpers/globalContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import privateRoutes from "@/routing/privateRoutes";

export const getServerSideProps = async (context) => {
	const params = `?user=${context.query.user}&page=${context.query.page}&limit=${context.query.limit}&sort=${context.query.sort}`;
	const myUrls = (await getMyUrls(params)()) || [];
	const totalPages = myUrls?.pagination?.totalpages || 0;
	const totalResults = myUrls?.count || 0;
	const page = myUrls?.pagination?.current || 1;
	const next = myUrls?.pagination?.next?.page || 0;
	const prev = myUrls?.pagination?.prev?.page || 0;
	const paramsObject = context.query;
	return {
		props: {
			params: params,
			serverUrls: myUrls?.data || [],
			totalDocuments: myUrls?.countAll || 0,
			totalPages: totalPages,
			totalResults: totalResults,
			page: page,
			next: next,
			prev: prev,
			paramsObject: paramsObject,
		},
	};
};

const MyUrls = ({
	params,
	serverUrls,
	totalDocuments,
	totalPages,
	totalResults,
	page,
	next,
	prev,
	paramsObject,
	router,
}) => {
	const { auth } = useContext(AuthContext);

	const [myUrls, setMyUrls] = useState([]);

	useEffect(() => {
		setMyUrls(serverUrls);
	}, [params]);

	const nextPage = () => {
		setPage(next);
	};

	const prevPage = () => {
		setPage(prev);
	};

	const nextButton = () => {
		return (
			next && (
				<Button size={`sm`} className={`float-right`} onClick={nextPage}>
					Next Page
				</Button>
			)
		);
	};

	const prevButton = () => {
		return (
			prev && (
				<Button size={`sm`} className={`float-left`} onClick={prevPage}>
					Previous Page
				</Button>
			)
		);
	};

	return (
		<Layout
			title={`My Urls`}
			description={`Take a look in all the URLs that you have shortened`}
		>
			<Row>
				<Col xl={`12`}>
					<h1>These are the Urls created by you</h1>
				</Col>
			</Row>
			<hr />
			<Row>
				<Content fullWidth classGiven={`mb-3`}>
					{myUrls?.length > 0 ? (
						<>
							<Table striped bordered hover responsive>
								<thead>
									<tr>
										<th>User</th>
										<th>UrlCode</th>
										<th>longUrl</th>
										<th>shortUrl</th>
										<th>Created At</th>
									</tr>
								</thead>
								<tbody>
									{myUrls.map((myUrl, index) => (
										<tr key={myUrl._id}>
											<td>{myUrl?.user}</td>
											<td>{myUrl.urlCode}</td>
											<td>
												<a
													href={`${myUrl.longUrl}`}
													target="_blank"
													rel="noopener noreferrer"
												>
													{myUrl.longUrl}
												</a>
											</td>
											<td>
												<a
													href={`${myUrl.shortUrl}`}
													target="_blank"
													rel="noopener noreferrer"
												>
													{myUrl.shortUrl}
												</a>
											</td>
											<td>{myUrl.createdAt}</td>
										</tr>
									))}
								</tbody>
							</Table>
							<div className="float-start">Number of Urls {totalResults}</div>
							<div className={`float-end`}>
								{"Page " + page + " of " + totalPages}
							</div>
							<br />
							<hr />
							{prevButton()}
							{nextButton()}
						</>
					) : (
						<NothingFoundAlert />
					)}
				</Content>
			</Row>
		</Layout>
	);
};

export default withRouter(privateRoutes(MyUrls));
