import Eye from '../../Icons/Eye';
import Input from '../Input/Input';
import { useState } from 'react';
import './InputIcon.scss';

const icons = {
	eye: <Eye />,
};
const InputIcon = ({value,onChange,placeholder,iconType,onClickIcon,type}) => {
	return (
		<div className=' input-icon-container my-2 d-flex justify-content-center align-items-center eye col-12 '>
			<div className='col-12 d-flex justify-content-between  align-items-center'>
				<input
					className='bg-transparent border-0 input-container input py-2 col-10'
					value={value}
					onChange={onChange}
					type={type}
					placeholder={placeholder}
				/>
				<span className='icon-container px-3 col-2 ' onClick={onClickIcon}>
					{icons[iconType]}
				</span>
			</div>
		</div>
	);
};

export default InputIcon;
