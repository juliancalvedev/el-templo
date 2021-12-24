import './Login.scss';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/auth';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';
import MainContainer from '../../components/MainContainer/MainContainer';


const Login = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const callback = () => navigate(`/${PATHS.ENABLED_VERIFIED}`);

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
	<MainContainer full>
		<div className='contain-login '>
			<img className='imagen' src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F20%252F2016%252F07%252Ftori-bowie-a-435.jpg&q=85' />
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
				<Button onClick={handleSubmit} title={t('auth.login.btnLogin')} />
			</form>
		</div>
		</MainContainer>	
	);
};

export default Login;
