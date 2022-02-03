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
// import useStyles from './useStyles';


const Dashboard = ({
	uno ='1',
	dos = '2',
	tres = '3',
	cuatro = '4',
	cinco = '5',
}) => {
	const { t } = useTranslation();
	const { firstName } = useSelector((store) => store.user);
	const [summary,setSummary]= useState(true);
	const handleChange=()=>{
		setSummary(false);
	}

	return (
		<MainContainer
			color={1}
			text={`${t('dashboard.main.welcome')} ${firstName}!`}
			shadow
			back
			col='12'
		>
			<div
				className='  d-flex flex-column align-items-center
					h-100 col-12 
                '
			>
				<div
					className=' d-flex align-items-center  py-5
					 col-11  
                '
				>
					<div className='col-3  d-flex h-100 align-items-center justify-content-center '>
						<UserImage />
					</div>
					<div className='col-9 h-100   '>
						<div className='col-12 d-flex  '>
							<Text
								className={'mx-4'}
								text={t('dashboard.main.level3')}
								bold
								size={4}
							/>
						</div>
						<div className='col-12   bg-light cajita'>
							<div className={`coloreado coloreado--${tres}`}></div>
						</div>
						<div>
							<Text justify={'end'} size='1' text={'N4'} />
						</div>
					</div>
				</div>

				<div className='col-12  d-flex  '>
					<WeeklyCalendar />
				</div>
{/* alinear bien el ver detalle */}
				<div className='col-12  d-flex  my-3 '>
					<div className='col-7  d-flex justify-content-center align-items-center'>
						<Text bold text={t('dashboard.main.summary')} />
					</div>
					<div className='col-5 d-flex'>
						<Button
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
						<div className='d-flex justify-content-center'>
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
				<div className='btn h-100 d-flex align-items-center  '>
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
