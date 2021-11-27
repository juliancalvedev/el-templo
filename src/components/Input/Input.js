import React from 'react'

const Input = ({ id, name, placeholder, type, handleChange, param, value }) => {
	return (
		<div>
			<input
				id={id}
				name={name}
				placeholder={placeholder}
				type={type}
				onChange={ handleChange}
				className={param }
				value={value}
				
			/>
		</div>
	);
};
export default Input;
