import { useTranslation } from 'react-i18next';
import Text from '../../components/Text/Text';
import './Help.scss';
import HelpAccordion from './HelpAccordion';
import MainContainer from '../../components/MainContainer/MainContainer';
import TopSpacing from '../../components/TopSpacing/TopSpacing';
import { useRef, useState } from 'react';

const Help = () => {
	const { t } = useTranslation();
	const getBtn = document.querySelector('.btnCollapsed');
	const removeBtn = () => {
		getBtn.remove();
	};
	const buttonHidden = useRef();
	const onClickbuttonHidden = () => (buttonHidden.current.hidden='hidden');

	const [showButton, setShowButton] = useState(true);
	const onClickShow = () => setShowButton(false);

	return (
		<MainContainer color={2} text={t('help.main.help')} bg={1} back scroll>
			<TopSpacing scroll />
			<Text bold size={4} text={t('help.main.aboutUs')} />

			<Text font={2} size={5} text={t('help.main.elTemplo')} />
			<img
				className='d-inline-block'
				width='100%'
				src='https://d500.epimg.net/cincodias/imagenes/2019/05/02/lifestyle/1556809482_591063_1556811610_noticia_normal.jpg'
				alt=''
			/>
			<div className='col-11 m-auto my-3 d-flex align-items-start flex-column'>
				<Text justify='start' size={2} text={t('help.main.auxText1')} />
				<Text justify='start' size={2} text={t('help.main.auxText12')} />
				<Text justify='start' size={2} text={t('help.main.auxText13')} />
			</div>
			<p className=' d-flex  justify-content-center align-items-center col-12 rectangle324 py-3 '>
				{t('help.main.rectangle324')}
			</p>

			{showButton?<button
				className='btnCollapsed col-6 '
				type='button'
				data-bs-toggle='collapse'
				data-bs-target='#collapseExample'
				onClick={onClickShow}
			>
				{t('help.main.btn1')}
			</button>:null}
			<div className='collapse ' id='collapseExample'>
				<div className='card p-0'>
					<Text font={2} size={5} text={t('help.main.mission')} />

					<div className='col-11 m-auto mt-2 mb-4'>
						<Text text={t('help.main.auxText2')} />
						<Text text={t('help.main.auxText21')} />
					</div>
			
						<HelpAccordion/>					
				</div>
			</div>
		</MainContainer>
	);
};

export default Help;
