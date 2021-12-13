import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Title from '../../../components/Title/Title';
import AuxText from '../../../components/AuxText/AuxText';
import Button from '../../../components/Button/Button';
import { PATHS } from '../../../constants/paths';

const Welcome = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { firstName } = useSelector((store) => store.user);

	const toOnboarding = () => navigate(`/${PATHS.MAIN_GOALS}`);

	return (
		<div className='container d-flex justify-content-center align-items-center flex-column'>
			<Title text={t('welcome.title')} />
			<h3>{`${t('welcome.hello')} ${firstName}!`}</h3>
			<AuxText text={t('welcome.auxText')} />

			<Button title={t('welcome.btnLetsBegin')} onClick={toOnboarding} />
		</div>
	);
};

export default Welcome;
