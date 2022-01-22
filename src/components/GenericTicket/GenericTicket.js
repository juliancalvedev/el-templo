import React from 'react';
import './GenericTicket.scss';
import Text from '../Text/Text';

const GenericTicket = ({ text1, text2, text3, mode }) => {
	return (
		<div className={` generic-ticket  d-flex align-items-center col-11  `}>
			<div className={`col-6 d-flex container1 container1--${mode} `}>
				<div className='col-2 text-1-container '>
					<Text text={text1} />
				</div>

				<div className={`text-2-container `}>
					<Text text={text2} />
				</div>
			</div>
			<div className={`col-6 d-flex justify-content-end ${mode} `}>
				<Text className='end__aligned--text' text={text3} />
			</div>
		</div>
	);
};

export default GenericTicket;
