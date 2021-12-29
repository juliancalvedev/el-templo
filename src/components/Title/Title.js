import './title.scss';

const Title = ({ text, type = 'dark' }) => {
	return (
		<div>
			<h1
				className={`title  title--${type} `}
				// TODO cambiar el style por el customStyles del otro PR
				style={{ margin: '0px' }}
			>
				{text}
			</h1>
		</div>
	);
};

export default Title;
