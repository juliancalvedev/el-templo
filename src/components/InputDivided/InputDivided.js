import React from 'react';

import './InputDivided.scss';

const InputDivided = ({ text1, text2, onChange, type }) => {
	return (
		<div className='input__divided d-flex justify-content-between align-items-center col-11 mt-2 mb-2 '>
			<div className='d-flex justify-content-between align-items-center col-6'>
				<label className='input__divided--label mb-1'>{text1}</label>
				<input
					className='input__divided--input'
					onChange={onChange}
					type={type}
				></input>
			</div>
			<div>
				<div className='input__divided--centerLine'>
					<span style={{ opacity: '0' }}>.</span>
				</div>
			</div>
			<div className='input__divided--auxTextContainer d-flex justify-content-end col-6'>
				<p className='input__divided--auxText d-flex justify-content-end m-0 mb-1 p-0 col-6'>
					{text2}
				</p>
			</div>
		</div>
	);
};

export default InputDivided;