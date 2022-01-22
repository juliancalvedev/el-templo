import './ButtonRadio.scss';
import useStyles from './useStyles';

const ButtonRadio = ({
	label,
	className,
	onChange,
	defaultValue,
	htmlFor,
	name,
	defautchecked,
	id,
	colors,
	type,
}) => {
	const styles = useStyles({className, colors });

	return (
		<div >
				<div className={styles.containerInput}>
				<input
					className={styles.button}
					onChange={onChange}
					type={type}
					name={name}
					id={id}
					value={defaultValue}
					checked={defautchecked}
				/>
				<label className={styles.label} htmlFor={htmlFor}>
					{label}
				</label>
			</div>
		
		</div>
	);
};

export default ButtonRadio;
