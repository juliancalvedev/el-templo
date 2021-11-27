import React from 'react';

import Title from '../Title/Title';
import AuxText from '../AuxText/AuxText';
import Button from '../Button/Button';

import { useTranslation } from 'react-i18next';
import axios from 'axios';

const VerifiedEmail = () => {
	const { t } = useTranslation();

	const baseURL = 'https://el-templo.herokuapp.com/api';

	const queryParams = new URLSearchParams(window.location.search);
	const token = queryParams.get('token');

	const getToken = async () => {
		const response = await axios.get(
			`${baseURL}/auth/verify-email?token=${token}`
		);

		console.log(response);
		return response;
	};
	getToken();

	return (
		<div>
			<Title text={t('auth.emailVerified.title')} />

			<AuxText text={t('auth.emailVerified.auxText')} />

			<Button text={t('auth.emailVerified.btnNext')} />
		</div>
	);
};

export default VerifiedEmail;
