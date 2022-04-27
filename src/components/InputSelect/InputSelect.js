import IconSelect from '../../assets/Icons/IconSelect';
import useStyles from './useStyles';
import './InputSelect.scss';

const InputSelect = ({
	name,
	onChange,
	value,
	options = [],
	label,
	style,
	multiple,
	readOnly,
	onClick
}) => {
	const styles = useStyles();

	return (
		<div>
			{label && <label name={name}>{label}</label>}
			<div className={styles.container}>
				<div className={styles.select}>
					<select
						className={styles.select1}
						value={value}
						onChange={onChange}
						name={name}
						style={style}
						multiple={multiple}
						readOnly={readOnly}
						onClick={onClick}
					>
						{options.map((selectOption, key) => (
							<option
								key={key}
								hidden={selectOption?.hidden}
								value={selectOption.value}
							>
								{selectOption.name}
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
