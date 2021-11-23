import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './languages/en';
import es from './languages/es';

export const getLastLangFromLocalStorage = () =>
	window.localStorage.getItem('lang');

export const setCurrentLangToLocalStorage = (lang) =>
	window.localStorage.setItem('lang', lang);

const defaultLang = getLastLangFromLocalStorage() || 'es';

const resources = {
	en: {
		translation: en,
	},
	es: {
		translation: es,
	},
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: defaultLang,
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

const updateLang = () => {
	const currentLang = getLastLangFromLocalStorage();
	if (!currentLang) {
		setCurrentLangToLocalStorage('es');
	}
};

updateLang();

export default i18n;
