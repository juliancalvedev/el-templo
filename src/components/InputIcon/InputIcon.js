import Eye from '../../Icons/Eye';
import Input from '../Input/Input';
import { useState } from 'react';
const icons = {
	eye: <Eye />,
};
const InputIcon = ({ value, handleChage, placeholder, icon,onClickIcon,type }) => {
  
    return (
		<div className='d-flex justify-content-center align-items-center eye col-12 '>
			<div className='col-11 d-flex justify-content-between  align-items-center'>
				<Input
					className='bg-transparent border-0 '
					value={value}
					handleChange={handleChage}
					type={type}
					placeholder={placeholder}
				/>
				<div onClick={onClickIcon}>{icons[icon]}</div>
			
            </div>
		</div>
	);
};

export default InputIcon;
