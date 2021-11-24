import React from 'react'

const Button = ({ children, onClick, title, disabled,type }) => {
	return (
		<div>
			<div className='col-sm max-auto'>
				<button
					disabled={disabled}
					className='btn btn-primary'
					onClick={onClick}
				>
					{children}
					{title}
				</button>
			</div>
		</div>
	);
};

export default Button
