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

const WeightHeight = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const userWeight = useSelector((store) => store.user.trainingInfo.weight);
	const userHeight = useSelector((store) => store.user.trainingInfo.height);
	const trainingInfo = useSelector((store) => store.user.trainingInfo);

	const [selectedWeight, setSelectedWeight] = useState(userWeight);
	const [selectedHeight, setSelectedHeight] = useState(userHeight);

	const generateWeightNums = () => {
		let weightNums = [];
		for (let i = 0; i <= 200; i++) weightNums.push(i); // PESO
		return weightNums;
	};
	const weights = generateWeightNums(); // PESO

	const generateHeights = () => {
		let heights = [];
		for (let i = 0.5; i <= 2.5; i = i + 0.01) heights.push(i.toFixed(2)); // ALTURA
		return heights;
	};
	const heights = generateHeights(); // ALTURA

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
		<div className='d-flex justify-content-center  flex-column'>
			<Title text={t('welcome.weightHeight.title')} />

			<div className='form-group d-flex'>
				<label className='col-3' htmlFor='weight'>
					{t('welcome.weightHeight.weight')}
				</label>
				<select
					className='form-control col-6'
					style={{ width: '25%' }}
					id='weight'
					onChange={(e) => handleChange(e, 'weight')}
				>
					{weights.map((num) => (
						<option key={num}>{num}</option> // PESAJES
					))}
				</select>
				<p>{t('welcome.weightHeight.kilos')}</p>
			</div>

			<div className='form-group d-flex'>
				<label className='col-3' htmlFor='height'>
					{t('welcome.weightHeight.height')}
				</label>
				<select
					className='form-control col-6'
					style={{ width: '25%' }}
					id='height'
					onChange={(e) => handleChange(e, 'height')}
				>
					{heights.map((num) => (
						<option key={num}>{num}</option> // ALTURAS
					))}
				</select>
				<p>{t('welcome.weightHeight.meters')}</p>
			</div>
			<Button
				title={t('welcome.weightHeight.enter')}
				onClick={handleSubmit}
			/>
		</div>
	);
};

export default WeightHeight;
