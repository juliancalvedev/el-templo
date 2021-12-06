import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AuthReducer from './auth';
import UserReducer from './user';

const rootReducer = combineReducers({
	auth: AuthReducer,
	user: UserReducer,
	//Aca hay que agregar los otros reducers que se requieran
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function genereteStore() {
	const store = createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(thunk))
	);
	return store;
}
