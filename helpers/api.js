import axios from "axios";
import { API_URL } from "@/config";
import { logout } from "@/actions/auth";

// HANLDE API REQUESTS
const api = axios.create({
	baseURL: `${API_URL}/api/v1`,
	headers: {
		"Content-Type": `application/json`,
	},
});
/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired
 logout the user if the token has expired
**/

api.interceptors.response.use(
	async (res) => {
		return res;
	},
	async (err) => {
		let res = err?.response;

		if (res?.status === 401 && res?.config && !res?.config?._isRetryRequest) {
			await logout()();
		}
	}
);

export default api;
