import { useEffect } from 'react';
import './PasswordRecovery.css';
import { getSearchParams } from '../../utils/searchParams';
import { enablePasswordRecovery } from '../../services/auth';
import PasswordRecoveryForm from './PasswordRecoveryForm';
import PasswordRecoveryError from './PasswordRecoveryError';
import useFetch from '../../hooks/useFetch';

const PasswordRecovery = () => {
	const token = getSearchParams('token');

	const [data, error, apiCall] = useFetch({
		service: enablePasswordRecovery({ token }),
		globalLoader: true
	})

	useEffect(() => {
		apiCall();
	}, []);

	return (
		<div className='password-recovery-main'>
			{data && <PasswordRecoveryForm />}
			{error && <PasswordRecoveryError />}
		</div>
	);
};

export default PasswordRecovery;
