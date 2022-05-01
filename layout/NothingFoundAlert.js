import Alert from "react-bootstrap/Alert";

const NothingFoundAlert = ({ classStr = `` }) => {
	return (
		<Alert variant={`danger`} className={`${classStr}`}>
			Nothing found
		</Alert>
	);
};

export default NothingFoundAlert;
