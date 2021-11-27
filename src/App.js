import React from 'react';
import './App.css';

import i18n from './i18n-lang-conf';
import RouterApp from './Router/RouterApp';

function App() {
	//Integrates i18n to the whole App.
	i18n.options.interpolation.defaultVariables = {
		companyName: 'El Templo',
	};
	return (
		<div className='App' style={{ height: '100vh', background: 'black' }}>
			<RouterApp />
		</div>
	);
}

export default App;
