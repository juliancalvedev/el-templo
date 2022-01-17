import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import './styles/icons.scss';
import Toast from './components/Toast/Toast';

import i18n from './i18n-lang-conf';
import { checkLoggedUserAction } from './redux/auth';
import { cleanErrorAction } from './redux/api';
import RouterApp from './Router/RouterApp';
import './styles/variables.scss';
import Loading from './components/Loading/Loading';

function App() {
	const { isError, message, loading } = useSelector((store) => store.api);
	//Integrates i18n to the whole App.
	i18n.options.interpolation.defaultVariables = {
		companyName: 'El Templo',
	};

	const { t } = useTranslation();

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(checkLoggedUserAction());
	}, []);

	useEffect(() => {
		if (isError) {
			setTimeout(() => {
				dispatch(cleanErrorAction());
			}, 4000);
		}
	}, [isError]);

	return (
		<div className='App container-fluid' id="App">
			{loading && <Loading />}
			{isError && <Toast message={t(`errors.${message}`)} />}
			<RouterApp />
		</div>
	);
}

export default App;
