import SpinnerX from "react-bootstrap/Spinner";

const Spinner = () => {
	return (
		<div className={`d-flex justify-content-center`} id={`spinner`}>
			<SpinnerX
				animation={`border`}
				style={{ width: "3rem", height: "3rem" }}
				role={`status`}
				variant={`dark`}
			>
				<span className={`sr-only`}>Loading...</span>
			</SpinnerX>
		</div>
	);
};

export default Spinner;
