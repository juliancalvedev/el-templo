import React, { useState, useEffect } from 'react';
import './ChangeUserPassword.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { axiosInstance } from '../../axios/axiosInstance';
import { useSelector } from 'react-redux';
import { privatePut } from '../../axios/privateInstance';
import { changePassword } from '../../services/user';

const ChangeUserPassword = () => {
	const [currentPassword, setCurrentPassword] = useState('');

	const [newPassword, setNewPassword] = useState('');

	const [repeatPassword, setRepeatPassword] = useState('');

	const handleChangeCurrentPassword = (e) => {
		setCurrentPassword(e.target.value);
		console.log(currentPassword);
	};

	const handleNewPassword = (e) => {
		setNewPassword(e.target.value);
		console.log(newPassword);
	};

	const handleRepeatPassword = (e) => {
		setRepeatPassword(e.target.value);
		console.log(repeatPassword);
	};

	const sendChangeUserPassword = ({ newPassword, repeatPassword }) => {
		changePassword({ newPassword, repeatPassword });
	};

	return (
		<div className='change-user-password-body'>
			<nav className='navbar'></nav>

			<Input
				placeholder='Current Password'
				handleChange={handleChangeCurrentPassword}
			/>
			<Input placeholder='New Password' handleChange={handleNewPassword} />
			<Input
				placeholder='Repeat New Password'
				handleChange={handleRepeatPassword}
			/>
			<Button
				title='Change Password'
				disabled={
					!currentPassword ||
					newPassword !== repeatPassword ||
					!newPassword
				}
				onClick={sendChangeUserPassword}
			/>
		</div>
	);
};

export default ChangeUserPassword;
