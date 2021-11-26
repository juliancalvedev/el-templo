import React from 'react';
import './App.css';

import i18n from './i18n-lang-conf';


function App() {
		//Integrates i18n to the whole App.
	i18n.options.interpolation.defaultVariables = {
		companyName: 'El Templo',
	};
	return (
		<div className='App'>
		
			
		

		</div>
	);



	
}

export default App;
