import React from 'react';
import AuxText from '../AuxText/AuxText';
import './GenericTicket.css';

const GenericTicket = ({ text1, text2 }) => {
	return (
		<div>
			<div className='generic-ticket'>
				<AuxText text={text1} />
				<AuxText text={text2} />
			</div>
		</div>
	);
};

export default GenericTicket;
