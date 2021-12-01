import { axiosInstance } from '../axios/axiosInstance';

const baseURL = '/auth';

export const login = ({ email, password }) => {
	return axiosInstance.post(`${baseURL}/login`, {
		email,
		password,
	});
};

export const enablePasswordRecovery = ({ token }) => {
	return axiosInstance.get(
		`${baseURL}/enable-password-recovery?token=${token}`
	);
};

export const onPasswordRecovery = ({ token, password }) => {
	return axiosInstance.put(`${baseURL}/on-password-recovery?token=${token}`, {
		newPassword: { password },
	});
};
