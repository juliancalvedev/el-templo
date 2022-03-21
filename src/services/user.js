import { privatePut, privateGet, privatePost } from '../axios/privateInstance';

const baseURL = '/user';
export const help = ({ message, subject }) =>
	privatePost({
		url: `${baseURL}/send-email-coach`,
		body: {
			message: message,
			subject: subject,
		},
	});

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

export const editProfile =({img, firstName, lastName, sex, country, dateOfBirth }) =>
	
		 privatePut({
			url: `${baseURL}/edit-basic-info`,
			body: {
				img,
				firstName,
				lastName,
				sex,
				country,
				dateOfBirth,

			},
		});


export const getUserInfo = async () => {
	try {
		const userInfo = await privateGet({ url: `${baseURL}/info` });
		return userInfo.data;
	} catch (error) {
		return error;
	}
};

export const putTrainingInfo = async (trainingInfo) => privatePut({
			url: `${baseURL}/edit-training-info`,
			body: {
				goals: trainingInfo.goals,
				trainingLevel: trainingInfo.trainingLevel,
				weight: trainingInfo.weight,
				height: trainingInfo.height,
			},
		})