import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';

const PrivatedLayout = () => {
	return (
		<div>
			<Navbar />

			<Outlet />
		</div>
	);
};

export default PrivatedLayout;
