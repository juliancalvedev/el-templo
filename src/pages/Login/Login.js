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
import Paragraph from '../../components/Paragraph/Paragraph';


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
			<div className='login-container col-12 '>
			
				
				<div className='Welcome'>
					<Title  text={t('auth.login.title')} />
				</div>
				<div className='contnue'>
					<Paragraph  text={t('auth.login.subtitle')} />
				</div>

				<div className='login'>
					<form >
						<Input
							className='input'
							value={email}
							handleChange={handleChangeEmail}
							type='email'
							placeholder={t('auth.login.emailPlaceholder')}
						/>
						<Input
							className='input'
							value={password}
							handleChange={handleChangePassword}
							type='password'
							placeholder={t('auth.login.passwordPlaceholder')}
						/>
						<Button
							onClick={handleSubmit}
							title={t('auth.login.btnLogin')}
						/>
						<Link className='recovery' to='/forgotten-password'>
							{t('auth.login.recovery')}
						</Link>
					</form>
				</div>
				<div className='register'>
					<Link  to='/register'>
						{t('auth.login.register')}
					</Link>
				</div>
			</div>
		</MainContainer>
	);
};

export default Login;
