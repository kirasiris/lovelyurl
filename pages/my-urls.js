import { useState, useEffect, useContext } from "react";
import { withRouter } from "next/router";
// ACTIONS
import { getMyUrls } from "@/actions/url";
// HELPERS
import Layout from "@/layout/Layout";
import Content from "@/layout/Container";
import Spinner from "@/layout/Spinner";
import NothingFoundAlert from "@/layout/NothingFoundAlert";
// REACT-BOOTSTRAP
import AuthContext from "@/helpers/globalContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import privateRoutes from "@/routing/privateRoutes";

const MyUrls = ({ router }) => {
	const { auth } = useContext(AuthContext);
	const [loading, setLoading] = useState(true);
	const [myUrls, setMyUrls] = useState([]);
	const [next, setNext] = useState(0);
	const [prev, setPrev] = useState(0);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [totalResults, setTotalResults] = useState(0);
	const [, setError] = useState(false);

	const params = `?user=${auth?.user?._id}&page=${router.query.page}&limit=${router.query.limit}&sort=${router.query.sort}`;

	useEffect(() => {
		getMyUrls(params)()
			.then((result) => {
				setMyUrls(result.data);
				setTotalPages(result.pagination.totalpages);
				setTotalResults(result.count);
				setPage(result.pagination.current);
				setNext(result.pagination?.next?.page);
				setPrev(result.pagination?.prev?.page);
				setLoading(false);
			})
			.catch((err) => {
				setError(true);
			});
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
		<Layout title={`MyUrls`}>
			<Row>
				<Col xl={`12`}>
					<h1>These are the Urls created by you</h1>
				</Col>
			</Row>
			<hr />
			<Row>
				<Content fullWidth classGiven={`mb-3`}>
					{loading ? (
						<Spinner />
					) : myUrls?.length > 0 ? (
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
							Number of Urls {totalResults}
							<div className={`float-right`}>
								{"Page " + page + " of " + totalPages}
							</div>
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
