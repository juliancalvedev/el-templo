import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { resendVerifyEmail } from '../../services/auth';

const EmailRegisterSended = () => {
	const { t } = useTranslation();
	const { savedEmail } = useSelector((store) => store.auth);
	const handleSubmit = async () => {
		await resendVerifyEmail(savedEmail);
	};
	return (
		<div className='container'>
			<Title
				className='container text-decoration-underline fs-1'
				text={t('auth.emailConfirm.title')}
			/>
			<p className='fs-3'>{t('auth.emailConfirm.p1')}</p>
			<p className='fs-5'>{t('auth.emailConfirm.p2')}</p>
			<p className='fs-6'>{t('auth.emailConfirm.p3')}</p>
			<Button
				type={'button'}
				title={t('auth.emailConfirm.btnConfirm')}
				onClick={handleSubmit}
			/>
		</div>
	);
};

export default EmailRegisterSended;
