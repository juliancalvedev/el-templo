const Input = ({
	id,
	name,
	placeholder,
	type,
	handleChange,
	className,
	value,
}) => {
	return (
		<div>
			<input
				id={id}
				name={name}
				placeholder={placeholder}
				type={type}
				onChange={handleChange}
				className={className}
				value={value}
			/>
		</div>
	);
};
export default Input;
