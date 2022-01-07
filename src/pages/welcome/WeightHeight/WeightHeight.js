import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoAction } from '../../../redux/user';
import { putTrainingInfo } from '../../../services/user';
import { useNavigate } from 'react-router-dom';

import './WeightHeight.scss';

import Button from '../../../components/Button/Button';
import Text from '../../../components/Text/Text';
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
		// TODO Cuando termine la funcionalidad de esto, luego terminar los Estilos
		<MainContainer back={true} bg='1' color='2'>
			<div className='weightHeight__container  d-flex flex-column justify-content-start align-items-center col-12'>
				<div className='weightHeight__backgroundImg'></div>

				<div className='topText__container col-12'>
					<div className='weightHeight__topText col-10'>
						<Text
							text={t('welcome.weightHeight.title')}
							size='4'
							bold
							color={2}
						/>
					</div>
				</div>
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
		</MainContainer>
	);
};

export default WeightHeight;
