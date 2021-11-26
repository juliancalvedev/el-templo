import React from 'react';
import './App.css';
import VerifiedEmail from './components/VerifiedEmail/VerifiedEmail';

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
			<h1 style={{ placeSelf: 'center' }}>
				<VerifiedEmail />
			</h1>
		</div>
	);
}

export default App;
