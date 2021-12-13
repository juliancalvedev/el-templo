import Button from '../../components/Button/Button';
import { LanguageSelector } from '../../components/LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { PATHS } from '../../constants/paths';
const Landing = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleSubmitLogin = () => navigate(`/${PATHS.LOGIN}`);
	const handleSubmitRegister = () => navigate(`/${PATHS.REGISTER}`);
	return (
		<div>
			<LanguageSelector />

			<p>{t('auth.landing.haveAccount')}</p>
			<Button
				onClick={handleSubmitLogin}
				title={t('auth.landing.btnLogin')}
			/>
			<Button
				onClick={handleSubmitRegister}
				title={t('auth.landing.btnRegister')}
			/>
		</div>
	);
};

export default Landing;
