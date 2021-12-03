import React, { useEffect, useState } from 'react';
import { privateGet } from '../../../../axios/privateInstance';
import { randomHexadecimal as randomKey } from '../../../../utils/mathmaticalUtils';

const UsersTable = ({ columns = [] }) => {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const response = await privateGet({
			url: `/admin/users`,
		});
		const users = response.data.data.users;
		setUsers(users);
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div>
			<table className='table'>
				<thead>
					<tr>
						{columns?.map((column) => (
							<th scope='col' key={randomKey()}>
								{column}
							</th>
						))}
					</tr>
				</thead>

				<tbody>
					{users?.map((user) => (
						<tr scope='col' key={randomKey()}>
							{columns?.map((c) => (
								<td key={randomKey()}>{user[c]}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default UsersTable;
