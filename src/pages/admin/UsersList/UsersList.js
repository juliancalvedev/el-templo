import React from 'react';
import UsersTable from './UsersTable/UsersTable';

const UsersList = () => {
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
			/>
		</div>
	);
};

export default UsersList;
