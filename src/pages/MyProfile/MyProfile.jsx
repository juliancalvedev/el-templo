import React from 'react';
import './MyProfile.css';
import AuxText from '../../components/AuxText/AuxText';
import { useSelector } from 'react-redux';
import { cutDate } from '../../utils/date';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';

const MyProfile = () => {
	const navigate = useNavigate();
	const userData = useSelector((store) => store.user);

	const handleNavigate = () => {
		navigate(`/${PATHS.CHANGE_USER_PASSWORD}`, { replace: true });
	};
	return (
		<div className='my-profile-body'>
			<div className='user-level-box'>
				<h3>Nivel x</h3>
				<AuxText text='Entrenamientos realizados: x' />
				<AuxText
					text={`Miembro desde: ${cutDate(
						`${userData.startEnabledDate}`
					)}`}
				/>
			</div>
			<div className='subscription-box'>
				<AuxText
					text={`Suscripcion activa hasta el dia: ${cutDate(
						`${userData.endEnabledDate}`
					)}`}
				/>
			</div>
			<div className='about-you-box'>
				<AuxText text='Sobre vos' />
			</div>
			<div className='my-profile-stats'>
				<AuxText text={`Nivel de entrenamiento :`} />
				<AuxText text={`Objetivos: ${userData.goals}`} />
				<AuxText text={`Peso: `} />
				<AuxText text={`Altura:`} />
			</div>
			<div className='buttons-box'>
				<button onClick={handleNavigate}>contrasenia</button>
			</div>
		</div>
	);
};

export default MyProfile;
