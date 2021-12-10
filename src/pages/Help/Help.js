import { useTranslation } from 'react-i18next';

import Title from '../../components/Title/Title';
import AuxText from '../../components/AuxText/AuxText';

const Help = () => {
	const { t } = useTranslation();
	return (
		<div>
			<div>
				<Title text={t('help.main.aboutUs')} />
				<h3>{t('help.main.elTemplo')}</h3>
			</div>
			<div>
				<img
					className='container d-inline-block position-absolute start-0'
					src='https://d500.epimg.net/cincodias/imagenes/2019/05/02/lifestyle/1556809482_591063_1556811610_noticia_normal.jpg'
				/>
			</div>
			<div >
				<AuxText  text={t('help.main.auxText1')} />
				</div>
		</div>
	);
};

export default Help;
