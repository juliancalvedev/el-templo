import { privatePut } from '../axios/privateInstance';

export const changePassword = async ({ currentPassword, newPassword }) => {
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
