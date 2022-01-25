import IconSelect from '../../assets/Icons/IconSelect';
import useStyles from './useStyles';
import './InputSelect.scss';


const InputSelect = ({name,onChange,value,options}) => {
    const styles = useStyles();
	
	
  return (
		<div className={styles.container}>
			<div className={styles.select}>
				<select
					className={styles.select1}
					value={value}
					onChange={onChange}
					name={name}
				>
					{options.map((selectOption) => (
						<option
							hidden={selectOption.placeholder}
							key={selectOption.key}
							value={selectOption.value}
						>
							{selectOption.name} {selectOption.placeholder}
						</option>
					))}
				</select>
				<div className={styles.chevron}>
					<IconSelect />
				</div>
			</div>
		</div>
  );
};

export default InputSelect;
