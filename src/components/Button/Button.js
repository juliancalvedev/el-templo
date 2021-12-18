import './button.scss';

const Button = ({ children, onClick, title, disabled, type = 'button' }) => {
	return (
		<div>
			<div className=''>
				<button
					disabled={disabled}
					className='btn btn-primary customBtn '
					onClick={onClick}
					type={type}
				>
					{children}
					{title}
				</button>
			</div>
		</div>
	);
};

export default Button;
