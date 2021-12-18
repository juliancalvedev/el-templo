import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addLevelToTrainingInfo } from '../../../redux/user';

import AuxText from '../../../components/AuxText/AuxText';
import Title from '../../../components/Title/Title';
import { PATHS } from '../../../constants/paths';
const TrainingLevel = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const trainingLevel = useSelector(
		(store) => store.user.trainingInfo.trainingLevel
	);
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
		<div className='container d-flex justify-content-center align-items-center flex-column col-12'>
			<Title text={t('welcome.trainingLevel.title')} />
			<AuxText text={t('welcome.trainingLevel.auxText')} />

			<form className='container d-flex justify-content-center align-items-center flex-column col-12'>
				<div className='form-group col-10'>
					<label htmlFor='level' className='form-label'></label>
					<input
						id='level'
						type='range'
						className='form-range'
						defaultValue={trainingLevel}
						min='1'
						max='5'
						step='1'
						onChange={changeLevel}
					/>
				</div>
				<div className='container d-flex justify-content-between'>
					<AuxText text={t('welcome.trainingLevel.amateur')} />
					<AuxText text={t('welcome.trainingLevel.professional')} />
				</div>
			</form>
			<button
				className='btnNext'
				type='button'
				onClick={toWeightAndHeight}
			>
				{'>'}
			</button>
		</div>
	);
};

export default TrainingLevel;
