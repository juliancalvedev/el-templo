const defaultValue = {
    isError: false,
    message: '',
    code: null,
    loading: false
};

const NEW_ERROR = 'NEW_ERROR';
const CLEAN_ERROR = 'CLEAN_ERROR';
const LOADING = 'LOADING';

export default function ApiReducer( state = defaultValue, { type, payload }) {

    switch(type){
        case NEW_ERROR: return {...state, isError: true, message: payload.message, code: payload.code, loading: false };
        case LOADING: return {...state, isError: false, loading: true };
        case CLEAN_ERROR: return {...state, ...defaultValue};
        default: return state;
    }
};

export const setErrorAction = error => dispatch => {

    dispatch({
        type: NEW_ERROR,
        payload: {
            message: error?.message,
            code: error?.code
        }
    })
}

export const cleanErrorAction = error => dispatch => {

    dispatch({
        type: CLEAN_ERROR
    })
}

export const loadingAction = () => dispatch => {
    dispatch({
        type: LOADING
    })
}