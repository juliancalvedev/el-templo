import React from 'react';
import { useTranslation } from 'react-i18next';

const TestingComponent = () => {
	const [t] = useTranslation();

	return (
		<div>
			<h1 style={{ color: 'white' }}>{t('global.next')}</h1>
			<h1 style={{ color: 'white' }}>{t('global.accept')}</h1>
			<h1 style={{ color: 'white' }}>{t('global.errors.required')}</h1>
			<h1 style={{ color: 'white' }}>
				{t('global.landing.haveAccount')}
			</h1>
		</div>
	);
};

export default TestingComponent;
