import React from 'react';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  startPasswordRecoveryAction } from '../../redux/auth';
import { useTranslation } from 'react-i18next';
const Forgottenpassword = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const handleChangeEmail = (e) => {
			setEmail(e.target.value);
		};
const handleSubmit = () => {
dispatch(startPasswordRecoveryAction({ email}));
};
	return (
		<div className='container d-flex justify-content-center align-items-center '>
			<form className=''>
				<h1 className=''>
					<Title text={t('auth.forgotPassword1.title')} />
				</h1>
				<Input
					 value={email}
					 handleChange={handleChangeEmail}
					type='email'
					placeholder={t('auth.forgotPassword1.emailPlaceholder')}
				/>
				<Button
					 onClick={handleSubmit}
					title={t('auth.forgotPassword1.btn')}
				/>
			</form>
		</div>
	);
};

export default Forgottenpassword;
