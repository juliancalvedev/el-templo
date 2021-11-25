import React from 'react';

const AppRouter = () => {
	const route = token ? 'privated' : 'noLoggedin';
	return (
		<div>
			{PATHS[route].map((p) => (
				<Route {...p} />
			))}
		</div>
	);
};

export default AppRouter;
