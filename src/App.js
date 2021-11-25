import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { loginAction } from './redux/auth';
import EmailVerification from './EmailVerification/EmailVerification';

function App() {
	const dispatch = useDispatch();

	return (
		<div className='App'>
			<button
				onClick={() =>
					dispatch(
						loginAction({
							email: 'test.templo@mailinator.com',
							password: 'pass12345',
						})
					)
				}
			>
				asd
			</button>

			<EmailVerification />
		</div>
	);
}

export default App;
