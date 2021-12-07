import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ROLES } from '../../constants/roles';

const Navbar = () => {
	const { t } = useTranslation();
	const { role } = useSelector((store) => store.user);

	return (
		<nav className='navbar navbar-dark bg-blue'>
			<div className='container'>
				{role === ROLES.ADMIN && (
					<Link to='/users-list'>{t('navbar.nav.users')}</Link>
				)}
				<Link to='/my-profile'>{t('navbar.nav.myProfile')}</Link>
				<Link to='/dashboard'>{t('navbar.nav.dashboard')}</Link>
				<Link to='/help'>{t('navbar.nav.help')}</Link>
				<Link to='/training'>{t('navbar.nav.training')}</Link>
			</div>
		</nav>
	);
};

export default Navbar;
