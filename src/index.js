import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import genereteStore from './redux/store';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import es from './i18n-lang-conf/languages/es/espanol';
import en from './i18n-lang-conf/languages/en/english';

i18next.init({
	interpolation: { escapeValue: false },
});

const store = genereteStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<I18nextProvider i18n={i18next}>
				<App />
			</I18nextProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
