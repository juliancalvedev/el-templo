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
					{options.map((selectOption,key) => (
						<option
							hidden={selectOption.placeholder}
							key={key}
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
  );
};

export default InputSelect;
