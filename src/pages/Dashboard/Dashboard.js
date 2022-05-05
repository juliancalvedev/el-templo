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
import ProfileImgAndXP from '../../components/ProfileImgAndXP/ProfileImgAndXP'
import './Dashboard.scss';
import DashboardBodyInfo from '../../components/DashboardBodyInfo/DashboardBodyInfo';

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
			<ProfileImgAndXP />

			<div className={styles.calendar}>
				<WeeklyCalendar />
			</div>

			<div className={styles.progressSummary}>
				<div className={styles.summary} >
					<div
						style={{ marginLeft: '6px' }}
					>
						<Text bold text={t('dashboard.main.summary')} size={2} />
					</div>
					{summary &&
						<div >
							<Text bold color={4} text={t('dashboard.main.thisWeek')} size={2} />
						</div>
					}
				</div>
				{level > 0 &&
					<div className={styles.seeDetails}>
						<Button
							size={2}
							onClick={handleChange}
							type={3}
							text={t('dashboard.main.see')}
							textSize={1}
						/>
					</div>
				}
			</div>

			{summary && false ? (
				<div className='d-flex flex-column justify-content-start align-items-center'>
					<div className='col-10'>
						<Text className='mt-2 ' size='2' text={t('dashboard.main.progress')} />
					</div>
					<div className={styles.img}>
						<ImgDashboard />
					</div>
				</div>
			) : (
				<div className={styles.bodyInfoContainer}>
					{/* TODO pasar valores desde el backend */}
					<DashboardBodyInfo values={''} />
				</div>
			)}
			{level === 0 && <div className={styles.btn}>
				<Button size={3} type={2} text={t('dashboard.main.btn')} onClick={() => navigate(`/${PATHS.NIVELATION}`)} />
			</div>}
		</MainContainer>
	);
};

export default Dashboard;
