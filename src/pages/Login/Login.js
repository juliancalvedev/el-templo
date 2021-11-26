import React from 'react';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { loginAction } from '../../redux/auth';
import {useTranslation} from 'react-i18next';

const Login = () => {
	const {t}=useTranslation();
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
					<Title text={t('auth.login.title')} />
				</h1>
				<Input
					value={email}
					handleChange={handleChangeEmail}
					type='email'
					placeholder={t('auth.login.emailPlaceholder')}
				/>
				<Input
					value={password}
					handleChange={handleChangePassword}
					type='password'
					placeholder={t('auth.login.passwordPlaceholder')}
				/>
				<p>{t('auth.login.recovery')}</p>
				<Button onClick={handleSubmit} title={t('auth.login.btnLogin')} />
			</form>
		</div>
	);
};

export default Login;
