import { getUserInfo } from '../services/user';

// ACTION TYPES
const GET_USER_INFO = 'GET_USER_INFO';
const SET_TRAINING_INFO = 'SET_TRAINING_INFO';
const ERROR = 'ERROR';

const defaultValue = {
	_id: null,
	email: null,
	firstName: null,
	lastName: null,
	dateOfBirth: null,
	sex: null,
	country: null,
	img: null,
	role: null,
	endEnabledDate: null,
	startEnabledDate: null,
	trainingInfo: {
		goals: ['', '', ''],
		trainingLevel: 0,
		weight: 0,
		height: 0,
	},
};

// REDUCER
// El reducer lo que hace es encontrar la accion que queremos realizar
// Y al encontrarla le devuelve los valores al STORE, quien maneja los estados de redux

export default function UserReducer(state = defaultValue, { type, payload }) {
	switch (type) {
		case GET_USER_INFO:
			return { ...state, ...payload, error: false };
		case ERROR:
			return { ...state, error: true };
		case SET_TRAINING_INFO:
			const { trainingInfo } = state;
			return {
				...state,
				trainingInfo: { ...trainingInfo, goals: payload },
				error: false,
			};
		default:
			return state;
	}
}

export const getUserInfoAction = () => async (dispatch) => {
	try {
		const { data, problem } = await getUserInfo();
		if (problem) {
			dispatch({
				type: ERROR,
			});
		} else {
			dispatch({
				type: GET_USER_INFO,
				payload: data?.user,
			});
		}
	} catch (error) {
		dispatch({
			type: ERROR,
		});
	}
};

export const addTrainingInfo = (data) => async (dispatch) => {
	console.log(data.goals);
	dispatch({
		type: SET_TRAINING_INFO,
		payload: data.goals,
	});
};
