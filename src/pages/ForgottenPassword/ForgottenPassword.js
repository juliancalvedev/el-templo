import Input from '../../components/Input/Input';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MainContainer from '../../components/MainContainer/MainContainer';
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
		<MainContainer back col='12' backgroundImg='lock' color={1}>
			<div>

				<Text size={4} bold text={t('auth.forgotPassword1.title')} />
				<Input
					value={email}
					onChange={handleChangeEmail}
					type='email'
					placeholder={t('auth.forgotPassword1.emailPlaceholder')}
				/>
				<Text size={2} text={t('auth.forgotPassword1.contentForgotPassword')} />
			</div>
				<div className='d-flex align-items-center justify-content-start mb-5'>
					<ImgPadlockFP />
					<ImgKeyFP />
				</div>

					<Button
						size={3}
						disabled={!email}
						type={2}
						onClick={apiCall}
						text={t('auth.forgotPassword1.btnAccept')}
						className='mb-4'
					/>
		</MainContainer>
	);
};

export default ForgottenPassword;
