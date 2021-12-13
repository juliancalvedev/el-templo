import { useEffect, useState } from 'react';
import { axiosInstance } from '../../../axios/axiosInstance';
import AuxText from '../../../components/AuxText/AuxText';
import Title from '../../../components/Title/Title';
import './mainGoals.scss';

const MainGoals = () => {
	const [arrGoals, setArrGoals] = useState([]);
	const [selectedGoals, setSelectedGoals] = useState(['', '', '']);

	const getGoals = async () => {
		const response = await axiosInstance.get('/user/get-goals');
		const goals = await response?.data?.data?.goals;
		setArrGoals(goals);
	};

	useEffect(() => {
		getGoals();
	}, []);
	console.log(arrGoals);

	return (
		<div className='container d-flex justify-content-center align-items-center flex-column'>
			<Title text={'Contanos'} />
			<AuxText text={'¿Cuáles son tus objetivos principales?'} />

			<div className='showing-inputs'>
				<div className='goal-field goal-1 d-flex'>
					<p className='numbers'>1</p>
					<p className='goals'>{selectedGoals[0]}</p>
				</div>
				<div className='goal-field goal-2 d-flex'>
					<p className='numbers'>2</p>
					<p className='goals'>{selectedGoals[1]}</p>
				</div>
				<div className='goal-field goal-3 d-flex'>
					<p className='numbers'>3</p>
					<p className='goals'>{selectedGoals[2]}</p>
				</div>
			</div>

			<div className='selectable-goals d-flex flex-wrap'>
				{arrGoals?.map((g, i) => (
					<p key={i} className='goals-tags'>
						{g}
					</p>
				))}
			</div>
		</div>
	);
};

export default MainGoals;
