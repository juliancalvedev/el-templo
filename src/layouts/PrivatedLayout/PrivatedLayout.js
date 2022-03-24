import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Outlet} from 'react-router';
import useFetch from '../../hooks/useFetch';
import {getUserInfoAction} from '../../redux/user';
import { getUserInfo } from '../../services/user';

const PrivatedLayout = () => {
	const dispatch = useDispatch();
	const [data, error, apiCall] = useFetch({
		service: () => getUserInfo(),
		globalLoader: true,
		callNow: true,
		callback: () => {
			console.log(data.user);
			dispatch(getUserInfoAction(data?.user));
		}
	})

	return (
		<div className='col-12'>
			<Outlet />
		</div>
	);
};

export default PrivatedLayout;
