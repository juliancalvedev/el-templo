import React from 'react';
import './MyProfile.css';
import AuxText from '../../components/AuxText/AuxText';
import Button from '../../components/Button/Button';
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
	const { startEnabledDate, endEnabledDate, goals, height, weight } =
		useSelector((store) => store.user);
	const userData = useSelector((store) => store.user);
	console.log(userData);

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
				<div className='userImg'>
					<img src='' alt='' />
				</div>
				<div className='edit-profile-box'>
					<img src='' alt='' />
					<p className='edit-profile-text'>Editar perfil</p>
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
				<a className='about-you-link' href='/edit-user-info'>
					EDITAR
				</a>
			</div>
			<div className='my-profile-stats'>
				<div className='training-level-box'>
					<AuxText text={`Nivel de entrenamiento :`} />
				</div>
				<AuxText text={`Objetivos:`} />
				<GenericTicket text1={goals?.[0]} />
				<GenericTicket text1={goals?.[1]} />
				<GenericTicket text1={goals?.[2]} />
				<AuxText text='Datos personales:' />
				<GenericTicket text1={`Peso`} text2={weight} />
				<GenericTicket text1={`Altura`} text2={height} />
			</div>

			<Button title='Contraseña' mode='flat' onClick={handleNavigate} />
			<Button
				title='Cerrar sesion'
				mode='flat dangerText'
				onClick={onLogout}
			/>
		</div>
	);
};

export default MyProfile;
