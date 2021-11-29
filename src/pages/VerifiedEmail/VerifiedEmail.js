import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import axios from 'axios';

import Title from '../../components/Title/Title';
import AuxText from '../../components/AuxText/AuxText';
import Button from '../../components/Button/Button';

const VerifiedEmail = () => {
	const { t } = useTranslation();

	const navigate = useNavigate();

	const baseURL = 'https://el-templo.herokuapp.com/api';

	const queryParams = new URLSearchParams(window?.location?.search);
	const token = queryParams.get('token');

	let verifiedEmail = true;

	const getToken = async () => {
		const response = await axios.get(
			`${baseURL}/auth/verify-email?token=${token}`
		);
		const { problem } = response?.data;

		if (!problem) {
			verifiedEmail = true;
			return true;
		} else {
			verifiedEmail = false;
			return false;
		}
	};

	const navigateToLoggin = () => {
		navigate('/login', { replace: true });

		console.log('NAvigate to Login clicked');
	};

	useEffect(() => {
		getToken();
	}, []);

	return (
		<div>
			{verifiedEmail ? (
				<div>
					<Title text={t('auth.emailVerified.title')} />
					<AuxText text={t('auth.emailVerified.auxText')} />
					<Button
						text={t('auth.emailVerified.btnNext')}
						onClick={navigateToLoggin}
					/>
				</div>
			) : (
				<div>
					<Title text={t('auth.emailVerified.titleError')} />
					<Button
						text={t('auth.emailVerified.btnNext')}
						onClick={navigateToLoggin}
					/>
				</div>
			)}
		</div>
	);
};

export default VerifiedEmail;
