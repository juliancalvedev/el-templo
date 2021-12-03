import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import { changePassword } from '../../services/user';
import { LanguageSelector } from '../../components/LanguageSelector/LanguageSelector';

import './ChangeUserPassword.css';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';

const ChangeUserPassword = () => {
	const { t } = useTranslation();

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

	const handleSubmit = () => {
		changePassword({ currentPassword, newPassword });
	};

	return (
		<div className='change-user-password-body'>
			<nav className='navbar'></nav>

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
			<LanguageSelector />
		</div>
	);
};

export default ChangeUserPassword;
