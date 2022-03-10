import { useLocation, useNavigate } from 'react-router-dom';
import Text from '../../components/Text/Text';
import { PATHS } from '../../constants/paths';
import useStyles from './useStyles';
import './AdminBar.scss';
import { useTranslation } from 'react-i18next';

const AdminBar = () => {
	const { t } = useTranslation();
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
					text={t('adminBar.users')}
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
					text={t('adminBar.exercises')}
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