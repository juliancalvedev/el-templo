import React from 'react';
import './PasswordRecovery.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import axios from 'axios';
import { useSelector } from 'react-redux';
import verifyUser from './VerifyUser';

const PasswordRecovery = () => {
	const { token } = useSelector((store) => store.auth);
	console.log(token);
	return (
		<div className='password-recovery-main'>
			<h2>Crea nueva contraseña</h2>

			<Input placeholder='Nueva Contraseña' />
			<Input placeholder='Repite nueva Contraseña' />

			<Button title='Actualizar contraseña' />
		</div>
	);
};

export default PasswordRecovery;
