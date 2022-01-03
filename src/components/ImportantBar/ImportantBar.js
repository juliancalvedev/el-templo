import './ImportantBar.scss';

const ImportantBar = ({ text }) => {
	return (
		<div className='importantBox col-12'>
			<p className=' importantBoxWhiteText '>{text}</p>
		</div>
	);
};

export default ImportantBar;
