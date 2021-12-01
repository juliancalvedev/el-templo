import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivatedLayout from '../layouts/PrivatedLayout/PrivatedLayout';
import PublicLayout from '../layouts/PublicLayout/PublicLayout';

import Login from '../pages/Login/Login';

import Forgottenpassword from '../pages/Forgottenpassword/Forgottenpassword';

const RouterApp = () => {

    const { token } = useSelector( store => store.auth );

    return (
			<BrowserRouter>
				<Routes>
					{token ? (
						<Route path='/' element={<PrivatedLayout />}></Route>
					) : (
						<Route path='/' element={<PublicLayout />}>
							<Route path='login' element={<Login />}/>
                            <Route path='forgottenpassword' element={<Forgottenpassword/>} />
							
						</Route>
					)}
					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
			</BrowserRouter>
		);
}

export default RouterApp
