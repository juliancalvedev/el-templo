import useStyles from './useStyles';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ROLES } from '../../constants/roles';

import './Navbar.scss';
import IconDashboard from '../../assets/Icons/IconDashboard';

const Navbar = () => {
	const { t } = useTranslation();
	const { role } = useSelector((store) => store.user);
	const styles = useStyles();

	return (
		<nav className={styles.container}>
			{role === ROLES.ADMIN && (
				<Link to='/users-list'>{t('navbar.nav.users')}</Link>
			)}
			{/* <IconDashboard /> */}
			<Link to='/my-profile'>{t('navbar.nav.myProfile')}</Link>
			<Link to='/dashboard'>{t('navbar.nav.dashboard')}</Link>
			<Link to='/help'>{t('navbar.nav.help')}</Link>
			<Link to='/training'>{t('navbar.nav.training')}</Link>
		</nav>
	);
};

export default Navbar;
