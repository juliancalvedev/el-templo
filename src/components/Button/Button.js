import useStyles from './useStyles';
import './Button.scss';
import Text from '../Text/Text';

const Button = ({
	text,
	size = 3,
	textSize = 1,
	className,
	onClick,
	type = 1,
	disabled,
	circle
}) => {
	const COLOR_TEXT = {
		1: '2',
		2: '5',
		3: '5',
	};

	const transformedText = type === 3 ? text.toUpperCase() : text;

	const styles = useStyles({ className, size, type, circle, disabled });

	return (
		<div className={styles.container}>
			<button
				disabled={disabled}
				className={styles.button}
				onClick={onClick}
			>
				<Text
					justify={type === 4 && 'start'}
					size={textSize}
					color={COLOR_TEXT[type]}
					bold={type === 3 || type === 4 || circle}
					text={transformedText}
				/>
			</button>
		</div>
	);
};

export default Button;
