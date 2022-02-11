import { useNavigate } from 'react-router-dom';
import MainContainer from '../../components/MainContainer/MainContainer';
import Text from '../../components/Text/Text';
import { PATHS } from '../../constants/paths';

const Admin = () => {
	const navigate = useNavigate();

	const toUsersList = () => {
		navigate(`/${PATHS.USERS_LIST}`);
	};
	const toExercises = () => {
		navigate(`/${PATHS.ADMIN_EXERCISES}`);
	};

	return (
		<MainContainer back>
			<nav
				className='d-flex justify-content-around'
				style={{ cursor: 'pointer' }}
			>
				<Text
					text={'Usuarios'}
					onClick={toUsersList}
					bold
					color={'link'}
					underline
				/>
				<Text
					text={'Ejercicios'}
					onClick={toExercises}
					bold
					color={'link'}
					underline
				/>
			</nav>
		</MainContainer>
	);
};

export default Admin;
