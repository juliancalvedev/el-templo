import React, { useEffect, useState } from 'react';
import UsersTable from './UsersTable/UsersTable';
import { getUsers } from '../../../services/admin';

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

	console.log(users, 'pepe');

	return (
		<div>
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
				users={users}
			/>
		</div>
	);
};

export default UsersList;
