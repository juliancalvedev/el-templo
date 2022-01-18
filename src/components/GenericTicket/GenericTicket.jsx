import React from 'react';
import './GenericTicket.scss';
import Text from '../Text/Text';

const GenericTicket = ({ text1, text2, text3, mode }) => {
	return (
		<div
			className={` generic-ticket generic-ticket--${mode} d-flex align-items-center col-12  `}
		>
			<div className={`col-6 d-flex  `}>
				<div className='col-2'>
					<Text text={text1} />
				</div>

				<div className={`text-2-container text-2-container--${mode}`}>
					<Text text={text2} />
				</div>
			</div>
			<div className='col-6 d-flex justify-content-end'>
				<Text className='end__aligned--text' text={text3} />
			</div>
		</div>
	);
};

export default GenericTicket;
