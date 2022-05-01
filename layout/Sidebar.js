// REACT-BOOTSTRAP
import Col from "react-bootstrap/Col";

const Sidebar = ({ children }) => {
	return (
		<Col
			xl={`4`}
			lg={`4`}
			md={`4`}
			sm={`12`}
			xs={`12`}
			className={`d-none d-sm-none d-md-none d-lg-block dm-xl-block`}
		>
			{children}
		</Col>
	);
};

export default Sidebar;
