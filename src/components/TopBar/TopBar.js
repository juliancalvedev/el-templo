import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { textStyles, backBtnStyles, navStyles } from './topBarStyles';
import { useTranslation } from 'react-i18next';
import { ROUTES } from './TopBarTextRoutes';

import Title from '../../components/Title/Title';

const TopBar = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const currentLocation = useLocation().pathname;

	const [mainPath, setMainPath] = useState(false);

	const back = () => navigate(-1);

	const translatingPath = (path) => {
		return ROUTES[path];
	};

	useEffect(() => {
		if (currentLocation === '/') {
			setMainPath(true);
		} else {
			setMainPath(false);
		}
	});

	return (
		<div>
			<nav className='navbar-light bg-dark' style={navStyles}>
				{!mainPath && ( // Si está en Main, no muestra el botón de Volver.
					<button
						className='navbar-brand'
						style={backBtnStyles}
						onClick={back}
					>
						{'ᐸ'}
					</button>
				)}

				<Title
					style={textStyles}
					text={t(translatingPath(currentLocation))}
				/>
			</nav>
		</div>
	);
};

export default TopBar;
