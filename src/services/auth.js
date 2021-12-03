import { axiosInstance } from '../axios/axiosInstance';
import { getSearchParams } from '../utils/SearchParams';

const baseURL = '/auth';

export const login = ({ email, password }) => {
	return axiosInstance.post(`${baseURL}/login`, {
		email,
		password,
	});
};
 
export const register = ({
	firstName,
	lastName,
	sex,
	email,
	password,
	dateOfBirth,
	country,
	img,
}) => {
	return axiosInstance.post(`${baseURL}/register`, {
		firstName,
		lastName,
		sex,
		email,
		password,
		dateOfBirth,
		country,
		img,
	});
};
export const startPasswordRecovery = ({ email }) => {
	return axiosInstance.post(`${baseURL}/start-password-recovery`, {
		email,
	});
};

export const resendVerifyEmail = (email) => {
	return axiosInstance.post(`${baseURL}/resend-verify-email`, {
		email: email,
	});
};

export const enablePasswordRecovery = ({ token }) => {
	return axiosInstance.get(
		`${baseURL}/enable-password-recovery?token=${token}`
	);
};

export const onPasswordRecovery = ({ token, password }) => {
	return axiosInstance.put(`${baseURL} /on-password-recovery?token=${token}`, {
		newPassword: { password },
	});
};

export const verifyEmailToBackEnd = async () => {
	const token = getSearchParams('token');

	const response = await axiosInstance.get(
		`${baseURL}/verify-email?token=${token}`
	);

	const { problem } = response?.data;

	if (!problem) {
		return true;
	} else {
		return false;
	}
};
