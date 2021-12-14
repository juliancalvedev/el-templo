import { useEffect, useState } from 'react';
import { axiosInstance } from '../../../axios/axiosInstance';
import { useTranslation } from 'react-i18next';

import AuxText from '../../../components/AuxText/AuxText';
import Title from '../../../components/Title/Title';
import './mainGoals.scss';

const MainGoals = () => {
	const { t } = useTranslation();

	const [arrGoals, setArrGoals] = useState([]);
	const [selectedGoals, setSelectedGoals] = useState(['', '', '']);

	const getGoals = async () => {
		const response = await axiosInstance.get('/user/get-goals');
		const goals = await response?.data?.data?.goals;
		setArrGoals(goals);
	};

	const pushGoal = (goal) => {
		const auxArr = [...selectedGoals];
		if (auxArr[0] === '') {
			auxArr[0] = goal;
			setSelectedGoals(auxArr);
		} else if (auxArr[1] === '') {
			auxArr[1] = goal;
			setSelectedGoals(auxArr);
		} else if (auxArr[2] === '') {
			auxArr[2] = goal;
			setSelectedGoals(auxArr);
		}
	};

	const deleteGoal = (index) => {
		const auxArr = [...selectedGoals];
		if (index === 0) {
			auxArr[0] = '';
			setSelectedGoals(auxArr);
		} else if (index === 1) {
			auxArr[1] = '';
			setSelectedGoals(auxArr);
		} else if (index === 2) {
			auxArr[2] = '';
			setSelectedGoals(auxArr);
		}
	};

	useEffect(() => {
		getGoals();
	}, []);
	console.log(selectedGoals);
	return (
		<div className='container d-flex justify-content-center align-items-center flex-column'>
			<Title text={'Contanos'} />
			<AuxText text={'¿Cuáles son tus objetivos principales?'} />

			<div className='showing-inputs'>
				<div
					className='goal-field goal-1 d-flex'
					onClick={() => deleteGoal(0)}
				>
					<p className='numbers'>1</p>
					<p className='goals'>
						{t(`welcome.goals.${selectedGoals[0]}`)}
					</p>
				</div>
				<div
					className='goal-field goal-2 d-flex'
					onClick={() => deleteGoal(1)}
				>
					<p className='numbers'>2</p>
					<p className='goals'>
						{' '}
						{t(`welcome.goals.${selectedGoals[1]}`)}
					</p>
				</div>
				<div
					className='goal-field goal-3 d-flex'
					onClick={() => deleteGoal(2)}
				>
					<p className='numbers'>3</p>
					<p className='goals'>
						{' '}
						{t(`welcome.goals.${selectedGoals[2]}`)}
					</p>
				</div>
			</div>

			<div className='selectable-goals d-flex flex-wrap'>
				{arrGoals?.map((goal, i) => (
					<button
						key={i}
						className='goals-tags'
						onClick={() => pushGoal(goal)}
					>
						{t(`welcome.goals.${goal}`)}
					</button>
				))}
			</div>
		</div>
	);
};

export default MainGoals;
