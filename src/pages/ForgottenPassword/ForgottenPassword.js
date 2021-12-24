import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startPasswordRecoveryAction } from '../../redux/auth';
import { useTranslation } from 'react-i18next';
import MainContainer from '../../components/MainContainer/MainContainer';

const ForgottenPassword = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');

	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = () => {
		dispatch(startPasswordRecoveryAction({ email }));
	};
	return (
		<MainContainer>
			<form className=''>
				<Title text={t('auth.forgotPassword1.title')} />

				<Input
					value={email}
					handleChange={handleChangeEmail}
					type='email'
					placeholder={t('auth.forgotPassword1.emailPlaceholder')}
				/>
				<Button
					disabled={!email}
					onClick={handleSubmit}
					title={t('auth.forgotPassword1.btnAccept')}
				/>
			</form>
		</MainContainer>
	);
};

export default ForgottenPassword;
