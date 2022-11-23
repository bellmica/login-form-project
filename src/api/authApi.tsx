import axios from "axios";

const API_URL = "https://dev-auth.wemission.community/v1/api/auth/";
const CONFIG = { headers: { 'Content-Type': 'application/json' },};

export const Login = async(username : String, password : String) => {
	
const params = {
	Email: username,
    Password: password
};
	return axios.post(API_URL + "login", params, CONFIG);
};

