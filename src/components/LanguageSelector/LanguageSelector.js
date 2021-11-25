import React from 'react';
import { useTranslation } from 'react-i18next';
import { setNewLangToLocalStore } from '../../i18n-lang-conf';

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
					onClick={() => setNewLangToLocalStore('es')}
					defaultValue
				>
					{t('global.spanish')}
				</option>

				<option value='en' onClick={() => setNewLangToLocalStore('en')}>
					{t('global.english')}
				</option>
			</select>
		</div>
	);
};
