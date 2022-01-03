import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TOPBAR_TEXTS } from '../../constants/paths';
import './TopBar.scss';

import Title from '../../components/Title/Title';

const TopBar = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const currentLocation = useLocation().pathname.substring(1);

	const [mainPath, setMainPath] = useState(true);

	const back = () => navigate(-1);

	const translatingPath = (currentPath) => {
		return TOPBAR_TEXTS[currentPath];
	};

	useEffect(() => {
		if (currentLocation === '') {
			setMainPath(false);
		} else {
			setMainPath(true);
		}
	});

	return (
		<div className='col-12'>
			<nav className='navbar-light bg-light navStyles col-12'>
				{mainPath ? (
					<button
						className='navbar-brand backBtnStyles'
						onClick={back}
					>
						{'ᐸ'}
					</button>
				) : (
					<button className='navbar-brand backBtnStyles onHide'>
						{'ᐸ'}
					</button>
				)}

				<Title
					type='title5'
					customStyles='textStyles'
					text={t(translatingPath(currentLocation))}
				/>
			</nav>
		</div>
	);
};

export default TopBar;
