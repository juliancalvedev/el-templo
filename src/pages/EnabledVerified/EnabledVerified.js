import { useSelector } from 'react-redux';
import { resendVerifyEmail } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PATHS } from '../../constants/paths';

import './EnabledVerified.scss';

import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import MainContainer from '../../components/MainContainer/MainContainer';
import ImgCorreoNoVerificado from '../../assets/images/ImgCorreoNoVerificado';

const EnabledVerified = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();

	const { emailIsVerified, savedEmail } = useSelector(
		(store) => store.auth
	);

	const navToLogin = () => navigate(`/${PATHS.LOGIN}`);

	const handleResendVerifyEmail = async () => {
		await resendVerifyEmail(savedEmail);
		navToLogin();
	};

	return (
		<MainContainer>
			<div className='d-flex flex-column align-items-center col-12 '>
				{!emailIsVerified && (
					<div className='d-flex flex-column align-items-center col-10 '>
						<div className='title__container col-8 text-center'>
							<Text
								text={t(
									'auth.enabledVerified.emailNotVerified.title'
								)}
								size='4'
								bold
							/>
						</div>
						<div className='mt-3 col-12 text-center'>
							<Text
								text={t(
									'auth.enabledVerified.emailNotVerified.auxText'
								)}
								size='3'
							/>
						</div>
						<div className='mt-4'>
							<ImgCorreoNoVerificado />
						</div>

						<div className='button__container col-10'>
							<Text
								text={t(
									'auth.enabledVerified.emailNotVerified.hasNotEmail'
								)}
								size='1'
							/>
							<Button
								title={t(
									'auth.enabledVerified.emailNotVerified.btnResendEmail'
								)}
								size='lg'
								onClick={handleResendVerifyEmail}
								customType='empty'
							/>
						</div>
					</div>
				)}
			</div>
		</MainContainer>
	);
};

export default EnabledVerified;
