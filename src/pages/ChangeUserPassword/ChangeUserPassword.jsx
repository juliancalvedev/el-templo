import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import { changePassword } from '../../services/user';
import { useNavigate } from 'react-router';

import './ChangeUserPassword.css';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
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
		<div className='change-user-password-body'>
			<Title text={t('user.changeUserPassword.title')} />

			<Input
				placeholder={t('user.changeUserPassword.currentPassword')}
				handleChange={handleChangeCurrentPassword}
				type='password'
			/>
			<Input
				placeholder={t('user.changeUserPassword.newPassword')}
				handleChange={handleNewPassword}
				type='password'
			/>
			<Input
				placeholder={t('user.changeUserPassword.repeatNewPassword')}
				handleChange={handleRepeatPassword}
				type='password'
			/>
			<Button
				title={t('user.changeUserPassword.submitPassword')}
				disabled={
					!currentPassword ||
					newPassword !== repeatPassword ||
					!newPassword
				}
				onClick={handleSubmit}
			/>
		</div>
	);
};

export default ChangeUserPassword;
