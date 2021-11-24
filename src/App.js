import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { loginAction } from './redux/auth';

function App() {
	const dispatch = useDispatch();

	return (
		<div
			className='App'
			style={{ backgroundColor: 'rgb(22,22,22)', height: '100vh' }}
		>
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
		</div>
	);
}

export default App;
