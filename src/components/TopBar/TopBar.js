import { useNavigate } from 'react-router-dom';
import './TopBar.scss';

import useStyles from './useStyles';
import { IconBack } from '../../assets/Icons/IconBack';
import Text from '../Text/Text';

const TopBar = ({ text, color = 1, bg = 'none', back = false, shadow }) => {
	const navigate = useNavigate();

	const handleClick = () => navigate(-1);

	const styles = useStyles({ bg, color, back, shadow });

	return (
		<div className={styles.container}>
			<nav>
				<div className={styles.body}>
					{back && (
						<div
							className={styles.backArrowBtn}
							onClick={handleClick}
						>
							<div className='iconBack'>
								<IconBack color={styles.icon} />
							</div>
						</div>
					)}

					<Text text={text} color={color} className='p-1' />
				</div>
			</nav>
		</div>
	);
};

export default TopBar;
