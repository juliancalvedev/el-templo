import MainContainer from "../../components/MainContainer/MainContainer";
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import UserImage from "../../components/UserImage/UserImage";
import './Dashboard.scss';
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import ImgDashboard from "../../assets/images/ImgDashboard";
import WeeklyCalendar from "../../components/WeeklyCalendar/WeeklyCalendar";
import NavBar from '../../components/Navbar/Navbar';
import useStyles from './useStyles';



const Dashboard = ({colored='3'}) => {
	const { t } = useTranslation();
	const { firstName,level } = useSelector((store) => store.user);
	const [summary,setSummary]= useState(true);
	const handleChange=()=>{
		setSummary(false);
	}
const styles=useStyles({colored});
	return (
		<MainContainer
			color={1}
			text={`${t('dashboard.main.welcome')} ${firstName}!`}
			shadow
			back
			col='12'
		>
			<div
				className={styles.container}
			>
				<div
					className={styles.div}
				>
					<div className={styles.userimg}>
						<UserImage />
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
							<div className={styles.boxColor}
							></div>
						</div>
						<div>
							<Text justify={'end'} size='1' text={'N3'} />
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
						size={1}
							onClick={handleChange}
							type={3}
							text={t('dashboard.main.see')}
						/>
					</div>
				</div>
				{summary ? (
					<div>
						<div>
							<Text
								className='mx-2 '
								text={t('dashboard.main.progress')}
							/>
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
					<Button
						
						type={2}
						text={t('dashboard.main.btn')}
					/>
				</div>
				<NavBar />
			</div>
		</MainContainer>
	);
};

export default Dashboard;
