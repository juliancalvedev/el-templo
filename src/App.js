import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

import i18n from './i18n-lang-conf';
import { checkLoggedUserAction } from './redux/auth';
import RouterApp from './Router/RouterApp';

function App() {
	//Integrates i18n to the whole App.
	i18n.options.interpolation.defaultVariables = {
		companyName: 'El Templo',
	};

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(checkLoggedUserAction());
	}, []);
	return (
		<div className='App'>
			<RouterApp />
		</div>
	);
}

export default App;
