import { privatePut, privateGet } from '../axios/privateInstance';

export const changePassword = async ({ currentPassword, newPassword }) => {
	try {
		const response = await privatePut({
			url: `/user/change-password`,
			body: {
				currentPassword: currentPassword,
				newPassword: newPassword,
			},
		});
		const { data, problem } = response.data;
		return { data, problem };
	} catch (error) {
		alert(error);
	}
};

export const getUserInfo = async () => {
	try {
		const userInfo = await privateGet({ url: '/user/info' });
		return userInfo.data;
	} catch (error) {
		return error;
	}
};
