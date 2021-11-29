import React, { useEffect } from 'react';

import Title from '../../components/Title/Title';
import AuxText from '../../components/AuxText/AuxText';
import Button from '../../components/Button/Button';

import { useTranslation } from 'react-i18next';
import axios from 'axios';

const VerifiedEmail = () => {
	const { t } = useTranslation();

	const baseURL = 'https://el-templo.herokuapp.com/api';

	const queryParams = new URLSearchParams(window?.location?.search);
	const token = queryParams.get('token');

	const getToken = async () => {
		const response = await axios.get(
			`${baseURL}/auth/verify-email?token=${token}`
		);

		const isValidated = response?.data;
		// const isProblem = response?.data?.problem;

		console.log(isValidated);

		return isValidated;
	};

	useEffect(() => {
		getToken();
	}, []);

	return (
		<div>
			<Title text={t('auth.emailVerified.title')} />
			<AuxText text={t('auth.emailVerified.auxText')} />
			<Button text={t('auth.emailVerified.btnNext')} />
		</div>
	);
};

export default VerifiedEmail;
