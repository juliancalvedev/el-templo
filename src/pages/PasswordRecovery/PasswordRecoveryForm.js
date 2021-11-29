import { useState } from 'react';
import './PasswordRecovery.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import axios from 'axios';
import { getSearchParams } from '../../utils/SearchParams';
import { useNavigate } from 'react-router';

const PasswordRecoveryForm = () => {
	const navigate = useNavigate();

	const token = getSearchParams('token');

	const baseURL = 'https://el-templo.herokuapp.com/api';

	const path = '/auth/on-password-recovery?token=';

	const [password, setPassword] = useState('');

	const [repeatPassword, setRepeatPassword] = useState('');

	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleChangeRepeatPassword = (e) => {
		setRepeatPassword(e.target.value);
	};

	const submitChangePassword = () => {
		if (password.length > 6) {
			if (password === repeatPassword) {
				const sendPassword = async (password) => {
					try {
						axios.put(`${baseURL + path + token}`, {
							newPassword: `${password}`,
						});
					} catch (error) {
						console.log(error);
					}
				};

				sendPassword(password);

				navigate('/login', { replace: true });

				console.log(password.length);
			}
		}
	};

	return (
		<div>
			<h2>Crea nueva contraseña</h2>

			<Input
				type='password'
				placeholder='Nueva Contraseña'
				value={password}
				handleChange={handleChangePassword}
			/>
			<Input
				placeholder='Repite nueva Contraseña'
				type='password'
				value={repeatPassword}
				handleChange={handleChangeRepeatPassword}
			/>

			<Button title='Actualizar contraseña' onClick={submitChangePassword} />
		</div>
	);
};

export default PasswordRecoveryForm;
