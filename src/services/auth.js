import { axiosInstance } from '../axios/axiosInstance';
import { getSearchParams } from '../utils/SearchParams';

const baseURL = '/auth';

export const login = ({ email, password }) => {
	return axiosInstance.post(`${baseURL}/login`, {
		email,
		password,
	});
};
export const startPasswordRecovery = async ({ email }) => {
	return await axiosInstance.post(`${baseURL}/start-password-recovery`, {
		email,
	});
};

export const resendVerifyEmail = async (email) => {
	return await axiosInstance.post(`${baseURL}/resend-verify-email`, {
		email: email,
	});
};

export const enablePasswordRecovery = ({ token }) => {
	return axiosInstance.get(
		`${baseURL}/enable-password-recovery?token=${token}`
	);
};

export const onPasswordRecovery = ({ token, password }) => {
	return axiosInstance.put(
		`${baseURL} /on-password-recovery?token=${token}`,
		{
			newPassword: { password },
		}
	);
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
