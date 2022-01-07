import './SubTitle.scss'

const SubTitle = ({ text, type = 'dark' }) => {
	return (
		<div>
			<h3 className={`subTitle subTitle--${type}`}>{text}</h3>
		</div>
	);
};

export default SubTitle;
