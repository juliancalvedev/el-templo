import Text from '../Text/Text';
import useStyles from './useStyles';
import './WeeklyCalendar.scss';
import { MONTHS } from '../../constants/months';
import { useTranslation } from 'react-i18next';
import TrainedDay from '../TrainedDay/TrainedDay';

// TODO Cambiar esta constante por los datos del BackEnd
const weeklyTraining = [
	{
		day: 'monday',
		number: 6,
		trained: true,
	},
	{
		day: 'tuesday',
		number: 7,
		trained: true,
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

const daysOfWeek = [
	'sunday',
	'monday',
	'tuesday',
	'wednesday',
	'thursday',
	'friday',
	'saturday',
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
