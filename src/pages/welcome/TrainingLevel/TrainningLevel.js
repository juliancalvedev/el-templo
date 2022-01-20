import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addLevelToTrainingInfo } from '../../../redux/user';
import './TrainningLevel.scss';

import Text from '../../../components/Text/Text';
import { PATHS } from '../../../constants/paths';
import InputRange from '../../../components/InputRange/InputRange';
import ButtonPagination from '../../../components/ButtonPagination/ButtonPagination';
import MainContainer from '../../../components/MainContainer/MainContainer';
import useStyles from './useStyles';
const TrainingLevel = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const styles=useStyles();
	const { trainingLevel } = useSelector((store) => store?.user?.trainingInfo);
	const [selectedLevel, setSelectedLevel] = useState(
		trainingLevel === 0 ? 1 : trainingLevel
	);
	const changeLevel = (e) => setSelectedLevel(parseInt(e.target.value));

	const toWeightAndHeight = () => {
		dispatch(
			addLevelToTrainingInfo({
				trainingLevel: selectedLevel,
			})
		);
		navigate(`/${PATHS.WEIGHT_HEIGHT}`);
	};

	const bannerTexts = [
		<Text
						justify='start'
						text={t('welcome.trainingLevel.title')}
						size='4'
						bold
						color={2}
						className='px-4'
					/>
	]

	return (
		<MainContainer back={true} bg='1' color='2' backgroundImg='mainGoals' banner bannerTexts={bannerTexts}>
			
				<div></div>
				<div className={styles.container}>
					<form className={styles.form}>
						<InputRange
							id='level'
							min='1'
							max='5'
							defaultValue={trainingLevel}
							onChange={changeLevel}
						/>
					</form>

					<div className={styles.text}>
						<div style={{ marginTop: '-23px' }}>
							<Text
								text={t('welcome.trainingLevel.amateur')}
								color='2'
								size='1'
							/>
						</div>
						<div style={{ marginTop: '-25px' }}>
							<Text
								text={t('welcome.trainingLevel.professional')}
								color='2'
								size='1'
							/>
						</div>
					</div>
				</div>

				<div className={styles.btn}>
					<ButtonPagination
						direction='right'
						onClick={toWeightAndHeight}
					/>
				</div>
		</MainContainer>
	);
};

export default TrainingLevel;
