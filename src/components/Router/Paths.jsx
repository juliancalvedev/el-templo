import Login from '../../pages/Login/Login';

const PATHS = {
	noLoggedIn: [
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '*',
			element: <Navigate to='/login' />,
		},
	],
	privated: [],
};
