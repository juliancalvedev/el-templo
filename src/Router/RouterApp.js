import {useSelector} from 'react-redux';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import PrivatedLayout from '../layouts/PrivatedLayout/PrivatedLayout';
import PublicLayout from '../layouts/PublicLayout/PublicLayout';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';

import {ROLES} from '../constants/roles';
import Login from '../pages/Login/Login';
import VerifiedEmail from '../pages/VerifiedEmail/VerifiedEmail';
import ChangeUserPassword from '../pages/ChangeUserPassword/ChangeUserPassword';
import PasswordRecovery from '../pages/PasswordRecovery/PasswordRecovery';
import ForgottenPassword from '../pages/ForgottenPassword/ForgottenPassword';
import Register from '../pages/Register/Register';
import Landing from '../pages/Landing/Landing';
import EnabledVerified from '../pages/EnabledVerified/EnabledVerified';

import UsersList from '../pages/admin/UsersList/UsersList';
import Help from '../pages/Help/Help';
import {PATHS} from '../constants/paths';
import MyProfile from '../pages/MyProfile/MyProfile';
import Welcome from '../pages/welcome/Welcome/Welcome';
import EmailRegisterSended from '../pages/EmailRegisterSended/EmailRegisterSended';
import MainGoals from '../pages/welcome/MainGoals/MainGoals';
import TrainingLevel from '../pages/welcome/TrainingLevel/TrainningLevel';
import WeightHeight from '../pages/welcome/WeightHeight/WeightHeight';
import Contact from '../pages/Contact/Contact';
import Dashboard from '../pages/Dashboard/Dashboard';

import Nivelation from '../pages/Nivelation/Nivelation';
import {AdminUserInfo} from '../pages/admin/UsersList/AdminUserInfo/AdminUserInfo';
import Admin from '../pages/admin/Admin';
import AdminExercises from '../pages/admin/AdminExercises/AdminExercises';
import AdminTags from '../pages/admin/AdminTags/AdminTags';

const RouterApp = () => {
	const {token} = useSelector((store) => store.auth);
	const {role, goals, level} = useSelector((store) => store.user);

	const savedToken = localStorage.getItem('token');

	return (
		<BrowserRouter>
			<Routes>
				{savedToken ? (
					<Route path={PATHS.BASE_URL} element={<PrivatedLayout />}>
						{goals?.length === 0 && (
							<Route>
								<Route
									path={PATHS.BASE_URL}
									element={<Welcome />}
								/>
								<Route
									path={PATHS.MAIN_GOALS}
									element={<MainGoals />}
								/>
								<Route
									path={PATHS.TRAINING_LEVEL}
									element={<TrainingLevel />}
								/>
								<Route
									path={PATHS.WEIGHT_HEIGHT}
									element={<WeightHeight />}
								/>
							</Route>
						)}

						{role === ROLES.ADMIN && (
							<Route>
								<Route
									path={PATHS.BASE_URL}
									index
									element={<Admin />}
								/>

								<Route
									path={PATHS.ADMIN_USERS_LIST}
									element={<UsersList />}
								/>
								<Route
									path={PATHS.ADMIN_USER_INFO}
									element={<AdminUserInfo />}
								/>
								<Route
									path={PATHS.ADMIN_EXERCISES}
									element={<AdminExercises />}
								/>
								<Route
									path={PATHS.ADMIN_TAGS}
									element={<AdminTags />}
								/>
							</Route>
						)}

						{level < 1 && (
							<Route
								path={PATHS.NIVELATION}
								element={<Nivelation />}
							/>
						)}
						<Route
							path={
								role !== ROLES.ADMIN
									? PATHS.BASE_URL
									: PATHS.DASHBOARD
							}
							element={<Dashboard />}
						/>

						<Route
							path={PATHS.MY_PROFILE}
							element={<MyProfile />}
						/>
						<Route
							path={PATHS.CHANGE_USER_PASSWORD}
							element={<ChangeUserPassword />}
						/>
						<Route path={PATHS.HELP} element={<Help />} />
						<Route path={PATHS.CONTACT} element={<Contact />} />
					</Route>
				) : (
					<Route path={PATHS.BASE_URL} element={<PublicLayout />}>
						<Route index element={<Landing />} />
						<Route path={PATHS.LOGIN} element={<Login />} />
						<Route path={PATHS.REGISTER} element={<Register />} />
						<Route
							path={PATHS.EMAIL_REGISTER_SENDED}
							element={<EmailRegisterSended />}
						/>

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
				<Route path='*' element={<Navigate to={PATHS.BASE_URL} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouterApp;
