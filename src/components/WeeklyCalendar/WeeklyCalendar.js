import Text from '../Text/Text';
import useStyles from './useStyles';
import './WeeklyCalendar.scss';
import { MONTHS } from '../../constants/months';
import { useTranslation } from 'react-i18next';
import TrainedDay from '../TrainedDay/TrainedDay';

// TODO Cambiar esta constante por los datos del BackEnd
const weeklyTraining = [
	{
		day: 'Mon',
		number: 6,
		trained: true,
	},
	{
		day: 'Tue',
		number: 7,
		trained: true,
	},
	{
		day: 'Wed',
		number: 8,
		trained: false,
	},
	{
		day: 'Thu',
		number: 9,
		trained: false,
	},
	{
		day: 'Fri',
		number: 10,
		trained: false,
	},
	{
		day: 'Sat',
		number: 11,
		trained: false,
	},
	{
		day: 'Sun',
		number: 12,
		trained: false,
	},
];

const daysOfWeek = [
	'Sun',
	'Mon',
	'Tue',
	'Wed',
	'Thu',
	'Fri',
	'Sat',
];

const WeeklyCalendar = () => {
	const styles = useStyles();
	const { t } = useTranslation();

	const numberDay = new Date().getDay();
	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth();
	const currentDay = daysOfWeek[numberDay];

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
					<TrainedDay
						key={number}
						day={t(`daysShort.${day}`)}
						number={number}
						trained={trained}
						today={day === currentDay}
					/>
				))}
			</div>
		</div>
	);
};

export default WeeklyCalendar;
