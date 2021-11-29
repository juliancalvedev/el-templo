import React from 'react';
import './App.css';

import i18n from './i18n-lang-conf';
import VerifiedEmail from './pages/VerifiedEmail/VerifiedEmail';
import RouterApp from './Router/RouterApp';

function App() {
	//Integrates i18n to the whole App.
	i18n.options.interpolation.defaultVariables = {
		companyName: 'El Templo',
	};
	return (
		<div className='App'>
			<RouterApp />
			<VerifiedEmail />
		</div>
	);
}

export default App;
