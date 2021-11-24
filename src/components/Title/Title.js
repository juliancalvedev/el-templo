import React from 'react';
import './Title.css';

const Title = ({ Text }) => {
	return (
		<div>
			<h1 className='Title'>{Text}</h1>
		</div>
	);
};

export default Title;
