import { useTranslation } from 'react-i18next';
import Title from '../../components/Title/Title';
import '../../components/Title/title.scss';
import AuxText from '../../components/AuxText/AuxText';
import './Help.scss';

import Button from '../../components/Button/Button';
import '../../components/Button/button.scss';

const Help = () => {
	const { t } = useTranslation();

	return (
		<div classNameName=' container col-12 d-flex justify-content-center'>
			<div className='container  text-center cont1 col-11'>
				<Title type='title1' text={t('help.main.aboutUs')} />
				<Title type='title3' text={t('help.main.elTemplo')} />
				<img
					className='container d-inline-block  '
					src='https://d500.epimg.net/cincodias/imagenes/2019/05/02/lifestyle/1556809482_591063_1556811610_noticia_normal.jpg'
				/>

				<AuxText text={t('help.main.auxText1')} />
				<p className=' d-flex  justify-content-center align-items-center col-12 rectangle324  '>
					{t('help.main.rectangle324')}
				</p>

				<button
					className='btnColapsed'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#collapseExample'
				>
					{t('help.main.btn1')}
				</button>

				<div className='collapse ' id='collapseExample'>
					<div className='card card-body'>
						<Title type='title3' text={t('help.main.mission')} />
						<AuxText text={t('help.main.auxText2')} />
						<accordion>text</accordion>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Help;
