import React from 'react';
import AuxText from '../AuxText/AuxText';
import './GenericTicket.css';

const GenericTicket = ({ text1, text2 }) => {
	return (
		<div>
			<div className='generic-ticket d-flex justify-content-between  '>
				<p className="p-2 ">{text1}</p>
				<p className="p-2 align-self-start" >{text2}</p>
			</div>
		</div>
	);
};

export default GenericTicket;
