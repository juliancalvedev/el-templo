import MainContainer from '../../components/MainContainer/MainContainer';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import UserImage from '../../components/UserImage/UserImage';
import './Dashboard.scss';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import ImgDashboard from '../../assets/images/ImgDashboard';
import WeeklyCalendar from '../../components/WeeklyCalendar/WeeklyCalendar';
import useStyles from './useStyles';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';
import InputAvatar from '../../components/InputAvatar/InputAvatar'

const Dashboard = () => {
	const { t } = useTranslation();
	const { firstName, level, img, experience } = useSelector(
		(store) => store.user
	);

	const navigate = useNavigate();

	const [summary, setSummary] = useState(true);
	const handleChange = () => {
		setSummary(false);
	};
	const styles = useStyles();
	const xp = (100 * experience) / 24 + 4;

	return (
		<MainContainer
			color={1}
			text={`${t('dashboard.main.welcome')} ${firstName ? firstName : ''}`}
			shadow
			col='12'
			scroll
			navbar
		>
			<div className={styles.div}>

				<div className={styles.userimg} >
					<InputAvatar img={img} />
				</div>

				<div className={styles.containerColor}>
					<div className={styles.textLevel}>
						<Text
							className={'mx-4'}
							text={`${t('dashboard.main.level')} ${level}`}
							bold
							size={4}
						/>
					</div>
					<div className={styles.boxcontainer}>
						<div className={styles.boxColor} style={{ width: `${xp}%` }}></div>
					</div>
					<div>
						<Text
							justify={'end'}
							size='1'
							text={`${t('dashboard.main.level')} ${level + 1}`}
						/>
					</div>
				</div>
			</div>

			<div className={styles.calendar}>
				<WeeklyCalendar />
			</div>
			{/* alinear bien el ver detalle */}
			<div className={styles.line}>
				<div className={styles.summary}>
					<Text bold text={t('dashboard.main.summary')} />
				</div>
				<div className={styles.see}>
					<Button
						size={2}
						onClick={handleChange}
						type={3}
						text={t('dashboard.main.see')}
					/>
				</div>
			</div>
			{summary ? (
				<div>
					<div>
						<Text className='mx-2 ' text={t('dashboard.main.progress')} />
					</div>
					<div className={styles.img}>
						<ImgDashboard />
					</div>
				</div>
			) : (
				<div>
					<Text
						text={
							'*partes de cuerpo y porcentaje con iconos y numeros*horas entrenadas a la semana con icono'
						}
					/>
				</div>
			)}
			<div className={styles.btn}>
				<Button size={3} type={2} text={t('dashboard.main.btn')} onClick={() => navigate(`/${PATHS.NIVELATION}`)} />
			</div>
		</MainContainer>
	);
};

export default Dashboard;
