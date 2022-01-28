import useStyles from './useStyles';
import './Exercise.scss';
import Text from '../Text/Text';
import TotalTime from '../TotalTime/TotalTime';

const Exercise = () => {
	const styles = useStyles();

	return (
		<div className={styles.exerciseContainer}>
			<div className={styles.titleContainer}>
				<div className={styles.titleText}>
					<div>
						<Text text='Ejercicio n°1' bold size='4' />
					</div>
					<div className={styles.exerciseName}>
						<Text text='Abdominales bolita' bold size='3' />
					</div>
				</div>
				<div className={styles.totalTime}>
					<TotalTime />
				</div>
			</div>

			<div className={styles.gifContainer}></div>
		</div>
	);
};

export default Exercise;
