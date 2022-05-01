// REACT-BOOTSTRAP
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const CallToAction = ({ classGiven = `` }) => {
	return (
		<Row className={`${classGiven}`}>
			<Col xl={`4`}>
				<Card className={`text-white mb-3`} bg={`danger`}>
					<Card.Header>Step 1</Card.Header>
					<Card.Body>
						<i className={`fas fa-link fa-5x`} />
						<hr />
						<p>Get a link/url</p>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={`4`}>
				<Card className={`text-white mb-3`} bg={`danger`}>
					<Card.Header>Step 2</Card.Header>
					<Card.Body>
						<i className={`fas fa-copy fa-5x`} />
						<hr />
						<p>Paste it!</p>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={`4`}>
				<Card className={`text-white mb-3`} bg={`danger`}>
					<Card.Header>Step 3</Card.Header>
					<Card.Body>
						<i className={`fas fa-share fa-5x`} />
						<hr />
						<p>Submit it!</p>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

export default CallToAction;
