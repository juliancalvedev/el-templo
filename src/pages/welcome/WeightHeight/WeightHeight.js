import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoAction } from '../../../redux/user';
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

	const trainingInfo = useSelector((store) => store.user.trainingInfo);

	const [selectedWeight, setSelectedWeight] = useState('');
	const [selectedHeight, setSelectedHeight] = useState('');

	// Función para validar el número del inputo PESO
	const onWeightChange = (event) => {
		const validCharacters = '01234567890.';
		const { value } = event.target;

		let flag = true;
		const charIsValid = () => {
			for (let i = 1; i < 12; i++) {
				if (value[value.length - 1] === validCharacters[i]) {
					flag = true;
					break;
				} else {
					flag = false;
				}
			}
		};
		charIsValid();

		if (flag) {
			setSelectedWeight(parseInt(value));
		}
		if (value === '') {
			setSelectedWeight('');
		}
	};

	// Función para validar el número del input ALTURA
	const onHeightChange = (event) => {
		const validCharacters = '01234567890.';
		const { value } = event.target;

		console.log(value);
		let flag = true;
		const charIsValid = () => {
			for (let i = 1; i < 12; i++) {
				if (value[value.length - 1] === validCharacters[i]) {
					flag = true;
					break;
				} else {
					flag = false;
				}
			}
		};
		charIsValid();

		if (flag) {
			setSelectedHeight(value);
		}
		if (value === '' || value === NaN) {
			setSelectedHeight('');
		}
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
			<div className='d-flex flex-column'>
				<Title text={t('welcome.weightHeight.title')} />

				<div className='form-group d-flex'>
					<InputDivided
						id='weight'
						text1={t('welcome.weightHeight.weight')}
						text2={t('welcome.weightHeight.kilos')}
						onChange={onWeightChange}
						type='text'
						min='20'
						max='400'
						maxLength='3'
						placeholder='0'
						value={selectedWeight}
					/>
				</div>

				<div className='form-group d-flex'>
					<InputDivided
						id='height'
						text1={t('welcome.weightHeight.height')}
						text2={t('welcome.weightHeight.meters')}
						onChange={onHeightChange}
						type='text'
						min='1'
						max='3'
						maxLength='4'
						placeholder='1.00'
						value={selectedHeight}
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
