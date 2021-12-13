import React from 'react';
import './MyProfile.css';
import AuxText from '../../components/AuxText/AuxText';
import Button from '../../components/Button/Button';
import LogOutButton from '../../components/LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { cutDate } from '../../utils/date';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';
import GenericTicket from '../../components/GenericTicket/GenericTicket';
import { logoutAction } from '../../redux/auth';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input/Input';
const MyProfile = () => {
	const navigate = useNavigate();
	const { startEnabledDate, endEnabledDate, goals } = useSelector(
		(store) => store.user
	);

	const handleNavigate = () => {
		navigate(`/${PATHS.CHANGE_USER_PASSWORD}`, { replace: true });
	};
	const dispatch = useDispatch();
	const onLogout = () => {
		dispatch(logoutAction());
	};
	return (
		<div className='my-profile-body'>
			<div className='user-level-box'>
				<div className='edit-profile-box'>
					<img src='' alt='' />
					<AuxText className='edit-profile-text' text='Editar perfil' />
				</div>
				<h3>Nivel x</h3>
				<AuxText text='Entrenamientos realizados: x' />
				<AuxText
					text={`Miembro desde: ${cutDate(`${startEnabledDate}`)}`}
				/>
			</div>
			<div className='subscription-box'>
				<p className='subscription-white-text'>
					Suscripción activa hasta el día: {cutDate(`${endEnabledDate}`)}
				</p>
			</div>

			<div className='about-you-box'>
				<AuxText text='Sobre vos' />
				<a className='about-you-link' href='/home'>
					EDITAR
				</a>
			</div>
			<div className='my-profile-stats'>
				<div className='training-level-box'>
					<AuxText text={`Nivel de entrenamiento :`} />
				</div>
				<AuxText text={`Objetivos: ${goals}`} />
				<GenericTicket text='hola	' />
				<GenericTicket />
				<GenericTicket />
				<AuxText text='Datos personales:' />
				<Input></Input>
			</div>

			<Button title='Contraseña' onClick={handleNavigate} />
			<Button onClick={onLogout} title='logout' />
		</div>
	);
};

export default MyProfile;
