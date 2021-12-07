import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/auth';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const callback = () => navigate('/enabled-verified');

	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = () => {
		dispatch(loginAction({ email, password, callback }));
	};
	return (
		<div className='container d-flex justify-content-center col '>
			<form className='login'>
				<Title text={t('auth.login.title')} />

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

				<Link to='/forgotten-password'>{t('auth.login.recovery')}</Link>
				<Button
					onClick={handleSubmit}
					title={t('auth.login.btnLogin')}
				/>
			</form>
		</div>
	);
};

export default Login;
