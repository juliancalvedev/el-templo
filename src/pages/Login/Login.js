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
import Eye from './Eye';

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
	const handleShow=()=>{
		
	}
	return (
		<MainContainer full>
			<div className='login-container col-12 '>
				<div className='col-11 d-flex flex-column '>
					<div className='welcome  pt-3 text-light col-12  '>
						<Title type='title1' text={t('auth.login.title')} />
					</div>
					<div className='continue col-8  '>
						<Paragraph type='light' text={t('auth.login.subtitle')} />
					</div>

					<div className=' login col-12'>
						<form>
							<Input
								className='input col-12 mb-2 py-2 '
								value={email}
								handleChange={handleChangeEmail}
								type='email'
								placeholder={t('auth.login.emailPlaceholder')}
							/>

							<Input
								className='input col-12 mb-3 py-2'
								value={password}
								handleChange={handleChangePassword}
								type='password'
								placeholder={t('auth.login.passwordPlaceholder')}
							/>
							<Eye handleChange={handleShow}/>
							

							<Button
								onClick={handleSubmit}
								title={t('auth.login.btnLogin')}
							/>
							<div className='col-12 d-flex justify-content-end  '>
								<Link
									className='text-light text-decoration-none recovery'
									to='/forgotten-password'
								>
									{t('auth.login.recovery')}
								</Link>
							</div>
						</form>
					</div>
					<div className='d-flex justify-content-center col-12   '>
						<Link
							className='text-light text-decoration-none register '
							to='/register'
						>
							{t('auth.login.register')}
						</Link>
					</div>
				</div>
			</div>
		</MainContainer>
	);
};

export default Login;
