import { login, startPasswordRecovery } from '../services/auth';

// DEFAULT VALUE
const defaultValue = {
	token: null,
	error: false,
	enabled: false,
	loading: false,
	emailIsVerified: false,
	savedEmail: '',
};

// ACTION TYPES
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const ERROR = 'ERROR';
const START_PASSWORD_RECOVERY = 'START_PASSWORD_RECOVERY';
const SAVE_EMAIL = 'SAVE_EMAIL';

// REDUCER
// El reducer lo que hace es encontrar la accion que queremos realizar
// Y al encontrarla le devuelve los valores al STORE, quien maneja los estados de redux
export default function AuthReducer(state = defaultValue, { type, payload }) {
	switch (type) {
		case LOGIN:
			return { ...state, ...payload, error: false };
		case LOGOUT:
			return defaultValue;
		case ERROR:
			return { ...state, error: true };
		case START_PASSWORD_RECOVERY:
			return { ...state, ...payload, error: false };
		case SAVE_EMAIL:
			return { ...state, savedEmail: payload, error: false };
		default:
			return state;
	}
}

// ACTIONS
export const loginAction =
	({ email, password, callback }) =>
	async (dispatch) => {
		//llamada al back

		try {
			const response = await login({ email, password });
			const { data, problem } = response.data;
			if (problem) {
				dispatch({
					type: ERROR,
				});
			} else {
				dispatch({
					type: LOGIN,
					payload: data,
				});
				dispatch({
					type: SAVE_EMAIL,
					payload: email,
				});
				callback(); //Navigates to '/enabled-verified'.
			}
		} catch (error) {
			dispatch({
				type: ERROR,
			});
		}

		// El dispatch llama al reducer

		//dispatch de login si obtenemos el token

		//dispatch un error
	};

export const logoutAction = () => (dispatch) => {
	localStorage.clear();
	dispatch({
		type: LOGOUT,
	});
};

export const startPasswordRecoveryAction =
	({ email }) =>
	async (dispatch) => {
		//llamada al back

		try {
			const response = await startPasswordRecovery({ email });
			const { data, problem } = response.data;
			if (problem) {
				dispatch({
					type: ERROR,
				});
			} else {
				dispatch({
					type: START_PASSWORD_RECOVERY,
					payload: data,
				});
			}
		} catch (error) {
			dispatch({
				type: ERROR,
			});
		}

		// El dispatch llama al reducer

		//dispatch de startPasswordRecovery si obtenemos el token

		//dispatch un error
	};

//dispatch un error
