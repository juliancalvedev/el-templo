import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { changePassword } from '../../services/user';
import { useNavigate } from 'react-router';
import MainContainer from '../../components/MainContainer/MainContainer';

import './ChangeUserPassword.css';
import Input from '../../components/Input/Input';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';

const ChangeUserPassword = () => {
	const { t } = useTranslation();

	const navigate = useNavigate();

	const [currentPassword, setCurrentPassword] = useState('');

	const [newPassword, setNewPassword] = useState('');

	const [repeatPassword, setRepeatPassword] = useState('');

	const handleChangeCurrentPassword = (e) => {
		setCurrentPassword(e.target.value);
	};

	const handleNewPassword = (e) => {
		setNewPassword(e.target.value);
	};

	const handleRepeatPassword = (e) => {
		setRepeatPassword(e.target.value);
	};

	const handleSubmit = async ({ problem }) => {
		await changePassword({ currentPassword, newPassword });
		if (!problem) {
			navigate(-1, { replace: true });
		}
	};

	return (
		<MainContainer main-container--noXscroll>
			<Text text={t('user.changeUserPassword.title')} />

			<Input
				placeholder={t('user.changeUserPassword.currentPassword')}
				onChange={handleChangeCurrentPassword}
				type='password'
			/>
			<Input
				placeholder={t('user.changeUserPassword.newPassword')}
				onChange={handleNewPassword}
				type='password'
			/>
			<Input
				placeholder={t('user.changeUserPassword.repeatNewPassword')}
				onChange={handleRepeatPassword}
				type='password'
			/>
			<Button
				text={t('user.changeUserPassword.submitPassword')}
				disabled={
					!currentPassword ||
					newPassword !== repeatPassword ||
					!newPassword
				}
				onClick={handleSubmit}
			/>
			<h2>hola</h2>
		</MainContainer>
	);
};

export default ChangeUserPassword;
