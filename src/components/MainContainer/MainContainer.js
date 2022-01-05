import React from 'react';
import TopBar from '../TopBar/TopBar';
import './MainContainer.scss';

const MainContainer = ({ children, ...topbarOptions }) => {
	return (
		<div
			className='col-12 d-flex full-height flex-column'
		>
			<TopBar {...topbarOptions} />
			<div className='col-12 d-flex justify-content-center h-100'>
				{children}
			</div>
		</div>
	);
};

export default MainContainer;
