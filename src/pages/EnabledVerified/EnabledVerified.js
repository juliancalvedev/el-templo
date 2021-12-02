import React from 'react';
import { useSelector } from 'react-redux';

const EnabledVerified = () => {
	const user = useSelector((user) => user.auth);
	console.log(user);
	return (
		<div>
			<h1>Enabled or Verified Scren</h1>
		</div>
	);
};

export default EnabledVerified;
