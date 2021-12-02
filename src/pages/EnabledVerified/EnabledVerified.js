import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { resendVerifyEmail } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Title from '../../components/Title/Title';
import AuxText from '../../components/AuxText/AuxText';
import Button from '../../components/Button/Button';

const EnabledVerified = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();

	const { emailIsVerified, savedEmail, enabled } = useSelector(
		(store) => store.auth
	);

	const navToLogin = () => navigate('/login');

	const handleResendVerifyEmail = async (email) => {
		await resendVerifyEmail(email);
		navToLogin();
	};

	const rendering = () => {
		if (emailIsVerified === false) {
			return (
				<div>
					<Title
						text={t('auth.enabledVerified.emailNotVerified.title')}
					/>
					<AuxText
						text={t(
							'auth.enabledVerified.emailNotVerified.auxText'
						)}
					/>
					<Button
						title={t(
							'auth.enabledVerified.emailNotVerified.btnResendEmail'
						)}
						onClick={() => handleResendVerifyEmail(savedEmail)}
					/>
				</div>
			);
		} else if (emailIsVerified === true && enabled === false) {
			return (
				<div>
					<Title
						text={t('auth.enabledVerified.accountNotEnabled.title')}
					/>
					<AuxText
						text={t(
							'auth.enabledVerified.accountNotEnabled.auxText'
						)}
					/>
					<Button
						title={t(
							'auth.enabledVerified.accountNotEnabled.btnBack'
						)}
						onClick={navToLogin}
					/>
				</div>
			);
		}
	};

	useEffect(() => {
		rendering();
	}, []);

	return (
		<div className='container d-flex justify-content-center col '>
			{rendering()}
		</div>
	);
};

export default EnabledVerified;
