import './ButtonRadio.scss';
import useStyles from './useStyles';

const ButtonRadio = ({
	label,
	className,
	onChange,
	value,
	htmlFor,
	name,
	checked,
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
					value={value}
					checked={checked}
				/>
				<label className={styles.label} htmlFor={htmlFor}>
					{label}
				</label>
			</div>
		
		</div>
	);
};

export default ButtonRadio;
