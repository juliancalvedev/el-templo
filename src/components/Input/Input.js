import React from 'react'

const Input = ({ attribute, handleChange, param, value }) => {
	return (
		<div>
			<input
				id={attribute.id}
				name={attribute.name}
				placeholder={attribute.placeholder}
				type={attribute.type}
				onChange={ handleChange}
				className={param }
				value={value}
			/>
		</div>
	);
};
export default Input;
