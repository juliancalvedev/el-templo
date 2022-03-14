import AdminBar from '../../../components/AdminBar/AdminBar';
import MainContainer from '../../../components/MainContainer/MainContainer';
import Button from '../../../components/Button/Button';
import {useNavigate} from 'react-router-dom';
import {PATHS} from '../../../constants/paths';

const AdminExercises = () => {
	const navigate = useNavigate();

	const navigateToTags = () => navigate(`/${PATHS.ADMIN_TAGS}`);

	return (
		<MainContainer col='12'>
			<div className='flex-d justify-content-end'>
				<AdminBar />

				<div className='m-3'>
					<Button text='Adminsitrar Tags' onClick={navigateToTags} className='m-3' />
					<Button text='Adminsitrar Entrenamientos' className='m-3' />
					<Button text='Adminsitrar Ejercicios' className='m-3' />
				</div>
			</div>
		</MainContainer>
	);
};

export default AdminExercises;
