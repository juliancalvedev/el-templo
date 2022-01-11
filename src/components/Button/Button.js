import useStyles from './useStyles';
import './Button.scss';
import Text from '../Text/Text';

const Button = ({ text, size = 3, className, onClick, type = 1, disabled }) => {
	const COLOR_TEXT = {
		1: '2',
		2: '5',
		3: '5',
	};

	const transformedText = type === 3 ? text.toUpperCase() : text;

	const styles = useStyles({ className, size, type });

	return (
		<div className={styles.container}>
			<button
				disabled={disabled}
				className={styles.button}
				onClick={onClick}
			>
				<Text
					justify={type === 4 && 'start'}
					size={2}
					color={COLOR_TEXT[type]}
					bold={type === 3 || type === 4}
					text={transformedText}
				/>
			</button>
		</div>
	);
};

export default Button;
