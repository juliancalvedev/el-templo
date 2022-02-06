import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import { getUserInfoAction } from '../../redux/user';
import { SHOW_NAVBAR } from '../../constants/paths';
import Exercise from '../../components/Exercise/Exercise';
import MainContainer from '../../components/MainContainer/MainContainer';

const PrivatedLayout = () => {
	const dispatch = useDispatch();
	const { emailIsVerified, enabled, goals } = useSelector(
		(state) => state.user
	);
	const currentLocation = useLocation().pathname.substring(1);

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
		<MainContainer back bg='1' color='2' col='12'>
			<Exercise />
		</MainContainer>

		// <div className='col-12'>
		// 	<Outlet />
		// 	{showNavbar() && <Navbar />}
		// </div>
	);
};

export default PrivatedLayout;
