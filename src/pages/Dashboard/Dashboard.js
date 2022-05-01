import MainContainer from '../../components/MainContainer/MainContainer';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import ImgDashboard from '../../assets/images/ImgDashboard';
import WeeklyCalendar from '../../components/WeeklyCalendar/WeeklyCalendar';
import useStyles from './useStyles';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';
import InputAvatar from '../../components/InputAvatar/InputAvatar'
import './Dashboard.scss';

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
			alignCenter
		>
			<div className={styles.levelContainer}>
				<div className={styles.userImg} >
					<InputAvatar img={img} />
				</div>

				<div className={styles.containerColor}>
					<div className={styles.textOverLevelContainer}>
						<Text
							className={'mx-4'}
							text={`${t('dashboard.main.level')} ${level}`}
							bold
							size={3}
						/>
						<Text
							className={'mx-4'}
							text={`${Math.trunc(xp)}%`}
							bold
							size={1}
						/>

					</div>
					<div className={styles.boxcontainer}>
						<div className={styles.boxColor} style={{ width: `${xp}%` }}></div>
					</div>
					<div className={styles.textUnderLevelContainer}>
						<Text
							justify={'end'}
							size='1'
							color={5}
							bold
							text={`${t('dashboard.main.level')} ${level + 1}`}
						/>
					</div>
				</div>
			</div>

			<div className={styles.calendar}>
				<WeeklyCalendar />
			</div>

			<div className={styles.progressSummary}>
				<div className={styles.summary} >
					<Text bold text={t('dashboard.main.summary')} size={2} />
				</div>
				<div className={styles.seeDetails}>
					{level > 0 &&
						<Button
							size={2}
							onClick={handleChange}
							type={3}
							text={t('dashboard.main.see')}
						/>
					}
				</div>
			</div>

			{summary ? (
				<div className='d-flex flex-column justify-content-start align-items-center'>
					<div className='col-10'>
						<Text className='mt-2 ' size='2' text={t('dashboard.main.progress')} />
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
