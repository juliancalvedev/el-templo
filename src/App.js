import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { loginAction } from './redux/auth';
import PasswordRecovery from './components/PasswordRecovery/PasswordRecovery';

function App() {
	const dispatch = useDispatch();
	return (
		<div className='App'>
			<PasswordRecovery />
		</div>
	);
}

export default App;
