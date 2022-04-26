import useStyles from './useStyles';
import './TrainingCard.scss';
import Text from '../Text/Text';
import { useTranslation } from 'react-i18next';

const TrainingCard = ({
    title = 'Title',
    exercise1,
    exercise2,
}) => {
    const { t } = useTranslation()
    const styles = useStyles();
    const lang = localStorage.getItem('lang').toUpperCase();

    return (
        <div className={styles.trainingCardContainer} >
            <div className={styles.titleContainer}>
                <Text text={title} />
            </div>

            <div className={styles.exercisesContainer}>
                <div className={styles.exerciseLeft}>
                    <Text text={exercise1?.exercise[`title${lang}`]} size='1' bold />
                    <Text text={`${t('admin.routines.reps')}: ${exercise1?.reps}`} size='1' />
                    <Text text={`${t('admin.routines.times')}: ${exercise1?.times}`} size='1' />
                </div>

                <div className={styles.exerciseRight}>
                    <Text text={exercise2?.exercise[`title${lang}`]} size='1' bold />
                    <Text text={`${t('admin.routines.reps')}: ${exercise2?.reps}`} size='1' />
                    <Text text={`${t('admin.routines.times')}: ${exercise2?.times}`} size='1' />
                </div>
            </div>
        </div >
    );
};

export default TrainingCard;
