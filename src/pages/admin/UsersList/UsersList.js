import {useEffect, useState} from 'react';
import UsersTable from './UsersTable/UsersTable';
import AdminBar from '../../../components/AdminBar/AdminBar';
import useFetch from '../../../hooks/useFetch';
import {getUsers} from '../../../services/admin';
import MainContainer from '../../../components/MainContainer/MainContainer';

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
		<MainContainer col='12' scroll navbar>
			<div style={{overflowX: 'scroll'}}>
				<UsersTable
					columns={[
						'_id',
						'email',
						'firstName',
						'lastName',
						'dateOfBirth',
						'sex',
						'country',
						'enabled',
						'level',
						'endEnabledDate',
						'startEnabledDate',
						'options',
					]}
					users={data?.users}
				/>
			</div>
		</MainContainer>
	);
};

export default UsersList;
