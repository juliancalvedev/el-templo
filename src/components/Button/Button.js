import './button.scss';
const SIZE_STYLES={
	sm:'col-3 h-50 py-3 px-4 d-flex align-items-center rounded-4',
	md:'col-5',
	lg:'col-12',
}
const Button = ({ children, onClick, title, disabled, type = 'button' ,size='md'}) => {
	return (
		
			<div className=''>
				<button
					disabled={disabled}
					className={`btn btn-primary customBtn ${SIZE_STYLES[size]}`}
					onClick={onClick}
					type={type}
				>
					{children}
					{title}
				</button>
			</div>
	
	);
};

export default Button;