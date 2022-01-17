import { useEffect, useState } from 'react';
import { axiosInstance } from '../../../axios/axiosInstance';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './mainGoals.scss';

<<<<<<< HEAD
import Cross from '../../../assets/Icons/Cross';
import Text from '../../../components/Text/Text';
import MainContainer from '../../../components/MainContainer/MainContainer';
import './mainGoals.scss';
=======
import Text from '../../../components/Text/Text';
>>>>>>> 4dd5d0aab522724e6ff068d9073bc8c46023965b
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 4dd5d0aab522724e6ff068d9073bc8c46023965b
				</div>

				<div className='showing-inputs d-flex flex-column align-items-center col-11'>
					<div
						className='goal-field goal-1 d-flex col-12'
						onClick={() => deleteGoal(0)}
					>
						<p className='numbers'>1</p>
						<div className='d-flex justify-content-between align-items-center col-12 '>
							<p
								className='goals goal1'
								style={{ marginLeft: '23px' }}
							>
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

<<<<<<< HEAD
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
=======
			<ButtonPagination
				disabled={
					selectedGoals[0] === '' ||
					selectedGoals[1] === '' ||
					selectedGoals[2] === ''
				}
				onClick={toTrainingLevel}
			/>
		</div>
>>>>>>> 4dd5d0aab522724e6ff068d9073bc8c46023965b
		</MainContainer>
	);
};

export default MainGoals;
