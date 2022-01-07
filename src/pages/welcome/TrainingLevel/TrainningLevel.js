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

const TrainingLevel = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { trainingLevel } = useSelector((store) => store?.user?.trainingInfo);
	const [selectedLevel, setSelectedLevel] = useState(trainingLevel);

	const changeLevel = (e) => setSelectedLevel(parseInt(e.target.value));

	const toWeightAndHeight = () => {
		dispatch(
			addLevelToTrainingInfo({
				trainingLevel: selectedLevel,
			})
		);
		navigate(`/${PATHS.WEIGHT_HEIGHT}`);
	};
	return (
		<MainContainer back={true} bg='1' color='2'>
			<div className='trainningLevel__container d-flex flex-column justify-content-start align-items-center col-12'>
				<div className='trainningLevel__backgroundImg'></div>

				<div className='trainningLevel__topText--container col-12'>
					<div className='trainningLevel__topText col-10'>
						<Text
							className='topText__container--title'
							text={t('welcome.trainingLevel.title')}
							size='4'
							bold
							color={2}
						/>
					</div>
				</div>

				<div className='trainningLevel__inputRange--container d-flex flex-column justify-content-center align-items-center col-12'>
					<form className='d-flex flex-column justify-content-center align-items-center col-12 m-0 p-0'>
						<InputRange
							id='level'
							min='1'
							max='5'
							defaultValue={trainingLevel}
							onChange={changeLevel}
						/>
					</form>

					<div className='d-flex align-items-center justify-content-between col-10 m-0 p-0'>
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

				<div className='trainningLevel__btnPag--container'>
					<ButtonPagination
						direction='right'
						onClick={toWeightAndHeight}
					/>
				</div>
			</div>
		</MainContainer>
	);
};

export default TrainingLevel;
