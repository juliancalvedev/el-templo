import { privatePut } from '../axios/privateInstance';

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
