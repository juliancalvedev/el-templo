import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import i18n from './i18n-lang-conf';
import TestingComponent from './i18n-lang-conf/languages/TestingComponent';

function App() {
	const dispatch = useDispatch();

	//Integrates i18n to the whole App.
	i18n.options.interpolation.defaultVariables = { companyName: 'El Templo' };

	return (
		<div
			className='App'
			style={{ height: '100vh', backgroundColor: 'black' }}
		>
			<TestingComponent />
		</div>
	);
}

export default App;
