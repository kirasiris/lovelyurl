import { toast } from "react-toastify";
import api from "@/helpers/api";
import { APP_NAME } from "@/config";
import { setAuthToken } from "@/helpers/utilities";

// @route       GET /auth/me
// @description Load loggedIn user info
// @access      Public
// @task        DONE
export const loadUser = () => async (dispatch) => {
	try {
		const res = await api.get(`/auth/me`);
		return res.data;
	} catch (err) {
		// const error = err.response.data.message;
		const error = err?.response?.data?.error?.errors;
		const errors = err?.response?.data?.errors;

		if (error) {
			// dispatch(setAlert(error, 'danger'));
			error &&
				Object.entries(error).map(([, value]) => toast.error(value.message));
		}

		if (errors) {
			errors.forEach((error) => toast.error(error.msg));
		}

		toast.error(err?.response?.statusText);
		return { msg: err?.response?.statusText, status: err?.response?.status };
	}
};

// @route       POST /auth/register
// @description register
// @access      Public
// @task        DONE
export const register = (registerData) => async (dispatch) => {
	try {
		await api.post(`/auth/register`, {
			...registerData,
			website: APP_NAME,
		});

		toast.success(
			`An email has been sent to ${registerData.email}. Please verify account`
		);
	} catch (err) {
		// const error = err.response.data.message;
		const error = err?.response?.data?.error?.errors;
		const errors = err?.response?.data?.errors;

		if (error) {
			// dispatch(setAlert(error, 'danger'));
			error &&
				Object.entries(error).map(([, value]) => toast.error(value.message));
		}

		if (errors) {
			errors.forEach((error) => toast.error(error.msg));
		}

		toast.error(err?.response?.statusText);
		return { msg: err?.response?.statusText, status: err?.response?.status };
	}
};
// @route       POST /auth/login
// @description login
// @access      Public
// @task        DONE
export const login = (loginData, history) => async (dispatch) => {
	try {
		const res = await api.post(`/auth/login`, loginData);

		if (res?.data?.data) {
			history.push(`/auth/validatetwofactorauth/${res?.data?.data?._id}`);
			return res.data;
		}
		setAuthToken(res?.data?.token);
		await loadUser()();
		history.push(`/`);
	} catch (err) {
		// const error = err.response.data.message;
		const error = err?.response?.data?.error?.errors;
		const errors = err?.response?.data?.errors;

		if (error) {
			// dispatch(setAlert(error, 'danger'));
			error &&
				Object.entries(error).map(([, value]) => toast.error(value.message));
		}

		if (errors) {
			errors.forEach((error) => toast.error(error.msg));
		}

		toast.error(err?.response?.statusText);
		return { msg: err?.response?.statusText, status: err?.response?.status };
	}
};

// @route       GET api/v1/auth/logout
// @description Logout current LoggedIn user
// @access      Private
// @task        DONE
export const logout = (history) => async (dispatch) => {
	if (typeof window !== "undefined") {
		localStorage.removeItem("xAuthToken");
		document.cookie = `xAuthToken='';expires=Thu, 01 Jan 1970 00:00:01 GMT`;
		await api.get(`/auth/logout`);
		history.push("/auth/login");
	}
};
