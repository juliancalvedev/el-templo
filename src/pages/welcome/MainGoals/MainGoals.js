import { useEffect, useState } from 'react';
import { axiosInstance } from '../../../axios/axiosInstance';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Cross from '../../../assets/Icons/Cross';
import Text from '../../../components/Text/Text';
import MainContainer from '../../../components/MainContainer/MainContainer';
import './mainGoals.scss';
import { PATHS } from '../../../constants/paths';
import { useDispatch, useSelector } from 'react-redux';
import { addGoalsToTrainingInfo } from '../../../redux/user';
import ButtonPagination from '../../../components/ButtonPagination/ButtonPagination';

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

	const disableBtnNext = () => {
		if (
			selectedGoals[0] === '' ||
			selectedGoals[1] === '' ||
			selectedGoals[2] === ''
		) {
			return 'disabled';
		} else {
			return '';
		}
	};
	useEffect(() => {
		getGoals();
	}, []);

	useEffect(() => {
		setSelectedGoals(trainingGoals);
	}, [trainingGoals]);

	return (
		<MainContainer back={true} bg='1' color='2'>
			<div className='mainGoals__container  d-flex flex-column justify-content-start align-items-center col-12'>
				<div className='maingGoals__backgroundImg'></div>
				<div className='topText__container col-12'>
					<Text
						className='topText__container--title'
						text={t('welcome.goals.tellUs')}
						size='4'
						bold
						color={2}
					/>
					<Text
						text={t('welcome.goals.mainGoals')}
						size='3'
						bold
						color={2}
					/>
				</div>

				<div className='showing-inputs d-flex flex-column align-items-center col-11'>
					<div
						className='goal-field goal-1 d-flex col-12'
						onClick={() => deleteGoal(0)}
					>
						<p className='numbers'>1</p>
						<div className='d-flex justify-content-between align-items-center col-12 '>
							<p className='goals goal1'>
								{t(`welcome.goals.${selectedGoals[0]}`)}
							</p>
							<div className='crossIcon crossIcon1'>
								<Cross />
							</div>
						</div>
					</div>

					<div
						className='goal-field goal-2 d-flex col-12 '
						onClick={() => deleteGoal(1)}
					>
						<p className='numbers'>2</p>
						<div className='d-flex justify-content-between align-items-center col-12'>
							<p className='goals '>
								{t(`welcome.goals.${selectedGoals[1]}`)}
							</p>
							<div className='crossIcon'>
								<Cross />
							</div>
						</div>
					</div>
					<div
						className='goal-field goal-3 d-flex col-12'
						onClick={() => deleteGoal(2)}
					>
						<p className='numbers'>3</p>
						<div className='d-flex justify-content-between align-items-center col-12'>
							<p className='goals'>
								{t(`welcome.goals.${selectedGoals[2]}`)}
							</p>
							<div className='crossIcon'>
								<Cross />
							</div>
						</div>
					</div>
				</div>

				<div className='selectable-goals d-flex flex-wrap col-11'>
					{arrGoals?.map(
						(goal, i) =>
							!selectedGoals.includes(goal) && (
								<button
									key={i}
									className='goals-tags'
									onClick={() => addNewGoal(goal)}
								>
									<Text
										text={t(`welcome.goals.${goal}`)}
										size='1'
										color={2}
									/>
								</button>
							)
					)}
				</div>
				<div className='mainGoals__btnPag--container'>
					<ButtonPagination
						disabled={
							selectedGoals[0] === '' ||
							selectedGoals[1] === '' ||
							selectedGoals[2] === ''
						}
						onClick={toTrainingLevel}
						className={disableBtnNext()}
					/>
				</div>
			</div>
		</MainContainer>
	);
};

export default MainGoals;
