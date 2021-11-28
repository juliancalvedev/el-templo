import { useEffect, useState } from 'react';
import './PasswordRecovery.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { getSearchParams } from '../../utils/SearchParams';
import { enablePasswordRecovery } from '../../services/auth';
import PasswordRecoveryForm from './PasswordRecoveryForm';
import PasswordRecoveryError from './PasswordRecoveryError';

const PasswordRecovery = () => {
	const token = getSearchParams('passwordRecoveryHash');

	const [verified, setVerified] = useState(false);

	const [password, setPassword] = useState('');

	const [repeatPassword, setRepeatPassword] = useState('');

	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleChangeRepeatPassword = (e) => {
		setRepeatPassword(e.target.value);
	};

	const tokenIsActive = async () => {
		const response = await enablePasswordRecovery({ token });
		const { data, problem } = response.data;
		console.log(data, problem);
		if (!problem) {
			setVerified(true);
		} else {
			setVerified(false);
		}
	};

	useEffect(() => {
		tokenIsActive();
	}, []);

	return (
		<div className='password-recovery-main'>
			{verified ? (
				<>
					<PasswordRecoveryForm />
				</>
			) : (
				<PasswordRecoveryError />
			)}
		</div>
	);
};

export default PasswordRecovery;
