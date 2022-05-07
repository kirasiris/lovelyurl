import { useEffect } from "react";
import GitHubCalendar from "github-calendar";
// ACTIONS
// HELPERS
import Layout from "@/layout/Layout";
import UseImage from "@/layout/UseImage";
// REACT-BOOTSTRAP
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

const About = () => {
	useEffect(() => {
		GitHubCalendar(".calendar", "kirasiris");
	}, []);
	return (
		<Layout
			title={`About`}
			cssLink={`https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css`}
		>
			<Row className="mt-3">
				<Col xl={`12`}>
					<h1>Mind to donate?</h1>
					<Carousel style={{ position: "sticky" }}>
						<Carousel.Item key={1}>
							<UseImage
								src="https://i0.wp.com/befreebucket-for-outputs.s3.amazonaws.com/2022/04/fb_img_1648487056788364476063471775360.jpg"
								classGiven="p-0 d-block w-100"
								width={`auto`}
								height={`auto`}
								alt="xD"
							/>
						</Carousel.Item>
						<Carousel.Item key={2}>
							<UseImage
								src="https://befreebucket-for-outputs.s3.amazonaws.com/2022/04/fb_img_16493646802048499982661220259950-1024x576.jpg"
								classGiven="p-0 d-block w-100"
								width={`auto`}
								height={`auto`}
								alt="xD"
							/>
						</Carousel.Item>
					</Carousel>
					<hr />
					<p>
						Hello, my name is Kevin. I&apos;m a 23 years old solo developer who
						has passion for coding, however, I&apos;m still a student and spend
						most of my time working full-time in an unrelated industry.
					</p>
					<p>
						I would be very greatful if you decide to help me a bit so I can
						continue improving my skill and provide these services for free!
					</p>
				</Col>
			</Row>
			<hr />
			<Row className="mb-3 text-center d-none d-sm-none d-md-none d-lg-flex dm-xl-flex">
				<Col xl={`4`}>
					<a
						href="https://www.paypal.com/paypalme/kirasiris"
						target="_blank"
						rel="noreferrer"
						className="text-white"
					>
						<Card className={`text-white mb-3`} bg={`info`}>
							<Card.Header>PayPal</Card.Header>
							<Card.Body>
								<i className={`fa-brands fa-paypal fa-5x`} aria-hidden />
								<hr />
								<p>CLICK ME!</p>
							</Card.Body>
						</Card>
					</a>
				</Col>
				<Col xl={`4`}>
					<a
						href="https://wordpress.com/create-blog-referral/?aff=46628&sid=AgJ8XA6iNz1XmnGwkWYQ"
						target="_blank"
						rel="noreferrer"
						className="text-white"
					>
						<Card className={`text-white mb-3`} bg={`primary`}>
							<Card.Header>WordPress</Card.Header>
							<Card.Body>
								<i className={`fa-brands fa-wordpress fa-5x`} aria-hidden />
								<hr />
								<p>CLICK ME!</p>
							</Card.Body>
						</Card>
					</a>
				</Col>
				<Col xl={`4`}>
					<a
						href="https://cash.app/$kirasiris"
						target="_blank"
						rel="noreferrer"
						className="text-white"
					>
						<Card className={`text-white mb-3`} bg={`success`}>
							<Card.Header>$CashApp</Card.Header>
							<Card.Body>
								<i className={`fa-solid fa-dollar-sign fa-5x`} aria-hidden />
								<hr />
								<p>CLICK ME!</p>
							</Card.Body>
						</Card>
					</a>
				</Col>
			</Row>
			<div className={`calendar`}></div>
		</Layout>
	);
};

export default About;
