import api from "@/helpers/api";
import { useEffect } from "react";

const getCookie = (name) => {
	return document.cookie.split(";").some((c) => {
		return c.trim().startsWith(name + "=");
	});
};

const deleteCookie = (name, path, domain) => {
	if (getCookie(name)) {
		document.cookie =
			name +
			"=" +
			(path ? ";path=" + path : "") +
			(domain ? ";domain=" + domain : "") +
			";expires=Thu, 01 Jan 1970 00:00:01 GMT";
	}
};

export const setAuthToken = (token) => {
	if (token) {
		api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		api.defaults.headers["Authorization"] = `Bearer ${token}`;
		window?.localStorage.setItem("xAuthToken", token);
	} else {
		delete api.defaults.headers.common["Authorization"];
		delete api.defaults.headers["Authorization"];
		window?.localStorage.removeItem("xAuthToken");
		deleteCookie("xAuthToken", "/");
	}
};
