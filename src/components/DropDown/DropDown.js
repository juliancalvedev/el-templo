import useStyles from './useStyles';
import './DropDown.scss';
import Text from '../Text/Text';
import IconDropDownArrow from '../../assets/Icons/IconDropDownArrow';
import { useState } from 'react';

const DropDown = ({
	text1 = 'Title',
	text2 = 'Description',
	shadow,
	height = '180px',
}) => {
	const styles = useStyles({ shadow });

	const [isFolded, setIsFolded] = useState(true);

	const handleClick = () => {
		isFolded ? setIsFolded(false) : setIsFolded(true);
	};

	return (
		<div className={styles.mainContainer} onClick={handleClick}>
			{isFolded ? (
				<div className={styles.folded}>
					<div className={styles.bar}>
						<Text text={text1} bold color={6} />
						<div className={styles.arrow}>
							<IconDropDownArrow />
						</div>
					</div>
				</div>
			) : (
				<div className={styles.unfolded}>
					<div className={styles.bar}>
						<Text text={text1} bold color={6} />
						<div className={styles.unfoldedArrow}>
							<IconDropDownArrow />
						</div>
					</div>
					<div
						className={styles.descriptionContainer}
						style={{
							height: `${height}`,
						}}
					>
						<Text text={text2} size='2' justify='left' />
					</div>
				</div>
			)}
		</div>
	);
};

export default DropDown;
