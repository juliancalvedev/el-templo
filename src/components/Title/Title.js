import './title.scss';

const Title = ({ text, type = 'dark', style }) => {
	return (
		<div>
			<h1 className={`title  title--${type} `} style={style}>
				{text}
			</h1>
		</div>
	);
};

export default Title;
