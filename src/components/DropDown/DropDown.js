import useStyles from './useStyles';
import './DropDown.scss';
import Text from '../Text/Text';
import IconDropDownArrow from '../../assets/Icons/IconDropDownArrow';
import { useState, useEffect } from 'react';

const DropDown = ({ text = 'Title', shadow, children, height = 'auto' }) => {
	const [isFolded, setIsFolded] = useState(true);
	const [fold, setFold] = useState('fold');

	const handleClick = () => {
		isFolded ? setIsFolded(false) : setIsFolded(true);
		isFolded ? setFold('unfold') : setFold('fold');
	};

	const styles = useStyles({ shadow, fold });

	return (
		<div className={styles.mainContainer}>
			<div className={styles.dropDownContainer}>
				<div className={styles.bar} onClick={handleClick}>
					<Text text={text} bold color={6} />
					<div
						className={
							isFolded ? styles.arrow : styles.arrowUnfolded
						}
					>
						<IconDropDownArrow />
					</div>
				</div>

				<div className='d-flex flex-column justify-content-start col-12'>
					<div className={styles.description}>
						{!isFolded && (
							<div
								className={styles.textContainer}
								style={{ height: `${height}` }}
							>
								{children}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DropDown;
