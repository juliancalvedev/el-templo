import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Paths } from './Paths';

const route = token ? 'privated' : 'nologgedIn';

const AppRouter = () => {
	return (
		<div>
			<Routes>
				{PATHS[route].map((p) => (
					<Route {...p} />
				))}
			</Routes>
		</div>
	);
};

export default AppRouter;
