import React from 'react';
import AuxText from '../AuxText/AuxText';
import './GenericTicket.scss';

const GenericTicket = ({ text1, text2, mode }) => {
	return (
		<div
			className={` generic-ticket generic-ticket--${mode} d-flex align-items-center  `}
		>
			<div className='text-1-container'>
				<p className='generic-ticket-text'>{text1}</p>
			</div>
			<p className='generic-ticket-text'>{text2}</p>
		</div>
	);
};

export default GenericTicket;
