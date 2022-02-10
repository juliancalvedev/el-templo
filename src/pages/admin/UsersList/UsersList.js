import { useEffect, useState } from 'react';
import UsersTable from './UsersTable/UsersTable';
import { getUsers } from '../../../services/admin';
import MainContainer from '../../../components/MainContainer/MainContainer';

const UsersList = () => {
	const [users, setUsers] = useState([]);

	const onGetUsers = async () => {
		const { data, problem } = await getUsers();

		if (problem) {
			alert('PROBLEM DETECTED IN GET USERS');
		} else {
			setUsers(data.users);
		}
	};

	useEffect(() => {
		onGetUsers();
	}, []);

	return (
		<MainContainer col='12' scroll>
			<div style={{ overflowX: 'scroll' }}>
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
					users={users}
				/>
			</div>
		</MainContainer>
	);
};

export default UsersList;
