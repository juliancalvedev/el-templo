import './ImportantBar.scss';

const ImportantBar = ({ text }) => {
	return (
		<div className='importantBox'>
			<p className=' importantBoxWhiteText '>{text}</p>
		</div>
	);
};

export default ImportantBar;
