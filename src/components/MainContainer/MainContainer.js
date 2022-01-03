import React from 'react';
import './MainContainer.scss';

const MainContainer = ({ children, full, top }) => {
	return (
		<div
			className={`col-12 d-flex  justify-content-center ${
				full && 'full-height'
			} ${top && 'full-height--top'}`}
		>
			{children}
		</div>
	);
};

export default MainContainer;
