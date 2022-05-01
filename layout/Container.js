// REACT-BOOTSTRAP
import Col from "react-bootstrap/Col";

const Container = ({ children, fullWidth = false, classGiven = `` }) => {
	return fullWidth ? (
		<Col
			xl={`12`}
			lg={`12`}
			md={`12`}
			sm={`12`}
			xs={`12`}
			className={`${classGiven}`}
		>
			{children}
		</Col>
	) : (
		<Col
			xl={`8`}
			lg={`8`}
			md={`12`}
			sm={`12`}
			xs={`12`}
			className={`${classGiven}`}
		>
			{children}
		</Col>
	);
};

export default Container;
