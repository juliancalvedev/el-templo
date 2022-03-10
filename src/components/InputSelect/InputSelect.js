import IconSelect from '../../assets/Icons/IconSelect';
import useStyles from './useStyles';
import './InputSelect.scss';

const InputSelect = ({name, onChange, value, options, label, style}) => {
	const styles = useStyles();

	return (
		<div>
				<label name={name}>{label}</label>
			<div className={styles.container}>
				<div className={styles.select}>
					<select
						className={styles.select1}
						value={value}
						onChange={onChange}
						name={name}
						style={style}
					>
						{options.map((selectOption, key) => (
							<option key={key} value={selectOption} >
								{selectOption[0].toUpperCase() + selectOption.substring(1)}
							</option>
						))}
					</select>
					<div className={styles.chevron}>
						<IconSelect />
					</div>
				</div>
			</div>
		</div>
	);
};

export default InputSelect;
