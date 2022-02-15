import { useEffect, useState } from 'react';
import UsersTable from './UsersTable/UsersTable';
import AdminBar from '../../../components/AdminBar/AdminBar';
import useFetch from '../../../hooks/useFetch';
import { getUsers } from '../../../services/admin';

const UsersList = () => {
	const [test, setTest] = useState(0);

	const [data, error, apiCall] = useFetch({
		service: () => getUsers(),
		globalLoader: true,
	});
	useEffect(() => {
		setTest(test + 1);
		apiCall();
	}, []);

	return (
		<div>
			<AdminBar />
			<UsersTable
				columns={[
					'firstName',
					'lastName',
					'email',
					'sex',
					'country',
					'enabled',
					'options',
				]}
				users={data?.users}
			/>
		</div>
	);
};

export default UsersList;
