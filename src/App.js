import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { loginAction } from './redux/auth';
import {LanguageSelector, languageSelector} from './components/LanguageSelector/LanguageSelector';


import i18n from './i18n-lang-conf';
import RouterApp from './Router/RouterApp';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';


function App() {
		//Integrates i18n to the whole App.
	i18n.options.interpolation.defaultVariables = {
		companyName: 'El Templo',
	};
	return (
		<div className='App'>
		
			{/* <Login/>
			<LanguageSelector/>
		
			<RouterApp /> */}
			<Register/>

		</div>
	);



	
}

export default App;
