import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './Welcome.scss';

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
			<div className='welcome__container d-flex flex-column justify-content-between align-items-center col-12'>
				<div className='welcome__backgroundImg'></div>
				<div className='d-flex flex-column justify-content-between h-100 align-items-center col-11'>
					<div className='mt-5 col-12'>
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
					<div className='col-11'>

						<Text text={t('welcome.main.auxText')} size='3' color='1' />
					</div>
					<div className='mb-5 col-12 d-flex flex-column justify-content-start'>
						<Button
							text={t('welcome.main.btnLetsBegin')}
							onClick={toOnboarding}
							size={3}
						/>
					</div>
				</div>
			</div>
		</MainContainer>
	);
};

export default Welcome;
