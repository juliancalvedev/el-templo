import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivatedLayout from '../layouts/PrivatedLayout/PrivatedLayout';
import PublicLayout from '../layouts/PublicLayout/PublicLayout';

import Login from '../pages/Login/Login';
import VerifiedEmail from '../pages/VerifiedEmail/VerifiedEmail';

import ForgottenPassword from '../pages/ForgottenPassword/ForgottenPassword';

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
							path='forgotten-password'
							element={<ForgottenPassword />}/>
						<Route
							path='verify-email'
							element={<VerifiedEmail />}/>
					</Route>
				)}
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</BrowserRouter>
	);
};


						
			
export default RouterApp;
