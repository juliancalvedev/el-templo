import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addWeightAndHeightToTrainingInfo,
	getUserInfoAction,
} from '../../../redux/user';
import { putTrainingInfo } from '../../../services/user';
import { useNavigate } from 'react-router-dom';

import Button from '../../../components/Button/Button';
import Title from '../../../components/Title/Title';
import { PATHS } from '../../../constants/paths';
import { useTranslation } from 'react-i18next';
import InputDivided from '../../../components/InputDivided/InputDivided';
import MainContainer from '../../../components/MainContainer/MainContainer';

const WeightHeight = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const userWeight = useSelector((store) => store.user.trainingInfo.weight);
	const userHeight = useSelector((store) => store.user.trainingInfo.height);
	const trainingInfo = useSelector((store) => store.user.trainingInfo);

	const [selectedWeight, setSelectedWeight] = useState(userWeight);
	const [selectedHeight, setSelectedHeight] = useState(userHeight);

	const handleChange = (e, type) => {
		if (type === 'weight') setSelectedWeight(e.target.value); // PESO
		if (type === 'height') setSelectedHeight(e.target.value); // ALTURA
	};

	const callback = async () => {
		await putTrainingInfo({
			...trainingInfo,
			weight: selectedWeight,
			height: selectedHeight,
		});
		dispatch(getUserInfoAction());
	};

	const handleSubmit = () => {
		callback();
		navigate(`/${PATHS.BASE_URL}`);
	};

	return (
		<MainContainer>
			<div className='d-flex flex-column justify-content-center'>
				<Title text={t('welcome.weightHeight.title')} />

				<div className='form-group d-flex'>
					<InputDivided
						text1={t('welcome.weightHeight.weight')}
						text2={t('welcome.weightHeight.kilos')}
						onChange={handleChange}
						type='weight'
					/>
				</div>

				<div className='form-group d-flex'>
					<InputDivided
						text1={t('welcome.weightHeight.height')}
						text2={t('welcome.weightHeight.meters')}
						onChange={handleChange}
						type='height'
					/>
				</div>
				<Button
					title={t('welcome.weightHeight.enter')}
					onClick={handleSubmit}
				/>
			</div>
		</MainContainer>
	);
};

export default WeightHeight;
