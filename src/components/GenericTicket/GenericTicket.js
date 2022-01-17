import React from 'react';
import './GenericTicket.scss';

const GenericTicket = ({ text1, text2, text3, mode }) => {
	return (
		<div
			className={` generic-ticket generic-ticket--${mode} d-flex align-items-center col-12  `}
		>
			<div className='text-1-container d-flex col-1  '>
				<p>{text1}</p>
			</div>
			<div className='text-2-container col-7'>
				<p className='generic-ticket-text'>{text2}</p>
			</div>
			<div className='col-3'>
				<p className='generic-ticket-text'>{text3}</p>
			</div>
		</div>
	);
};

export default GenericTicket;
