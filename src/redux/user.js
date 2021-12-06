import { getUserInfo } from '../services/user';

// ACTION TYPES
const GET_USER_INFO = 'GET_USER_INFO';
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
