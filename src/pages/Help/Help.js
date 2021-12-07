import React from 'react';
import { useTranslation } from 'react-i18next';

import Title from '../../components/Title/Title';
import AuxText from '../../components/AuxText/AuxText';

const Help = () => {
	const { t } = useTranslation();
	return (
		<div className='container d-flex justify-content-center align-items-center flex-column col'>
			<Title text={t('help.main.aboutUs')} />
			<h3>{t('help.main.elTemplo')}</h3>
			<AuxText text={t('help.main.auxText1')} />
		</div>
	);
};

export default Help;
