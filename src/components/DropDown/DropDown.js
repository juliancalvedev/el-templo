import useStyles from './useStyles';
import './DropDown.scss';
import Text from '../Text/Text';
import IconDropDownArrow from '../../assets/Icons/IconDropDownArrow';
import { useState, useEffect } from 'react';

const DropDown = ({ text = 'Title', shadow, height = false, children }) => {
	const styles = useStyles({ shadow });

	const [isFolded, setIsFolded] = useState(true);

	const handleClick = () => {
		isFolded ? setIsFolded(false) : setIsFolded(true);
	};
	return (
		<div className={styles.mainContainer} onClick={handleClick}>
			<div className={styles.dropDownContainer}>
				<div className={styles.bar}>
					<Text text={text} bold color={6} />
					<div
						className={
							isFolded ? styles.arrow : styles.arrowUnfolded
						}
					>
						<IconDropDownArrow />
					</div>
				</div>
				<div className='col-12'>
					<div
						className={
							isFolded
								? styles.descriptionFolded
								: styles.descriptionUnFolded
						}
						style={{
							height: `${
								height === false
									? 'auto'
									: `${isFolded ? 0 : height}px`
							}`,
						}}
					>
						{!isFolded && (
							<div className={styles.textContainer}>
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
