import useStyles from './useStyles';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ROLES } from '../../constants/roles';

import './Navbar.scss';
import IconDashboard from '../../assets/Icons/IconDashboard';
import IconDashboardActive from '../../assets/Icons/IconDashboardActive';
import IconMuscle from '../../assets/Icons/IconMuscle';
import IconMuscleActive from '../../assets/Icons/IconMuscleActive';
import IconProfile from '../../assets/Icons/IconProfile';
import IconProfileActive from '../../assets/Icons/IconProfileActive';
import IconHelp from '../../assets/Icons/IconHelp';
import IconHelpActive from '../../assets/Icons/IconHelpActive';
import { PATHS } from '../../constants/paths';

const Navbar = () => {
	const { t } = useTranslation();
	const { role, level } = useSelector((store) => store.user);

	const styles = useStyles();
	const { pathname } = useLocation();

	const redirection = () => {
		let path;
		if (level < 1) {
			path = '/nivelation';
		} else {
			path = '/training';
		}
		return path;
	};

	return (
		<nav className={styles.navbarContainer}>
			<div className={styles.iconsContainer}>
				{role === ROLES.ADMIN && (
					<Link to={PATHS.ADMIN}>{t('navbar.nav.admin')}</Link>
				)}

				<Link to={PATHS.DASHBOARD}>
					{pathname === PATHS.DASHBOARD ? (
						<IconDashboardActive />
					) : (
						<IconDashboard />
					)}
				</Link>
				<Link to={redirection()}>
					{pathname === PATHS.TRAINING ? (
						<IconMuscleActive />
					) : (
						<IconMuscle />
					)}
				</Link>
				<Link to={PATHS.MY_PROFILE}>
					{pathname === PATHS.MY_PROFILE ? (
						<IconProfileActive />
					) : (
						<IconProfile />
					)}
				</Link>
				<Link to={PATHS.HELP}>
					{pathname === PATHS.HELP ? (
						<IconHelpActive />
					) : (
						<IconHelp />
					)}
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
