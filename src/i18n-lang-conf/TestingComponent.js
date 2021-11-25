import React from 'react';
import { useTranslation } from 'react-i18next';

// Testing Component, can be deleted.
const TestingComponent = () => {
	const [t] = useTranslation();

	return (
		<div>
			<h1 style={{ color: 'wheat' }}>{t('global.next')}</h1>
			<h1 style={{ color: 'wheat' }}>{t('global.errors.required')}</h1>
			<h1 style={{ color: 'wheat' }}>{t('auth.landing.btnLogin')}</h1>
		</div>
	);
};

export default TestingComponent;
