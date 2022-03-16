import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Outlet} from 'react-router';
import {getUserInfoAction} from '../../redux/user';

const PrivatedLayout = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserInfoAction());
	}, []);
	return (
		<div className='col-12'>
			<Outlet />
		</div>
	);
};

export default PrivatedLayout;
