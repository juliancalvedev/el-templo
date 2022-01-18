import Button from '../../components/Button/Button';
import { LanguageSelector } from '../../components/LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { PATHS } from '../../constants/paths';
import MainContainer from '../../components/MainContainer/MainContainer';
import './Landing.scss';
import ElTemploLogo from '../../assets/images/ElTemploLogo';

const Landing = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleSubmitLogin = () => navigate(`/${PATHS.LOGIN}`);
	const handleSubmitRegister = () => navigate(`/${PATHS.REGISTER}`);
	return (
		<MainContainer backgroundImg='login'>
					<div className='col-12'>
						<div className='col-12 d-flex justify-content-end'>
							<LanguageSelector />
						</div>
						<div className='m-auto d-flex justify-content-center col-8'>
							<ElTemploLogo />
						</div>
					</div>
					<div className='col-12 pb-5'>
						<p>{t('auth.landing.haveAccount')}</p>
						<Button
							onClick={handleSubmitLogin}
							text={t('auth.landing.btnLogin')}
							className='mb-1'
						/>
						<Button
							onClick={handleSubmitRegister}
							text={t('auth.landing.btnRegister')}
						/>
					</div>
		</MainContainer>
	);
};

export default Landing;
