import { useState } from 'react';
import './PasswordRecovery.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { getSearchParams } from '../../utils/SearchParams';
import { useNavigate } from 'react-router';
import { onPasswordRecovery } from '../../services/auth';

const PasswordRecoveryForm = () => {
	const navigate = useNavigate();

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
						onPasswordRecovery({ password });
					} catch (error) {
						return error;
					}
				};

				sendPassword(password);

				navigate('/login', { replace: true });
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
