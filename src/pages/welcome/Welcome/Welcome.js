import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from '../../../components/Button/Button';
import { PATHS } from '../../../constants/paths';
import Text from '../../../components/Text/Text';
import MainContainer from '../../../components/MainContainer/MainContainer';

const Welcome = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { firstName } = useSelector((store) => store.user);

	const toOnboarding = () => navigate(`/${PATHS.MAIN_GOALS}`);

	return (
		<MainContainer>
			<div className='d-flex flex-column align-items-center col-11'>
				<Text text={t('welcome.main.title')} size='5' />
				<Text
					text={`${t('welcome.main.hello')} ${firstName}!`}
					size='4'
				/>
				<Text text={t('welcome.main.auxText')} size='3' />

				<Button
					title={t('welcome.main.btnLetsBegin')}
					onClick={toOnboarding}
				/>
			</div>
		</MainContainer>
	);
};

export default Welcome;
