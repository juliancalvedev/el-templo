import React from 'react';
import { privateGet } from '../../../axios/privateInstance';

const Admin = () => {
	const baseURL = 'https://el-templo.herokuapp.com/api';

	const users = async () => {
		const response = await privateGet(
			`https://el-templo.herokuapp.com/api/admin/users`
		);

		const data = response.data;
		return data;
	};

	console.log(users, 'Log de Users List');

	return (
		<div>
			<h1>Lista de Usuarios</h1>
		</div>
	);
};

export default Admin;
