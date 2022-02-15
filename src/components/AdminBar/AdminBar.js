import { useLocation, useNavigate } from 'react-router-dom';
import Text from '../../components/Text/Text';
import { PATHS } from '../../constants/paths';
import useStyles from './useStyles';
import './AdminBar.scss';

const AdminBar = () => {
	const styles = useStyles();
	const currentLocation = useLocation().pathname.substring(1);

	const navigate = useNavigate();

	const toUsersList = () => {
		navigate(`/${PATHS.ADMIN_USERS_LIST}`);
	};
	const toExercises = () => {
		navigate(`/${PATHS.ADMIN_EXERCISES}`);
	};

	return (
		<div className={styles.adminBarContainer}>
			<div>
				<Text
					text={'Usuarios'}
					onClick={toUsersList}
					color={
						currentLocation === 'admin-users-list'
							? 'linkSelected'
							: 'link'
					}
					underline
				/>
			</div>

			<div>
				<Text
					text={'Ejercicios'}
					onClick={toExercises}
					color={
						currentLocation === 'admin-exercises'
							? 'linkSelected'
							: 'link'
					}
					underline
				/>
			</div>
		</div>
	);
};

export default AdminBar;
