import { axiosInstance } from "../axios/axiosInstance";

const baseURL = '/auth'

export const login = ({ email, password }) => {
    return axiosInstance.post(`${baseURL}/login`, {
        email,
        password
    });
};
export const startPasswordRecovery = ({ email }) => {
	return axiosInstance.post(`${baseURL}/start-password-recovery`, {
		email,
	});
};