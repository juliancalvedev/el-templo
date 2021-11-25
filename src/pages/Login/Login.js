import React from 'react';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { loginAction } from '../../redux/auth';

const Login = () => {
	const dispatch = useDispatch();
	// const history = useHistory();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = () => {
		dispatch(loginAction({ email, password }));
	};
	
	return (
		<div className='container d-flex justify-content-center col '>
			<form className='login'>
				<h1 className='login__form d-flex justify-content-center'>
					<Title text='Login' />
				</h1>
				<Input
					value={email}
					onClick={()=>dispatch(loginAction)}
					// onChange={handleChangeEmail}
					type='email'
					placeholder='Email@email.com'
				/>
				<Input
					value={password}
					onChange={handleChangePassword}
					type='password'
					placeholder='Contraseña'
				/>
				<Button onClick={handleSubmit} title='iniciar sesion' />
			</form>
		</div>
	);
};

export default Login;
