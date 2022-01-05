import { useTranslation } from 'react-i18next';
import Title from '../../components/Title/Title';
import '../../components/Title/title.scss';
import AuxText from '../../components/AuxText/AuxText';
import './Help.scss';

import '../../components/Button/button.scss';
import HelpAccordion from './HelpAccordion';
import MainContainer from '../../components/MainContainer/MainContainer';
import Text from '../../components/Text/Text';

const Help = () => {
	const { t } = useTranslation();
	const getBtn = document.querySelector('.btnCollapsed');
	const removeBtn = () => {
		getBtn.remove();
	};

	return (
		<MainContainer>
			<div className='text-center col-12'>
				<Text bold size={4} text={t('help.main.aboutUs')} />
				<Text title text={t('help.main.elTemplo')} />
				<img
					className='d-inline-block'
					width='100%'
					src='https://d500.epimg.net/cincodias/imagenes/2019/05/02/lifestyle/1556809482_591063_1556811610_noticia_normal.jpg'
				/>
				<div className='col-11 m-auto my-1'>
					<AuxText text={t('help.main.auxText1')} />
					<AuxText text={t('help.main.auxText12')} />
					<AuxText text={t('help.main.auxText13')} />
				</div>
				<p className=' d-flex  justify-content-center align-items-center col-12 rectangle324  '>
					{t('help.main.rectangle324')}
				</p>

				<button
					className='btnCollapsed col-6 '
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#collapseExample'
					onClick={removeBtn}
				>
					{t('help.main.btn1')}
				</button>

				<div className='collapse ' id='collapseExample'>
					<div className='card p-0'>
						<Title type='title3' text={t('help.main.mission')} />
						<div className='col-11 m-auto my-1'>
							<AuxText text={t('help.main.auxText2')} />
							<AuxText text={t('help.main.auxText21')} />
						</div>

						<HelpAccordion />
					</div>
				</div>
			</div>
		</MainContainer>
	);
};

export default Help;
