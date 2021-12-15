import { useEffect, useState } from 'react';
import { axiosInstance } from '../../../axios/axiosInstance';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import AuxText from '../../../components/AuxText/AuxText';
import Title from '../../../components/Title/Title';
import './mainGoals.scss';
import { PATHS } from '../../../constants/paths';
import { useDispatch, useSelector } from 'react-redux';
import { addTrainingInfo } from '../../../redux/user';

const MainGoals = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const trainingGoals = useSelector((store) => store.user.trainingInfo.goals);

	const [arrGoals, setArrGoals] = useState([]);
	const [selectedGoals, setSelectedGoals] = useState(trainingGoals);

	// console.log(selectedGoals);
	// console.log(trainingGoals);

	const getGoals = async () => {
		const response = await axiosInstance.get('/user/get-goals');
		const goals = await response?.data?.data?.goals;
		setArrGoals(goals);
	};

	const toTrainingLevel = () => {
		dispatch(
			addTrainingInfo({
				goals: selectedGoals,
			})
		);
		navigate(`/${PATHS.TRAINING_LEVEL}`);
	};

	const addNewGoal = (goal) => {
		const auxArr = [...selectedGoals];
		const empty = auxArr.findIndex((e) => e === '');
		auxArr[empty] = goal;
		setSelectedGoals(auxArr);
	};

	const deleteGoal = (index) => {
		const auxArr = [...selectedGoals];
		auxArr[index] = '';
		setSelectedGoals(auxArr);
	};

	useEffect(() => {
		getGoals();
	}, []);

	useEffect(() => {
		setSelectedGoals(trainingGoals);
	}, [trainingGoals]);

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
				{arrGoals?.map(
					(goal, i) =>
						!selectedGoals.includes(goal) && (
							<button
								key={i}
								className='goals-tags'
								onClick={() => addNewGoal(goal)}
							>
								{t(`welcome.goals.${goal}`)}
							</button>
						)
				)}
			</div>
			<button
				disabled={
					selectedGoals[0] === '' ||
					selectedGoals[1] === '' ||
					selectedGoals[2] === ''
				}
				className='btnNext'
				onClick={toTrainingLevel}
			>
				{'>'}
			</button>
		</div>
	);
};

export default MainGoals;
