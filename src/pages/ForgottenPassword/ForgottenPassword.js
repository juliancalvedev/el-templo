import Input from '../../components/Input/Input';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MainContainer from '../../components/MainContainer/MainContainer';
import TopSpacing from '../../components/TopSpacing/TopSpacing';
import ImgKeyFP from '../../assets/images/ImgKeyFP';
import ImgPadlockFP from '../../assets/images/ImgPadlockFP';
import useFetch from '../../hooks/useFetch';
import { startPasswordRecovery } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';



const ForgottenPassword = () => {
	const { t } = useTranslation();

	const navigate = useNavigate();

	const [email, setEmail] = useState('');

	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const [data, error, apiCall] = useFetch({
		service: () => startPasswordRecovery({ email }),
		globalLoader: true,
		callback: () => navigate(`/${PATHS.LOGIN}`)
	})

	return (
		<MainContainer scroll back color={1}>
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

				<div className='d-flex align-items-center justify-content-center mt-5 col-11 m-auto'>
					<Button
						size={3}
						disabled={!email}
						type={2}
						onClick={apiCall}
						text={t('auth.forgotPassword1.btnAccept')}
					/>
				</div>
			</form>
		</MainContainer>
	);
};

export default ForgottenPassword;
