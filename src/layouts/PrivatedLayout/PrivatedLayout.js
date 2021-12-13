import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import { logoutAction } from '../../redux/auth';
import { getUserInfoAction } from '../../redux/user';
import { getUserInfo } from '../../services/user';

const PrivatedLayout = () => {
	const dispatch = useDispatch();
	const onLogout = () => {
		dispatch(logoutAction());
	};

	useEffect(() => {
		dispatch(getUserInfoAction());
	}, []);
	return (
		<div>
			<Button onClick={onLogout} title='logout' />
			<Outlet />
			<Navbar />
		</div>
	);
};

export default PrivatedLayout;
