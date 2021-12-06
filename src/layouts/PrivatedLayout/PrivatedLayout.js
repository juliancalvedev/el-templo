import React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router';
import Button from '../../components/Button/Button';
import { logoutAction } from '../../redux/auth';
import NavBar from '../../components/Navbar/Navbar';

const PrivatedLayout = () => {
	const dispatch = useDispatch();
	const onLogout = () => {
		dispatch(logoutAction());
	};

	return (
		<div>
			<Button onClick={onLogout} title='logout' />
			<NavBar />
			<Outlet />
		</div>
	);
};

export default PrivatedLayout;
