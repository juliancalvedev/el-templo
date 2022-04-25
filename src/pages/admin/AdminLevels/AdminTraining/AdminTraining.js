import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import MainContainer from '../../../../components/MainContainer/MainContainer';
import TrainedDay from '../../../../components/TrainedDay/TrainedDay';
import TrainingCard from '../../../../components/TrainingCard/TrainingCard';
import useFetch from '../../../../hooks/useFetch';
import { getTrainingById } from '../../../../services/admin';

const AdminTraining = () => {
	const navigate = useNavigate();
	const { trainingDayId, trainingLevel, trainingDay, trainingBlock } =
		useLocation().state;

	const [trainingResponse, trainingError, apiCallTraining] = useFetch({
		service: () => getTrainingById({ id: trainingDayId }),
		globalLoader: true,
		callNow: true,
		callback: () => {},
	});

	return (
		<MainContainer
			back
			color={2}
			bg={1}
			col={12}
			text={`Nivel: ${trainingLevel} - Bloque: ${trainingBlock} - Día: ${trainingDay}`}
			navbar
			scroll
			alignCenter
		>
			<TrainingCard />
			<TrainingCard />
			<TrainingCard />
			<TrainingCard />
			<TrainingCard />
		</MainContainer>
	);
};

export default AdminTraining;
