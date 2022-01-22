import IconSelect from '../../assets/Icons/IconSelect';
import useStyles from './useStyles';
import './InputSelect.scss';

const InputSelect = ({name,label,onChange,option1,option2,option3,value,value1,value2,value3}) => {
	
    const styles = useStyles();

   

  return (
		<div className={styles.container}>
			<div className={styles.select}>	
			<select
				className={styles.select1}
				defaultValue={value}
				onChange={onChange}
				name={name}
			>
				<option>{label}</option>
				<option value={value1}>{option1}</option>
				<option value={value2}>{option2}</option>
				<option value={value3}>{option3}</option>
			
			</select>
			<div className={styles.chevron}>
				<IconSelect />
			</div>
			</div>
		
			
		</div>
  );
};

export default InputSelect;
