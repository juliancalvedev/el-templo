import { privatePut, privateGet, privatePost } from '../axios/privateInstance';

const baseURL = '/user';
export const help = async ({ message, subject }) =>{
try {
	const response = await privatePost({
		url: `${baseURL}/send-email-coach`,
		body: {
			message: message,
			subject: subject,
		},
	});
	const { data, problem } = response.data;
	return{ data, problem, };
} catch (error) {
	alert(error);
}
};
export const changePassword = async ({ currentPassword, newPassword }) => {
	try {
		const response = await privatePut({
			url: `${baseURL}/change-password`,
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
		const userInfo = await privateGet({ url: `${baseURL}/info` });
		return userInfo.data;
	} catch (error) {
		return error;
	}
};

export const putTrainingInfo = async (trainingInfo) => {
	try {
		const response = await privatePut({
			url: `${baseURL}/edit-training-info`,
			body: {
				goals: trainingInfo.goals,
				trainingLevel: trainingInfo.trainingLevel,
				weight: trainingInfo.weight,
				height: trainingInfo.height,
			},
		});
		const { data, problem } = response.data;

		return { data, problem };
	} catch (error) {
		alert(error);
	}
};
