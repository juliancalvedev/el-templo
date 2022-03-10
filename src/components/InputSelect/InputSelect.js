import IconSelect from '../../assets/Icons/IconSelect';
import useStyles from './useStyles';
import './InputSelect.scss';

const InputSelect = ({name, onChange, value, options, label}) => {
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
					>
						{options.map((selectOption, key) => (
							<option key={key} value={selectOption}>
								{selectOption}
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
