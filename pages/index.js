import { useState, useContext } from "react";
import { shortenUrl } from "@/actions/url";
import Layout from "@/layout/Layout";
import CallToAction from "@/layout/CallToAction";
import Content from "@/layout/Container";
// import Alert from "@/layout/Alert";
import AuthContext from "@/helpers/globalContext";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const getServerSideProps = async (context) => {
	return {
		props: {},
	};
};

const Index = () => {
	const { auth } = useContext(AuthContext);
	const [urlData, setUrlData] = useState({
		longUrl: ``,
		note: ``,
	});

	const { longUrl, note } = urlData;

	const [isNewUrl, setIsNewUrl] = useState(false);
	const [returnedData, setReturnedData] = useState({
		urlCode: ``,
		longUrl: ``,
		shortUrl: ``,
		note: ``,
	});
	const [, setError] = useState(false);

	const handleChange = (name) => (e) => {
		setUrlData({ ...urlData, [name]: e.target.value });
	};

	const params = auth?.user?._id ? `?user=${auth.user._id}` : ``;

	const shortenLink = async (e) => {
		e.preventDefault();
		shortenUrl(urlData, params)()
			.then((result) => {
				setIsNewUrl(true);
				setReturnedData({
					urlCode: result.data.urlCode,
					longUrl: result.data.longUrl,
					shortUrl: result.data.shortUrl,
					note: result.data.note,
				});
				setUrlData({
					longUrl: ``,
					note: ``,
				});
			})
			.catch((err) => {
				setIsNewUrl(false);
				setError(true);
			});
	};

	const resetForm = () => {
		setUrlData({
			longUrl: ``,
			note: ``,
		});
	};
	return (
		<Layout title={`Home`}>
			<CallToAction
				classGiven={`mt-3 text-center d-none d-sm-none d-md-none d-lg-flex dm-xl-flex`}
			/>
			<Row>
				<Content fullWidth classGiven="mb-3">
					<Form onSubmit={shortenLink}>
						<Form.Group>
							<Form.Label htmlFor={`longUrl`}>Long URL</Form.Label>
							<Form.Control
								type={`text`}
								placeholder={`Long URL`}
								aria-label={`longUrl`}
								aria-describedby={`longUrl-text`}
								autoComplete={`longUrl`}
								name={`longUrl`}
								id={`longUrl`}
								minLength={`6`}
								required
								onChange={handleChange("longUrl")}
								value={longUrl}
								className={`rounded-0`}
							/>
						</Form.Group>
						<br />
						<Form.Group>
							<Form.Label htmlFor="note">Note</Form.Label>
							<Form.Control
								as={`textarea`}
								placeholder={`Create note`}
								aria-label={`note`}
								aria-describedby={`note-text`}
								autoComplete={`note`}
								name={`note`}
								id={`note`}
								value={note}
								onChange={handleChange("note")}
								required
								cols={`30`}
								rows={`3`}
								className={`rounded-0`}
							/>
						</Form.Group>
						{isNewUrl && (
							<ul>
								<li>
									Url Code: <code>{returnedData.urlCode}</code>
								</li>
								<li>
									Long URL:{" "}
									<a
										href={`${returnedData.longUrl}`}
										target={`_blank`}
										rel={`noopenner noreferrer`}
									>
										{returnedData.longUrl}
									</a>
								</li>
								<li>
									Short Url (this is what you use):{" "}
									<a
										href={`${returnedData.shortUrl}`}
										target={`_blank`}
										rel={`noopenner noreferrer`}
									>
										{returnedData.shortUrl}
									</a>
								</li>
								<li>Note: {returnedData.note}</li>
							</ul>
						)}
						<br />
						<Button
							variant={`danger`}
							className={`float-left`}
							type={`submit`}
							size={`sm`}
							disabled={longUrl.length > 0 ? !true : !false}
						>
							Shorten URL
						</Button>
						<Button
							variant={`secondary`}
							className={`float-right`}
							type={`reset`}
							size={`sm`}
							onClick={resetForm}
						>
							Reset
						</Button>
					</Form>
				</Content>
			</Row>
		</Layout>
	);
};

export default Index;
