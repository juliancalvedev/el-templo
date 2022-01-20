import IconSelect from '../../assets/Icons/IconSelect';
import useStyles from './useStyles';

const InputSelect = ({className,name,label,handleChange,option1,option2,option3,value,value1,value2,value3}) => {
    const styles = useStyles({className});

   

  return (
		<div className={styles.container}>
			<select
				className={styles.select}
				defaultValue={value}
				onChange={handleChange}
				name={name}
			>
				<option>{label}</option>
				<option defaultValue={value1}>{option1}</option>
				<option defaultValue={value2}>{option2}</option>
				<option defaultValue={value3}>{option3}</option>
			</select>
			<div>
				<IconSelect className={styles.containerIcon} />
			</div>
		</div>
  );
};

export default InputSelect;
