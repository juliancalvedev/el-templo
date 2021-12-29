import './AuxText.scss';
const AuxText = ({ text, mode, customStyles }) => {
	return (
		<div>
			<p className={`auxText auxText--${mode} ${customStyles}`}>{text}</p>
		</div>
	);
};

export default AuxText;
