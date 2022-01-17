import { useEffect, useState } from 'react';
import { axiosInstance } from '../../../axios/axiosInstance';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './mainGoals.scss';

import Text from '../../../components/Text/Text';
import { PATHS } from '../../../constants/paths';
import { useDispatch, useSelector } from 'react-redux';
import { addGoalsToTrainingInfo } from '../../../redux/user';
import ButtonPagination from '../../../components/ButtonPagination/ButtonPagination';
import MainContainer from '../../../components/MainContainer/MainContainer';

const MainGoals = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const trainingGoals = useSelector((store) => store.user.trainingInfo.goals);

	const [arrGoals, setArrGoals] = useState([]);
	const [selectedGoals, setSelectedGoals] = useState(trainingGoals);

	const getGoals = async () => {
		const response = await axiosInstance.get('/user/get-goals');
		const goals = await response?.data?.data?.goals;
		setArrGoals(goals);
	};

	const toTrainingLevel = () => {
		dispatch(
			addGoalsToTrainingInfo({
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
		<MainContainer>

		<div className='container d-flex justify-content-center align-items-center flex-column'>
			<Text text={t('welcome.goals.tellUs')} />
			<Text text={t('welcome.goals.mainGoals')} />

			<div className='showing-inputs col-12'>
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
						{t(`welcome.goals.${selectedGoals[1]}`)}
					</p>
				</div>
				<div
					className='goal-field goal-3 d-flex'
					onClick={() => deleteGoal(2)}
				>
					<p className='numbers'>3</p>
					<p className='goals'>
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

			<ButtonPagination
				disabled={
					selectedGoals[0] === '' ||
					selectedGoals[1] === '' ||
					selectedGoals[2] === ''
				}
				onClick={toTrainingLevel}
			/>
		</div>
		</MainContainer>
	);
};

export default MainGoals;
