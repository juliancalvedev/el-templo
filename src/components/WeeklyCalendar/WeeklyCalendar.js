import Text from '../Text/Text';
import useStyles from './useStyles';
import './WeeklyCalendar.scss';
import { MONTHS } from '../../constants/months';
import { useTranslation } from 'react-i18next';
import TrainedDay from '../TrainedDay/TrainedDay';

const weeklyTraining = [
	{
		day: 'monday',
		number: 6,
		trained: false,
	},
	{
		day: 'tuesday',
		number: 7,
		trained: false,
	},
	{
		day: 'wednesday',
		number: 8,
		trained: false,
	},
	{
		day: 'thursday',
		number: 9,
		trained: false,
	},
	{
		day: 'friday',
		number: 10,
		trained: false,
	},
	{
		day: 'saturday',
		number: 11,
		trained: false,
	},
	{
		day: 'sunday',
		number: 12,
		trained: false,
	},
];

const WeeklyCalendar = () => {
	const styles = useStyles();
	const { t } = useTranslation();

	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth();

	return (
		<div className={styles.mainContainer}>
			<div className={styles.titleContainer}>
				<Text
					text={`${t(
						`month.${MONTHS[currentMonth]}`
					)} ${currentYear}`}
					color={2}
					size='3'
					bold
				/>
			</div>
			<div className={styles.daysContainer}>
				{weeklyTraining.map(({ day, number, trained }) => (
					<TrainedDay day={day} number={number} />
				))}
			</div>
		</div>
	);
};

export default WeeklyCalendar;
