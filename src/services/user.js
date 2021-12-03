import { privatePut } from '../axios/privateInstance';

export const changePassword = async ({ newPassword, currentPassword }) => {
	try {
		await privatePut({
			url: `/user/change-password`,
			body: {
				currentPassword: currentPassword,
				newPassword: newPassword,
			},
		});
	} catch (error) {
		alert(error);
	}
};
