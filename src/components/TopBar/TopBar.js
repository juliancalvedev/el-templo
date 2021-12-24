import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { textStyles, backBtnStyles, onHide, navStyles } from './TopBarStyles';
import { useTranslation } from 'react-i18next';
import { TOPBAR_TEXTS } from '../../constants/paths';

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
		<div>
			<nav className='navbar-light bg-light' style={navStyles}>
				{mainPath ? (
					<button
						className='navbar-brand'
						style={backBtnStyles}
						onClick={back}
					>
						{'ᐸ'}
					</button>
				) : (
					<button
						className='navbar-brand'
						style={(backBtnStyles, onHide)}
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
