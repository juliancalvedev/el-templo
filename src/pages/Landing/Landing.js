import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import {LanguageSelector} from '../../components/LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router'; 
const Landing = () => {
    const { t } = useTranslation();
    const navigate=useNavigate();

    const handleSubmitLogin = () => navigate('/login', { replace: true });
    const handleSubmitRegister = () => navigate('/register', { replace: true });
	return (
		<div>
            <LanguageSelector/>
            
			<p>{t('auth.landing.haveAccount')}</p>
            <Button onClick={handleSubmitLogin}title={t('auth.landing.btnLogin')}/>
            <Button onClick={handleSubmitRegister}title={t('auth.landing.btnRegister')}/>
		</div>
	);
};

export default Landing;
