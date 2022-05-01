export const APP_NAME = process.env.WEBSITE_NAME;
export const APP_DESCRIPTION = process.env.WEBSITE_DESCRIPTION;
export const APP_NAME_HTTP_STRING = process.env.WEBSITE_NAME_HTTP_STRING;
export const API_URL = process.env.PRODUCTION
	? "https://befree.herokuapp.com"
	: "http://localhost:5000";
export const PUBLIC_URL = process.env.PRODUCTION
	? "https://ytdownloader-phi.vercel.app"
	: "http://localhost:3000";
export const KEVINFONSECA_URL = "https://kevinurielfonseca.me/";
