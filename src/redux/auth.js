import { login } from "../services/auth";

// DEFAULT VALUE
const defaultValue = {
    token: null,
    error: false,
    enabled: false,
    loading: false,
};

// ACTION TYPES
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const ERROR = 'ERROR';

// REDUCER
// El reducer lo que hace es encontrar la accion que queremos realizar
// Y al encontrarla le devuelve los valores al STORE, quien maneja los estados de redux
export default function AuthReducer(state = defaultValue, { type, payload }) {
    switch(type){
        case LOGIN: return {...state, ...payload, error: false };
        case LOGOUT: return defaultValue;
        case ERROR: return {...state, error: true}
        default: return state;
    }
}

// ACTIONS
export const loginAction = ({ email, password }) => async (dispatch) => {
    //llamada al back

    try {
        const response = await login({ email, password });
        const { data, problem } = response.data;
        if(data){
            dispatch({
                type: LOGIN,
                payload: response.data
            })
        } else {
            dispatch({
                type: ERROR,
            })
        }
    } catch( error ) {
        dispatch({
            type: ERROR,
        })
    }

    // El dispatch llama al reducer

    //dispatch de login si obtenemos el token

    //dispatch un error
}

export const logoutAction = () => dispatch => {
    localStorage.clear();
    dispatch({
        type: LOGOUT
    });
}