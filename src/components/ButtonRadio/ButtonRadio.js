
import './ButtonRadio.scss'
import useStyles from './useStyles';


const ButtonRadio = ({label,className, handleChange,value,htmlFor,name,checked,id,colors,type}) => {
	

	const styles = useStyles({ className,colors});

	return (
		<div className={styles.container}>
			<input
				className={styles.button}
				onChange={handleChange}
				type={type}
				name={name}
				id={id}
				value={value}
				defautchecked={checked}
			/>
			<label className={styles.label} htmlFor={htmlFor}>
				{label}
			</label>
		</div>
	);
};



export default ButtonRadio;
