import { useEffect, useState } from 'react';
import './PasswordRecovery.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { getSearchParams } from '../../utils/SearchParams';
import { enablePasswordRecovery } from '../../services/auth';

const PasswordRecoveryForm = () => {
	const [password, setPassword] = useState('');

	const [repeatPassword, setRepeatPassword] = useState('');

	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleChangeRepeatPassword = (e) => {
		setRepeatPassword(e.target.value);
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

			<Button title='Actualizar contraseña' />
		</div>
	);
};

export default PasswordRecoveryForm;
