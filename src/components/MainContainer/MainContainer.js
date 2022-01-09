import React from 'react';
import { isEmpty } from '../../utils/objectUtils';
import TopBar from '../TopBar/TopBar';
import './MainContainer.scss';
import useStyles from './useStyles';

const MainContainer = ({ children, scroll, ...topbarOptions }) => {

	const styles = useStyles({scroll});

	return (
		<div className={styles.container}>
			{!isEmpty({ ...topbarOptions }) && <TopBar {...topbarOptions} />}
			<div className={styles.bodyContainer}>
				{children}
			</div>
		</div>
	);
};

export default MainContainer;
