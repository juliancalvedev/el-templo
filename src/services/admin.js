import { privateGet } from '../axios/privateInstance';

const baseURL = '/admin';

export const getUsers = async () => {
	return await privateGet({
		url: `${baseURL}/users`,
	});
};
