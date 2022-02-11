import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { SHOW_NAVBAR } from '../../constants/paths';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const AdminLayout = () => {
	const currentLocation = useLocation().pathname.substring(1);

	const showNavbar = () => {
		if (
			SHOW_NAVBAR.some((showingRoute) => showingRoute === currentLocation)
		) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<div className='col-12'>
			<Outlet />
			{showNavbar() && <Navbar />}
		</div>
	);
};

export default AdminLayout;
