import './ButtonPagination.scss';

const ButtonPagination = ({
	children,
	onClick,
	title,
	disabled,
	className,
	type = 'button',
	direction = 'right',
}) => {
	return (
		<div>
			<button
				disabled={disabled}
				className={` customBtnPagination ${className}`}
				onClick={onClick}
				type={type}
			>
				<div
					className={`${direction}`}
					style={{
						scale: '1.7',
						paddingTop: '3px',
						paddingRight: '5px',
					}}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='30'
						height='30'
						fill='currentColor'
						className='bi bi-chevron-right'
					>
						<path
							fillRule='evenodd'
							d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
						/>
					</svg>
				</div>
			</button>
		</div>
	);
};

export default ButtonPagination;
