import MainContainer from "../../components/MainContainer/MainContainer";
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import UserImage from "../../components/UserImage/UserImage";
import './Dashboard.scss';
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import ImgDashboard from "../../assets/images/ImgDashboard";



const Dashboard = ({tres='3'}) => {
    const { t } = useTranslation();
    const { firstName } = useSelector((store) => store.user);
  
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
						className=' d-flex align-items-center  w-80 bg-info
					h-25 col-11  
                '
					>
						<div className='col-3  '>
							<UserImage />
						</div>
						<div className='col-9 h-100  '>
							<div className='col-12 mt-4 d-flex  '>
								<Text
									className={'mx-4'}
									text={'Nivel 3'}
									bold
									size={4}
								/>
							</div>
							<div className='col-12  mt-3 bg-light cajita'>
								<div className={`coloreado coloreado--${tres}`}></div>
							</div>
						</div>
					</div>
					{/*ESPACIO PARA CALENDARIO */}
					<div className='col-12  d-flex  '>calendary</div>

					<div className='col-12  d-flex  '>
						<div className='col-7  d-flex justify-content-center align-items-center'>
							<Text bold text={'Resumen de mi progreso'} />
						</div>
						<div className='col-5 d-flex'>
							<Button
								// onClick={handleChangeBtn}
								type={3}
								text={'VER DETALLE'}
							/>
						</div>
					</div>
					<div>
						<Text
							text={
								'A medida que avances en tus entrenamientos, acá se van a ver tus progresos.'
							}
						/>
					</div>
					<div>
						<ImgDashboard/>
						</div>		








				</div>
			</MainContainer>
		);
};

export default Dashboard;
