import React, { useState, useEffect } from 'react';
import './ChangeUserPassword.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { axiosInstance } from '../../axios/axiosInstance';

const ChangeUserPassword = () => {
	const [currentPassword, setCurrentPassword] = useState('');

	const [newPassword, setNewPassword] = useState('');

	const [repeatPassword, setRepeatPassword] = useState('');

	const getUserInfo = async () => {
		try {
			const data = await axiosInstance.get('/user/info');
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUserInfo();
	}, []);

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
			<Button title='Change Password' />
		</div>
	);
};

export default ChangeUserPassword;
