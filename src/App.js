import React from 'react';
import './App.css';

import i18n from './i18n-lang-conf';
import RouterApp from './Router/RouterApp';
import PasswordRecovery from './pages/PasswordRecovery/PasswordRecovery';

function App() {
	//Integrates i18n to the whole App.
	i18n.options.interpolation.defaultVariables = {
		companyName: 'El Templo',
	};
	return (
		<div className='App'>
			<RouterApp />
			<PasswordRecovery />
		</div>
	);
}

export default App;
