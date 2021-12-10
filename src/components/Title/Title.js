import './title.scss';

const Title = ({ text, type = 'dark' }) => {
	return (
		<div>
			<h1 className={`title title--${type}`}>{text}</h1>
		</div>
	);
};

export default Title;
