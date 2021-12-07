import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivatedLayout from '../layouts/PrivatedLayout/PrivatedLayout';
import PublicLayout from '../layouts/PublicLayout/PublicLayout';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';

import Login from '../pages/Login/Login';
import VerifiedEmail from '../pages/VerifiedEmail/VerifiedEmail';
import ChangeUserPassword from '../pages/ChangeUserPassword/ChangeUserPassword';
import PasswordRecovery from '../pages/PasswordRecovery/PasswordRecovery';
import ForgottenPassword from '../pages/ForgottenPassword/ForgottenPassword';
import Landing from '../pages/Landing/Landing';
import EnabledVerified from '../pages/EnabledVerified/EnabledVerified';
import UsersList from '../pages/admin/UsersList/UsersList';
import TopBar from '../components/TopBar/TopBar';
import { ROLES } from '../constants/roles';

const RouterApp = () => {
	const { token } = useSelector((store) => store.auth);
	const { role } = useSelector((store) => store.user);

	const savedToken = localStorage.getItem('token');

	return (
		<BrowserRouter>
			<TopBar />
			<Routes>
				{savedToken ? (
					<Route path='/' element={<PrivatedLayout />}>
						{role === ROLES.ADMIN && (
							<Route path='/' element={<AdminLayout />}>
								<Route
									path='users-list'
									element={<UsersList />}
								/>
							</Route>
						)}
						<Route
							path='change-user-password'
							element={<ChangeUserPassword />}
						/>
					</Route>
				) : (
					<Route path='/' element={<PublicLayout />}>
						<Route index element={<Landing />} />
						<Route path='login' element={<Login />} />
						<Route
							path='password-recovery'
							element={<PasswordRecovery />}
						/>
						<Route
							path='forgotten-password'
							element={<ForgottenPassword />}
						/>
						<Route
							path='verify-email'
							element={<VerifiedEmail />}
						/>
						<Route
							path='enabled-verified'
							element={<EnabledVerified />}
						/>
					</Route>
				)}
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouterApp;
