import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router';
import Button from '../../components/Button/Button';
import { logoutAction } from '../../redux/auth';
import NavBar from '../../components/Navbar/Navbar';
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
			<Outlet />
			<NavBar />
			<Button onClick={onLogout} title='logout' />
		</div>
	);
};

export default PrivatedLayout;
