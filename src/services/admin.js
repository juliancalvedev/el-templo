import { privateGet } from '../axios/privateInstance';

const baseURL = '/admin';

export const getUsers = async () => {
	const response = await privateGet({
		url: `${baseURL}/users`,
	});
	const { data, problem } = response.data;
	return { data, problem };
};
