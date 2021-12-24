import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import { logoutAction } from '../../redux/auth';
import { getUserInfoAction } from '../../redux/user';

const PrivatedLayout = () => {
	const dispatch = useDispatch();
	const onLogout = () => {
		dispatch(logoutAction());
	};

	useEffect(() => {
		dispatch(getUserInfoAction());
	}, []);
	return (
		<div className='col-12'>
			<Button onClick={onLogout} title='logout' />
			<Outlet />
			<Navbar />
		</div>
	);
};

export default PrivatedLayout;
