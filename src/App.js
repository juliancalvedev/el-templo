import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import i18n from './i18n-lang-conf';

function App() {
		//Integrates i18n to the whole App.
	i18n.options.interpolation.defaultVariables = {
		companyName: 'El Templo',
	};
	return (
		<div className='App'>
		
			
		<Login/>

		</div>
	);



	
}

export default App;
