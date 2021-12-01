<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> 4dcd62998c4ada6537376d9634337fa3c0bb6854
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivatedLayout from '../layouts/PrivatedLayout/PrivatedLayout';
import PublicLayout from '../layouts/PublicLayout/PublicLayout';
import Login from '../pages/Login/Login';
<<<<<<< HEAD
import PasswordRecovery from '../pages/PasswordRecovery/PasswordRecovery';
=======
import VerifiedEmail from '../pages/VerifiedEmail/VerifiedEmail';
>>>>>>> 4dcd62998c4ada6537376d9634337fa3c0bb6854

const RouterApp = () => {
	const { token } = useSelector((store) => store.auth);

	return (
		<BrowserRouter>
			<Routes>
				{token ? (
					<Route path='/' element={<PrivatedLayout />}></Route>
				) : (
					<Route path='/' element={<PublicLayout />}>
						<Route path='login' element={<Login />} />
						<Route
<<<<<<< HEAD
							path='password-recovery'
							element={<PasswordRecovery />}
=======
							path='verify-email'
							element={<VerifiedEmail />}
>>>>>>> 4dcd62998c4ada6537376d9634337fa3c0bb6854
						/>
					</Route>
				)}
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouterApp;
