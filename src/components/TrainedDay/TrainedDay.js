import useStyles from './useStyles';
import './TrainedDay.scss';
import Text from '../Text/Text';

const TrainedDay = ({ day, number }) => {
	const styles = useStyles();

	return (
		<div className={styles.container}>
			<Text text={day} color={6} size='1' underline />
			<Text text={number} color={6} size='1' underline />
		</div>
	);
};

export default TrainedDay;
