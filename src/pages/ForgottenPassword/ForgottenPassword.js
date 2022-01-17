import Input from '../../components/Input/Input';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startPasswordRecoveryAction } from '../../redux/auth';
import { useTranslation } from 'react-i18next';
import MainContainer from '../../components/MainContainer/MainContainer';
import TopSpacing from '../../components/TopSpacing/TopSpacing';
import ImgKeyFP from '../../assets/images/ImgKeyFP';
import ImgPadlockFP from '../../assets/images/ImgPadlockFP';



const ForgottenPassword = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');

	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = () => {
		dispatch(startPasswordRecoveryAction({ email }));
	};
	return (
		<MainContainer scroll back shadow bg={2} color={1}>
			<TopSpacing scroll />
			<form className='col-12 '>
				<Text size={4} bold text={t('auth.forgotPassword1.title')} />
				<div className='d-flex align-items-center justify-content-center col-12'>
					<Input
						className='col-11'
						value={email}
						onChange={handleChangeEmail}
						type='email'
						placeholder={t('auth.forgotPassword1.emailPlaceholder')}
					/>
				</div>
				<Text size={2} text={t('auth.forgotPassword1.contentForgotPassword')} />
				<div className=' d-flex align-items-center justify-content-start mb-5'>
					<ImgPadlockFP />
					<ImgKeyFP />
				</div>

				<div className=' d-flex align-items-center justify-content-center mt-5 '>
					<Button
						size={2}
						disabled={!email}
						type={2}
						onClick={handleSubmit}
						text={t('auth.forgotPassword1.btnAccept')}
					/>
				</div>
			</form>
		</MainContainer>
	);
};

export default ForgottenPassword;
