import { useNavigate } from 'react-router-dom';
import './TopBar.scss';

import useStyles from './useStyles';
import { IconBack } from '../../assets/Icons/IconBack';
import Text from '../Text/Text';

const TopBar = ({ text, color = 1, bg = 'none', back = false }) => {
	const navigate = useNavigate();

	const handleClick = () => navigate(-1);

	const styles = useStyles({ bg, color, back });

	return (
		<div className={styles.container}>
			<nav>
				<div className={styles.body}>
					{back && <div
						className={styles.backArrowBtn}
						onClick={handleClick}
					>
						<IconBack color={styles.icon}/>
					</div>}

					<Text
						text={text}
						bold
						color={color}
						className='p-1'
					/>

				</div>
			</nav>
		</div>
	);
};

export default TopBar;
