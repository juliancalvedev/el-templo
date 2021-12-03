import {  Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';

const Navbar = () => {
	const { t } = useTranslation();
    return (
        <nav className='navbar navbar-dark bg-blue'>
            <div className='container'>
                
				<Link to='/my-profile'>{t('navbar.nav.myProfile')}</Link>
				<Link to='/dashboard'>{t('navbar.nav.dashboard')}</Link>
				<Link to='/help'>{t('navbar.nav.help')}</Link>
				<Link to='/training'>{t('navbar.nav.training')}</Link>
			</div>
        </nav>
			
		);
}

export default Navbar


