import { useState } from 'react';
import './PasswordRecovery.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router';
import { onPasswordRecovery } from '../../services/auth';
import { useTranslation } from 'react-i18next';
import Title from '../../components/Title/Title';
import { LanguageSelector } from '../../components/LanguageSelector/LanguageSelector';

const PasswordRecoveryForm = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const [password, setPassword] = useState('');

	const [repeatPassword, setRepeatPassword] = useState('');

	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleChangeRepeatPassword = (e) => {
		setRepeatPassword(e.target.value);
	};

	const submitChangePassword = () => {
		if (password.length > 6) {
			if (password === repeatPassword) {
				const sendPassword = async (password) => {
					try {
						onPasswordRecovery({ password });
					} catch (error) {
						return error;
					}
				};

				sendPassword(password);

				navigate('/login', { replace: true });
			}
		}
	};

	return (
		<div>
			<Title text={t('auth.passwordRecoveryForm.title')} />

			<Input
				placeholder={t('auth.passwordRecoveryForm.newPassword')}
				type='password'
				value={password}
				handleChange={handleChangePassword}
			/>
			<Input
				placeholder={t('auth.passwordRecoveryForm.repeatNewPassword')}
				type='password'
				value={repeatPassword}
				handleChange={handleChangeRepeatPassword}
			/>

			<Button
				title={t('auth.passwordRecoveryForm.btnUpdatePassword')}
				onClick={submitChangePassword}
			/>

			<LanguageSelector />
		</div>
	);
};

export default PasswordRecoveryForm;
