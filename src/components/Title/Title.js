import './title.scss';

const Title = ({ text, type = 'dark' }, customStyles) => {
	return (
		<div>
			<h1 className={`title m-1 title--${type} ${customStyles}`}>{text}</h1>
		</div>
	);
};

export default Title;
