import { axiosInstance } from '../axios/axiosInstance';
<<<<<<< HEAD
=======
import { getSearchParams } from '../utils/SearchParams';
>>>>>>> 4dcd62998c4ada6537376d9634337fa3c0bb6854

const baseURL = '/auth';

export const login = ({ email, password }) => {
	return axiosInstance.post(`${baseURL}/login`, {
		email,
		password,
	});
};

<<<<<<< HEAD
export const enablePasswordRecovery = ({ token }) => {
	return axiosInstance.get(
		`${baseURL}/enable-password-recovery?token=${token}`
	);
};
