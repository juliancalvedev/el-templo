import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import i18n from './i18n-lang-conf';

function App() {
	const dispatch = useDispatch();

	//Integrates i18n to the whole App.
	i18n.options.interpolation.defaultVariables = { companyName: 'El Templo' };

	return (
		<div className='App'>
			<button
				onClick={() =>
					dispatch(
						loginAction({
							email: 'test.templo@mailinator.com',
							password: 'pass12345',
						})
					)
				}
			>
				asd
			</button>
		</div>
	);
}

export default App;
