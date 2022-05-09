import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Text from '../../components/Text/Text';
import './Help.scss';
import HelpAccordion from './HelpAccordion';
import MainContainer from '../../components/MainContainer/MainContainer';

import Button from '../../components/Button/Button';
import useStyles from './useStyles';

const Help = () => {
	const { t } = useTranslation();
	const [showBtn, setShowBtn] = useState(true);
	const handleChangeBtn = () => {
		setShowBtn(false);
	}

	const styles = useStyles();

	return (
		<MainContainer color={2} text={t('help.main.help')} bg={1} back navbar scroll col='12' alignCenter>

			<Text bold size={4} text={t('help.main.aboutUs')} className='mt-4' />

			<Text font={2} size={5} text={t('help.main.elTemplo')} className='mb-3' />
			<img
				className='d-inline-block'
				width='100%'
				src='https://d500.epimg.net/cincodias/imagenes/2019/05/02/lifestyle/1556809482_591063_1556811610_noticia_normal.jpg'
				alt=''
			/>
			<div className={styles.textHelp1}>
				<Text justify='start' size={2} text={t('help.main.auxText1')} />
				<Text justify='start' size={2} text={t('help.main.auxText12')} />
				<Text justify='start' size={2} text={t('help.main.auxText13')} />
			</div>
			<span className={styles.p}></span>

			{showBtn ?
				<div className='col-12 mt-1' >
					<Button
						className='mb-3'
						onClick={handleChangeBtn}
						size='3'
						textSize={2}
						type={3}
						text={t('help.main.btn1')}
					/>
				</div>
				:

				<div >
					<div className={styles.card}>
						<Text font={2} size={5} text={t('help.main.mission')} />

						<div className={styles.textHelp2}>
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
