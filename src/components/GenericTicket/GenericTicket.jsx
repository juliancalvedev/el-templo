import React from 'react';
import AuxText from '../AuxText/AuxText';
import './GenericTicket.css';

const GenericTicket = ({ text }) => {
	return (
		<div>
			<div className='generic-ticket'>
				<AuxText text={text} />
			</div>
		</div>
	);
};

export default GenericTicket;
