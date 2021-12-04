import React from 'react';

import { randomHexadecimal as randomKey } from '../../../../utils/mathmaticalUtils';

const UsersTable = ({ columns = [], users = [] }) => {
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
