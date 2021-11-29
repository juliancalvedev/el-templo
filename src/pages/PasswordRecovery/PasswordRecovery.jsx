import { useEffect, useState } from 'react';
import './PasswordRecovery.css';
import { getSearchParams } from '../../utils/SearchParams';
import { enablePasswordRecovery } from '../../services/auth';
import PasswordRecoveryForm from './PasswordRecoveryForm';
import PasswordRecoveryError from './PasswordRecoveryError';

const PasswordRecovery = () => {
	const token = getSearchParams('token');

	const [verified, setVerified] = useState(false);

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
