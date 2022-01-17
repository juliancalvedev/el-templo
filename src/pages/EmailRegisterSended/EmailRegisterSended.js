import Button from '../../components/Button/Button';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { resendVerifyEmail } from '../../services/auth';
import Text from '../../components/Text/Text';
import MainContainer from '../../components/MainContainer/MainContainer';
import IconEmailSended from '../../assets/Icons/IconEmailSended';

const EmailRegisterSended = () => {
	const { t } = useTranslation();
	const { savedEmail } = useSelector((store) => store.auth);
	const handleSubmit = async () => {
		await resendVerifyEmail(savedEmail);
	};
	return (
		<MainContainer>
			<div className='p-4 mt-5 mb-5 d-flex flex-column justify-content-between h-100'>

				<Text
					size={4}
					bold
					text={t('auth.emailConfirm.title')}
				/>
				<div>

					<div className='col-12 d-flex justify-content-center mb-4'>

						<IconEmailSended />
					</div>
					<div>
						<div className='mb-2'>

							<Text size={3} bold text={t('auth.emailConfirm.p1')} />
						</div>
						<Text size={3} text={t('auth.emailConfirm.p2')} />
					</div>
				</div>
				<div>

					<Text justify='start' size={1} text={t('auth.emailConfirm.p3')} />
					<Button
						text={t('auth.emailConfirm.btnConfirm')}
						onClick={handleSubmit}
					/>
				</div>
			</div >
		</MainContainer>
	);
};

export default EmailRegisterSended;
