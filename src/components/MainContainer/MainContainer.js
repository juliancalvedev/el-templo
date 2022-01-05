import React from 'react';
import TopBar from '../TopBar/TopBar';
import './MainContainer.scss';

const MainContainer = ({ children, color, text, bg, back, shadow }) => {
	return (
		<div
			className='col-12 d-flex full-height flex-column'
		>
			<TopBar color={color} text={text} bg={bg} back={back} shadow={shadow} />
			<div className='col-12 d-flex justify-content-center h-100'>
				{children}
			</div>
		</div>
	);
};

export default MainContainer;
