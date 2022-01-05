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

	console.log(userHeight, 'User H');
	console.log(userWeight, 'User Ww');
	const [selectedWeight, setSelectedWeight] = useState(userWeight);
	const [selectedHeight, setSelectedHeight] = useState(userHeight);

	const onChangeWeight = (e, type) => {
		const number = e.target.value;

		console.log(number.match(/^\d+/));

		// 	if (type === 'weight') setSelectedWeight(e.target.value); // PESO
		// 	console.log('Weight cambió');
		// };

		// const onChangeHeight = (e, type) => {
		// 	console.log('Height cambió');
		// 	if (type === 'height') setSelectedHeight(e.target.value); // ALTURA
		// };
	};

	function isNumericKey(event) {
		var charCode = event.which ? event.which : event.keyCode;
		if (
			charCode != 46 &&
			charCode > 31 &&
			(charCode < 48 || charCode > 57)
		) {
			return true;
		} else {
			return false;
		}
	}

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
	console.log(selectedHeight, 'Altura');
	console.log(selectedWeight, 'Peso');

	return (
		<MainContainer>
			<div className='d-flex flex-column justify-content-center'>
				<Title text={t('welcome.weightHeight.title')} />

				<div className='form-group d-flex'>
					<InputDivided
						text1={t('welcome.weightHeight.weight')}
						text2={t('welcome.weightHeight.kilos')}
						name='pepe'
						// onChange={(e) => numbersOnly(e)}
						type='text'
						min='20'
						max='400'
						maxLength='4'
						defaultValue={selectedWeight}
						onKeyPress={(event) => isNumericKey(event)}
					/>
				</div>

				<div className='form-group d-flex'>
					<InputDivided
						text1={t('welcome.weightHeight.height')}
						text2={t('welcome.weightHeight.meters')}
						// onChange={onChangeHeight}
						type='text'
						defaultValue={selectedHeight}
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
