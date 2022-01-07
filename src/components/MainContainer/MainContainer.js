import React from 'react';
import { isEmpty } from '../../utils/objectUtils';
import TopBar from '../TopBar/TopBar';
import './MainContainer.scss';

const MainContainer = ({ children, ...topbarOptions }) => {
	return (
		<div className='col-12 d-flex full-height flex-column'>
			{!isEmpty({ ...topbarOptions }) && <TopBar {...topbarOptions} />}
			<div className='test-test-test col-12 d-flex justify-content-center h-100'>
				{children}
			</div>
		</div>
	);
};

export default MainContainer;
