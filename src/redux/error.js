const defaultValue = {
    isError: false,
    message: '',
    code: null
};

const NEW_ERROR = 'NEW_ERROR';
const CLEAN_ERROR = 'CLEAN_ERROR';

export default function ErrorReducer( state = defaultValue, { type, payload }) {

    switch(type){
        case NEW_ERROR: return {...state, isError: true, message: payload.message, code: payload.code };
        case CLEAN_ERROR: return {...state, ...defaultValue}
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