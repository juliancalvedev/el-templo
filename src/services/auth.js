import { axiosInstance } from '../axios/axiosInstance';
import { getSearchParams } from '../utils/SearchParams';

const baseURL = '/auth';

export const login = ({ email, password }) => {
	return axiosInstance.post(`${baseURL}/login`, {
		email,
		password,
	});
};

export const verifyEmailToBackEnd = async () => {
	const token = getSearchParams('token');

	const response = await axiosInstance.get(
		`/auth/verify-email?token=${token}`
	);

	const { problem } = response?.data;

	if (!problem) {
		return true;
	} else {
		return false;
	}
};
