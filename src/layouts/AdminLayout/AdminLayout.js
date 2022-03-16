import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { SHOW_NAVBAR } from '../../constants/paths';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import AdminBar from '../../components/AdminBar/AdminBar';

const AdminLayout = () => {
	const currentLocation = useLocation().pathname.substring(1);

	// Esta función, es por si se quiere el NavBar en algunas páges sí y en otras no, dentro del AdminLayout.
	// const showNavbar = () => {
	// 	if (
	// 		SHOW_NAVBAR.some((showingRoute) => showingRoute === currentLocation)
	// 	) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// };
console.log('ADMIN LAY OUT')
	return (
		<div className='col-12'>
			<Outlet />
		</div>
	);
};

export default AdminLayout;
