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
import { useState } from 'react';

const Navbar = () => {
	const { t } = useTranslation();
	const { role } = useSelector((store) => store.user);
	const styles = useStyles();
	const { pathname } = useLocation();

	console.log(pathname);

	return (
		<nav className={styles.navbarContainer}>
			<div className={styles.iconsContainer}>
				{role === ROLES.ADMIN && (
					<Link to='/users-list'>{t('navbar.nav.users')}</Link>
				)}

				<Link to='/dashboard'>
					{pathname === '/dashboard' ? (
						<IconDashboardActive />
					) : (
						<IconDashboard />
					)}
				</Link>
				<Link to='/training'>
					{pathname === '/training' ? (
						<IconMuscleActive />
					) : (
						<IconMuscle />
					)}
				</Link>
				<Link to='/my-profile'>
					{pathname === '/my-profile' ? (
						<IconProfileActive />
					) : (
						<IconProfile />
					)}
				</Link>
				<Link to='/help'>
					{pathname === '/help' ? <IconHelpActive /> : <IconHelp />}
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
