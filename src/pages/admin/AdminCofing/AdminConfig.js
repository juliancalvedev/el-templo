import AdminBar from '../../../components/AdminBar/AdminBar';
import MainContainer from '../../../components/MainContainer/MainContainer';
import Button from '../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../constants/paths';

const AdminConfigScreen = () => {
	const navigate = useNavigate();

	const navigateToTags = () => navigate(`/${PATHS.ADMIN_TAGS}`);
	const navigateToExercises = () => navigate(`/${PATHS.ADMIN_EXERCISES}`)

	return (
		<MainContainer col='12' navbar scroll>
			<div className='flex-d flex-column justify-content-center h-100'>
				<AdminBar />

				<div className='d-flex flex-column align-items-center justify-content-around h-100'>
					<Button
						text='Adminsitrar Tags'
						onClick={navigateToTags}
						size={2}
						className='mt-5'
					/>
					<Button
						text='Adminsitrar Entrenamientos'
						size={2}
						className='mt-3'
					/>
					<Button
						text='Adminsitrar Ejercicios'
						onClick={navigateToExercises}
						size={2}
						className='mt-3'
					/>
				</div>
			</div>
		</MainContainer>
	);
};

export default AdminConfigScreen;
