import React from 'react';

import './InputDivided.scss';

const InputDivided = ({
	text1,
	text2,
	onKeyPress,
	onChange,
	type,
	id,
	min,
	max,
	defaultValue,
	value,
	maxLength,
	placeholder,
}) => {
	return (
		<div className='input__divided d-flex justify-content-between align-items-center col-11 mt-2 mb-2'>
			<div className='d-flex justify-content-between align-items-center col-6'>
				<label className='input__divided--label mb-1' htmlFor={id}>
					{text1}
				</label>
			</div>
			<div>
				<div className='input__divided--centerLine'>
					<span style={{ opacity: '0' }}>.</span>
				</div>
			</div>

			<div className='input__divided--auxTextContainer d-flex col-6'>
				<input
					className='input__divided--input d-flex justify-content-center'
					onKeyPress={onKeyPress}
					onChange={onChange}
					type={type}
					id={id}
					min={min}
					max={max}
					defaultValue={defaultValue}
					value={value}
					maxLength={maxLength}
					placeholder={placeholder}
				></input>
				<p className='input__divided--auxText d-flex justify-content-end m-0'>
					{text2}
				</p>
			</div>
		</div>
	);
};

export default InputDivided;
