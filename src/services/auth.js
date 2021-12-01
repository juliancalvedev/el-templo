import { axiosInstance } from "../axios/axiosInstance";

const baseURL = '/auth'

export const login = ({ email, password }) => {
    return axiosInstance.post(`${baseURL}/login`, {
        email,
        password
    });
};

export const register = ({ name,lastName,sex,email,password,password2,birth,country,img}) => {
	return axiosInstance.post(`${baseURL}/register`, {
		name,
		lastName,
		sex,
		email,
		password,
		password2,
		birth,
		country,
		img,
	});
};