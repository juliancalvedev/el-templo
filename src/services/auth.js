import { axiosInstance } from '../axios/axiosInstance';
import { getSearchParams } from '../utils/SearchParams';

const baseURL = '/auth';

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
