import useStyles from './useStyles';
import './TrainingCard.scss';
import Text from '../Text/Text';

const TrainingCard = () => {
	const styles = useStyles();
	return (
		<div className={styles.trainingCardContainer}>
			<div className={styles.titleContainer}>
				<Text text={'Título'} />
			</div>

			<div className={styles.exercisesContainer}>
				<div className={styles.exerciseLeft}>
					<Text text='Super Abdominal Mixto' />
					<Text text='Reps: 4' size='1' />
					<Text text='Veces: 2' size='1' />
				</div>

				<div className={styles.exerciseRight}>
					<Text text='Dominadas' />
					<Text text='Reps: 4' size='1' />
					<Text text='Veces: 2' size='1' />
				</div>
			</div>
		</div>
	);
};

export default TrainingCard;
