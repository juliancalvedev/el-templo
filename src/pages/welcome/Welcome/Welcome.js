import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Title from '../../../components/Title/Title';
import AuxText from '../../../components/AuxText/AuxText';
import Button from '../../../components/Button/Button';
import { PATHS } from '../../../constants/paths';
import Text from '../../../components/Text/Text';

const Welcome = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { firstName } = useSelector((store) => store.user);

	const toOnboarding = () => navigate(`/${PATHS.MAIN_GOALS}`);

	return (
		<div className='container d-flex justify-content-center align-items-center flex-column'>
			<Title text={t('welcome.main.title')} />
			<h3>{`${t('welcome.main.hello')} ${firstName}!`}</h3>
			<Text size={3} text={t('welcome.main.auxText')} />

			<Button
				title={t('welcome.main.btnLetsBegin')}
				onClick={toOnboarding}
			/>
		</div>
	);
};

export default Welcome;
