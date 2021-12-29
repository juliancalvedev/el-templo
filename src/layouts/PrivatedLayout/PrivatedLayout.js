import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import { logoutAction } from '../../redux/auth';
import { getUserInfoAction } from '../../redux/user';
import { SHOW_NAVBAR } from '../../constants/paths';

const PrivatedLayout = () => {
	const dispatch = useDispatch();
	const { emailIsVerified, enabled, goals } = useSelector(
		(state) => state.user
	);
	const currentLocation = useLocation().pathname.substring(1);

	const onLogout = () => {
		dispatch(logoutAction());
	};

	const showNavbar = () => {
		if (emailIsVerified && enabled && goals?.length === 3) {
			if (
				SHOW_NAVBAR.some(
					(showingRoute) => showingRoute === currentLocation
				)
			) {
				return true;
			}
		} else {
			return false;
		}
	};

	useEffect(() => {
		dispatch(getUserInfoAction());
	}, []);

	return (
		<div className='col-12'>
			<div style={{ marginTop: '50px' }}>
				<Button onClick={onLogout} title='logout' />
			</div>
			<Outlet />
			{showNavbar() && <Navbar />}
		</div>
	);
};

export default PrivatedLayout;
