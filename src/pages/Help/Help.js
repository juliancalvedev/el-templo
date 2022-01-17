import { useTranslation } from 'react-i18next';
import { useState} from 'react';
import Text from '../../components/Text/Text';
import './Help.scss';
import HelpAccordion from './HelpAccordion';
import MainContainer from '../../components/MainContainer/MainContainer';
import TopSpacing from '../../components/TopSpacing/TopSpacing';

import Button from '../../components/Button/Button';
const Help = () => {
	const { t } = useTranslation();
	const [showBtn, setShowBtn] = useState(true);
	const handleChangeBtn= () => {
		setShowBtn(false);	
	}
	

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

			{showBtn?<Button 
				onClick={handleChangeBtn}
				type={3}
				text={t('help.main.btn1')}
				
			/>:

			<div >
				<div className='card p-0'>
					<Text font={2} size={5} text={t('help.main.mission')} />

					<div className='col-11 m-auto mt-2 mb-4'>
						<Text
							justify='start'
							size={2}
							text={t('help.main.auxText2')}
						/>
						<Text
							justify='start'
							size={2}
							text={t('help.main.auxText21')}
						/>
					</div>

					<HelpAccordion />
				</div>
			</div>}
		</MainContainer>
	);
};

export default Help;
