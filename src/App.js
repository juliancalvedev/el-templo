import React from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Input from './components/Input/Input';
=======
import { useDispatch } from 'react-redux';
import { loginAction } from './redux/auth';
>>>>>>> 0568d779a96f442e6796b0ae0ad031b03b5f9555

function App() {

	const dispatch= useDispatch();

	return (
		<div className='App'>
<<<<<<< HEAD
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
				
			</header>
=======
			<button onClick={() => dispatch(loginAction({email: 'test.templo@mailinator.com', password: 'pass12345'}))}>asd</button>
>>>>>>> 0568d779a96f442e6796b0ae0ad031b03b5f9555
		</div>
	);
}

export default App;
