import { t } from 'i18next';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';

const EmailRegisterSended = () => {
	return (
		<div className='container'>
			<Title
				className='container text-decoration-underline fs-1'
				text={t('auth.emailConfirm.title')}
			/>
			<p className='fs-3'>{t('auth.emailConfirm.p1')}</p>
			<p className='fs-5'>{t('auth.emailConfirm.p2')}</p>
			<p className='fs-6'>{t('auth.emailConfirm.p3')}</p>
			<Button type={'button'} title={t('auth.emailConfirm.btnConfirm')} />
		</div>
	);
};

export default EmailRegisterSended;
