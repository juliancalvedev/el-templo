import { getUserInfo } from '../services/user';

// ACTION TYPES
const GET_USER_INFO = 'GET_USER_INFO';
const SET_GOALS_TRAINING_INFO = 'SET_GOALS_TRAINING_INFO';
const SET_LEVEL_TRAINING_INFO = 'SET_LEVEL_TRAINING_INFO';
const ERROR = 'ERROR';

const defaultValue = {
	_id: null,
	email: null,
	firstName: null,
	lastName: null,
	level: null,
	experience: 0,
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
		case SET_GOALS_TRAINING_INFO:
			return {
				...state,
				trainingInfo: { ...state.trainingInfo, goals: payload },
				error: false,
			};
		case SET_LEVEL_TRAINING_INFO:
			return {
				...state,
				trainingInfo: { ...state.trainingInfo, trainingLevel: payload },
				error: false,
			};
		default:
			return state;
	}
}

export const getUserInfoAction = (data) => async (dispatch) => {
	dispatch({
		type: GET_USER_INFO,
		payload: data,
	});
	
};

export const addGoalsToTrainingInfo = (data) => (dispatch) => {
	dispatch({
		type: SET_GOALS_TRAINING_INFO,
		payload: data.goals,
	});
};
export const addLevelToTrainingInfo = (data) => (dispatch) => {
	dispatch({
		type: SET_LEVEL_TRAINING_INFO,
		payload: data.trainingLevel,
	});
};
