import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
	const [t, i18n] = useTranslation();

	return (
		<div style={{ boxSizing: 'content-box' }}>
			<select
				className='form-select form-select-sm mb-3'
				aria-label='.form-select-sm example'
				style={{ width: '70px' }}
			>
				<option
					value='es'
					onClick={() => i18n.changeLanguage('es')}
					defaultValue
				>
					{t('global.spanish')}
				</option>

				<option value='en' onClick={() => i18n.changeLanguage('en')}>
					{t('global.english')}
				</option>
			</select>
		</div>
	);
};
