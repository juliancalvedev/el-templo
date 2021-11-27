import React from 'react';
import './App.css';
import VerifiedEmail from './components/VerifiedEmail/VerifiedEmail';
import { LanguageSelector } from './components/LanguageSelector/LanguageSelector'

import i18n from './i18n-lang-conf';

function App() {
	//Integrates i18n to the whole App.
	i18n.options.interpolation.defaultVariables = {
		companyName: 'El Templo',
	};
	return (
		<div
			className='App'
			style={{ height: '100vh', background: 'black', color: 'wheat' }}
		>
			<VerifiedEmail />

			<LanguageSelector />

		</div>
	);
}

export default App;
