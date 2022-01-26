import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import Text from '../../components/Text/Text';
import useStyles from './useStyles';
import Button from '../../components/Button/Button';
import { useTranslation } from 'react-i18next';
import NivelationMuscle from '../../assets/images/NivelationMuscle';

const Nivelation = () => {
	const { t } = useTranslation();
	const styles = useStyles();
	return (
		<MainContainer back col='11' h-100>
			<div className={styles.textContainer}>
				<Text
					text={t('user.nivelation.nivelation')}
					size='4'
					font='1'
					bold
				/>

				<Text
					text={t('user.nivelation.paragraph')}
					className={styles.paragraph}
				/>
			</div>
			<div className={styles.imageContainer}>
				<NivelationMuscle className={styles.muscleImage} />
			</div>

			<div className={styles.container}>
				<Button text={t('global.next')} />
			</div>
		</MainContainer>
	);
};

export default Nivelation;
