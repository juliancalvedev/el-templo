import React from 'react';
import './MyProfile.css';
import AuxText from '../../components/AuxText/AuxText';

const MyProfile = () => {
	return (
		<div className='my-profile-body'>
			<div className='user-level-box'>
				<h3>Nivel x</h3>
				<AuxText text='Entrenamientos realizados: x' />
				<AuxText text='Miembro desde "" ' />
			</div>
			<div className='subscription-box'>
				<AuxText text='Suscripcion activa hasta el dia:' />
			</div>
			<div className='about-you-box'>
				<AuxText text='Sobre vos' />
			</div>
			<div className='my-profile-stats'>
				<AuxText text={`Nivel de entrenamiento :`} />
				<AuxText text={`Objetivos:`} />
				<AuxText text={`Peso: `} />
				<AuxText text={`Altura:`} />
			</div>
		</div>
	);
};

export default MyProfile;
