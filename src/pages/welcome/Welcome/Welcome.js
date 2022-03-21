import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from '../../../components/Button/Button';
import { PATHS } from '../../../constants/paths';
import Text from '../../../components/Text/Text';
import MainContainer from '../../../components/MainContainer/MainContainer';
import useStyles from './useStyles';
const Welcome = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const styles=useStyles();
	const { firstName } = useSelector((store) => store.user);

	const toOnboarding = () => navigate(`/${PATHS.MAIN_GOALS}`);

	return (
		<MainContainer backgroundImg='welcome1' scroll>
					<div className={styles.text}>
						<Text
							text={t('welcome.main.title')}
							size='5'
							color='2'
							font='2'
							justify='start'
						/>
						<Text
							text={`${t('welcome.main.hello')} ${firstName}!`}
							size='4'
							color='2'
							bold
							justify='start'
						/>
					</div>

						<Text text={t('welcome.main.auxText')} size='3' color='1' />
						<Button
							text={t('welcome.main.btnLetsBegin')}
							onClick={toOnboarding}
							size={3}
						/>
		</MainContainer>
	);
};

export default Welcome;
