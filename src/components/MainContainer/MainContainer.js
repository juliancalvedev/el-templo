import React from 'react';
import { isEmpty } from '../../utils/objectUtils';
import TopBar from '../TopBar/TopBar';
import './MainContainer.scss';
import useStyles from './useStyles';

const MainContainer = ({ children, scroll, backgroundImg, ...topbarOptions }) => {

	const topbar = !isEmpty({ ...topbarOptions });

	const styles = useStyles({scroll, backgroundImg, topbar});

	return (
		<div className={styles.container}>
			<div className={styles.mainContainer}>
				{topbar && <TopBar {...topbarOptions} />}
				<div className={styles.bodyContainer}>
					{children}
				</div>
			</div>
		</div>
	);
};

export default MainContainer;
