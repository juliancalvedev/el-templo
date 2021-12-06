import { useEffect, useState } from 'react';
import './PasswordRecovery.css';
import { getSearchParams } from '../../utils/searchParams';
import { enablePasswordRecovery } from '../../services/auth';
import PasswordRecoveryForm from './PasswordRecoveryForm';
import PasswordRecoveryError from './PasswordRecoveryError';

const PasswordRecovery = () => {
	const token = getSearchParams('token');

	const [verified, setVerified] = useState(false);

	const tokenIsActive = async () => {
		const response = await enablePasswordRecovery({ token });
		const { problem } = response.data;
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
