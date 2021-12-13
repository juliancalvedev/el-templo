import React, { useEffect } from 'react';
import Button from '../Button/Button';
import './LogOutButton.css';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../redux/auth';
import { getUserInfoAction } from '../../redux/user';

const LogOutButton = () => {
	const dispatch = useDispatch();
	const onLogOut = () => {
		dispatch(logoutAction);
	};
	useEffect(() => {
		dispatch(getUserInfoAction());
	}, []);
	return (
		<div>
			<Button onClick={onLogOut} title='Logout' />
		</div>
	);
};

export default LogOutButton;
