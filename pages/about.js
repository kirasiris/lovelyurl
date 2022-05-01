// ACTIONS
// HELPERS
import Layout from "@/layout/Layout";
import Content from "@/layout/Container";
// REACT-BOOTSTRAP
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
	return (
		<Layout title={`About`}>
			<Row>
				<Col xl={`12`}>
					<h1>This is the about page</h1>
				</Col>
			</Row>
			<hr />
			<Row>
				<Content fullWidth></Content>
			</Row>
		</Layout>
	);
};

export default About;
