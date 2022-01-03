import { useSelector } from 'react-redux';

const TrainingStatus = () => {
	const { trainingLevel } = useSelector((store) => store.user);

	let level;
	switch (trainingLevel) {
		case 1:
			level = 'principiante';
			break;
		case 2:
			level = 'intermedio';
			break;
		case 3:
			level = 'avanzado';
			break;
		case 4:
			level = 'aficionado';
			break;
		case 5:
			level = 'experto';
			break;
		default:
			level = '';
			break;
	}

	return level;
};
export default TrainingStatus;
