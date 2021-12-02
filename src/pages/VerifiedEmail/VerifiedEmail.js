import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { verifyEmailToBackEnd } from '../../services/auth';

import Title from '../../components/Title/Title';
import AuxText from '../../components/AuxText/AuxText';
import Button from '../../components/Button/Button';

const VerifiedEmail = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const [isVerified, setIsVerified] = useState(true);
	const [isLoading, setIsLoading] = useState(true);

	const navigateToLoggin = () => navigate('/login', { replace: true });

	const makeVerify = async () => {
		const response = await verifyEmailToBackEnd();
		setIsVerified(response);
		setIsLoading(false);
	};

	useEffect(() => {
		makeVerify();
	}, []);

	return (
		<div className='container d-flex justify-content-center col '>
			{isLoading ? (
				<div>
					<h1>{t('global.loading')}</h1>
					<div class='spinner-border' role='status'>
						<span class='sr-only'></span>
					</div>
				</div>
			) : (
				<div>
					{isVerified ? (
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
			)}
		</div>
	);
};

export default VerifiedEmail;
