import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivatedLayout from '../layouts/PrivatedLayout/PrivatedLayout';
import PublicLayout from '../layouts/PublicLayout/PublicLayout';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';

import { ROLES } from '../constants/roles';
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
import { PATHS } from '../constants/paths';
import Help from '../pages/Help/Help';

const RouterApp = () => {
	const { token } = useSelector((store) => store.auth);
	const { role } = useSelector((store) => store.user);

	const savedToken = localStorage.getItem('token');

	return (
		<BrowserRouter>
			<TopBar />
			<Routes>
				{savedToken ? (
					<Route path={PATHS.BASE_URL} element={<PrivatedLayout />}>
						{role === ROLES.ADMIN && (
							<Route
								path={PATHS.BASE_URL}
								element={<AdminLayout />}
							>
								<Route
									path={PATHS.USERS_LIST}
									element={<UsersList />}
								/>
							</Route>
						)}
						<Route
							path={PATHS.CHANGE_USER_PASSWORD}
							element={<ChangeUserPassword />}
						/>
						<Route path='help' element={<Help />} />
					</Route>
				) : (
					<Route path={PATHS.BASE_URL} element={<PublicLayout />}>
						<Route index element={<Landing />} />
						<Route path={PATHS.LOGIN} element={<Login />} />
						<Route
							path={PATHS.PASSWORD_RECOVERY}
							element={<PasswordRecovery />}
						/>
						<Route
							path={PATHS.FORGOTTEN_PASSWORD}
							element={<ForgottenPassword />}
						/>
						<Route
							path={PATHS.VERIFY_EMAIL}
							element={<VerifiedEmail />}
						/>
						<Route
							path={PATHS.ENABLED_VERIFIED}
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
