import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './languages/en/english.js';
import es from './languages/es/espanol.js';

export const getLastLangFromLocalStorage = () => {
	return window.localStorage.getItem('lang');
};
export const setCurrentLangToLocalStorage = (lang) => {
	return window.localStorage.setItem('lang', lang);
};

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
