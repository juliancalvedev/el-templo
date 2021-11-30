import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { verifyEmailToBackEnd } from '../../services/auth';

import Title from '../../components/Title/Title';
import AuxText from '../../components/AuxText/AuxText';
import Button from '../../components/Button/Button';

const VerifiedEmail = () => {
	const { t } = useTranslation();

	const navigate = useNavigate();

	let verifiedEmail = true;

	const navigateToLoggin = () => navigate('/login', { replace: true });

	useEffect(() => {
		verifyEmailToBackEnd();
	}, []);

	return (
		<div className='container d-flex justify-content-center col '>
			{verifiedEmail ? (
				<div>
					<Title text={t('auth.emailVerified.title')} />
					<AuxText text={t('auth.emailVerified.auxText')} />
					<Button
						title={t('auth.emailVerified.btnNext')}
						onClick={navigateToLoggin}
					/>
				</div>
			) : (
				<div>
					<Title text={t('auth.emailVerified.titleError')} />
					<Button
						title={t('auth.emailVerified.btnNext')}
						onClick={navigateToLoggin}
					/>
				</div>
			)}
		</div>
	);
};

export default VerifiedEmail;
