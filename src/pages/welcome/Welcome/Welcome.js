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
				<div className='mt-5 col-11'>
					<Text
						text={t('welcome.main.title')}
						size='5'
						color='2'
						font='2'
					/>
					<Text
						text={`${t('welcome.main.hello')} ${firstName}!`}
						size='4'
						color='2'
						bold
					/>
				</div>
				<div className='text-center col-10'>
					<Text text={t('welcome.main.auxText')} size='3' color='1' />
				</div>
				<div className='mb-5 pb-2'>
					<Button // TODO Arreglar Button cuando el componete esté listo
						text={t('welcome.main.btnLetsBegin')}
						onClick={toOnboarding}
					/>
				</div>
			</div>
		</MainContainer>
	);
};

export default Welcome;
