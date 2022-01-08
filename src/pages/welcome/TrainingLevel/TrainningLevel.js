import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addLevelToTrainingInfo } from '../../../redux/user';

import AuxText from '../../../components/AuxText/AuxText';
import Title from '../../../components/Title/Title';
import { PATHS } from '../../../constants/paths';
import InputRange from '../../../components/InputRange/InputRange';
import ButtonPagination from '../../../components/ButtonPagination/ButtonPagination';
const TrainingLevel = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

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
	return (
		<div className='container d-flex justify-content-center align-items-center flex-column col-12'>
			<Title text={t('welcome.trainingLevel.title')} />
			<AuxText text={t('welcome.trainingLevel.auxText')} />

			<form className='container d-flex justify-content-center align-items-center flex-column col-12'>
				<InputRange
					id='level'
					min='1'
					max='5'
					defaultValue={trainingLevel}
					onChange={changeLevel}
				/>
				<div className='container d-flex justify-content-between'>
					<AuxText text={t('welcome.trainingLevel.amateur')} />
					<AuxText text={t('welcome.trainingLevel.professional')} />
				</div>
			</form>
			<ButtonPagination direction='right' onClick={toWeightAndHeight} />
		</div>
	);
};

export default TrainingLevel;
