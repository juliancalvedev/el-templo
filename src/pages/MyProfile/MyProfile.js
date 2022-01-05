import './MyProfile.scss';
import AuxText from '../../components/AuxText/AuxText';
import Button from '../../components/Button/Button';
import { useSelector } from 'react-redux';
import { cutDate } from '../../utils/date';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';
import GenericTicket from '../../components/GenericTicket/GenericTicket';
import { logoutAction } from '../../redux/auth';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import EditUserIcon from './EditUserIcon';
import MainContainer from '../../components/MainContainer/MainContainer';
import UserImage from '../../components/UserImage/UserImage';
import ImportantBar from '../../components/ImportantBar/ImportantBar';
import { Link } from 'react-router-dom';
import { UserTrainingLevel } from '../../constants/userLevel';
import Title from '../../components/Title/Title';

const MyProfile = () => {
	const { t } = useTranslation();
	const level = UserTrainingLevel();
	const navigate = useNavigate();

	const { startEnabledDate, endEnabledDate, goals, height, weight } =
		useSelector((store) => store.user);
	const { trainingLevel } = useSelector((store) => store.user.trainingInfo);

	const handleNavigate = () => {
		navigate(`/${PATHS.CHANGE_USER_PASSWORD}`);
	};
	const dispatch = useDispatch();
	const onLogout = () => {
		dispatch(logoutAction());
	};

	return (
		<MainContainer top>
			<div className=' col-12 my-profile-body flex-col'>
				<div className='d-flex col-11  user-level-box justify-content-between '>
					<div className=' col-4 h-100 justify-content-center d-flex align-items-center'>
						<UserImage />
					</div>
					<div className='d-flex flex-column col-6 h-100 '>
						{/* LEVEL AND TEXT */}
						<div className=' level-and-profile mt-3 col-12 d-flex justify-content-between '>
							<div className=' d-flex justify-content-center col-9 levelAndEdit'>
								<Title
									type='title5'
									customStyles=' align-self-center'
									text={`${t(
										'user.myProfile.level'
									)} ${trainingLevel}`}
								/>
							</div>
						</div>
						{/* LEVEL AND TEXT */}
						<div className='userLevel-box-texts col-12'>
							<div className='d-flex flex-column justify-content-center date-container '>
								<AuxText
									mode='nowrap'
									text={`${t(
										'user.myProfile.completedTrainings'
									)}: 00`}
								/>

								<AuxText
									mode='nowrap'
									className='userProfileDate'
									text={`${t(
										'user.myProfile.memberSince'
									)}: ${cutDate(`${startEnabledDate}`)}`}
								/>
							</div>
						</div>
					</div>
					<div className=' justify-content-end col-2 h-100 d-flex align-items-start '>
						<Link className='edit-profile-link' to='/edit-profile'>
							<div className='d-flex flex-column justify-content-center align-items-center edit-profile-box '>
								<div className='d-flex flex-column edit-profile-box justify-content-center align-items-center'>
									<EditUserIcon />
									<AuxText
										mode='small1'
										text={t('user.myProfile.edit')}
									/>
									<AuxText
										mode='mini'
										text={t('user.myProfile.profile')}
									/>
								</div>
							</div>
						</Link>
					</div>
				</div>

				<div className=' subscription-box col-12 '>
					{/* C */}
					<ImportantBar
						text={`${t('user.myProfile.endEnabledDate')}${cutDate(
							`${endEnabledDate}`
						)}`}
					/>
				</div>

				<div className='about-you-box d-flex col-12 justify-content-between align-items-center'>
					<AuxText
						customStyles='about-you-text'
						text={`${t('user.myProfile.aboutYou')}`}
					/>

					<Link className='about-you-link' to='/edit-about-you'>
						{t('user.myProfile.editInfo')}
					</Link>
				</div>
				{/* ------------------------------------------ */}
				{/* ------------------------------------------ */}
				<div className='training-level-box col-11 d-flex align-items-center '>
					<AuxText
						customStyles='training-level-text'
						text={`${`${t(
							'user.myProfile.trainingLevel'
						)}  ${level}`}`}
					/>
				</div>

				<div className='my-profile-stats col-11 '>
					<AuxText
						customStyles='user-profile-goals'
						text={t('user.myProfile.goals')}
					/>
					<div className='col-12 d-flex flex-column ticket-box '>
						<div className='goals-box'>
							<GenericTicket
								mode='list'
								text1='1 '
								text2={`${t(`welcome.goals.${goals?.[0]}`)}`}
							/>
							<GenericTicket
								mode='list'
								text1='2'
								text2={`${t(`welcome.goals.${goals?.[1]}`)}`}
							/>
							<GenericTicket
								mode='list'
								text1='3'
								text2={`${t(`welcome.goals.${goals?.[2]}`)}`}
							/>
						</div>

						<AuxText
							customStyles='user-profile-goals'
							text={t('user.myProfile.personalInfo')}
						/>
						<GenericTicket
							mode='separated'
							text1={t('user.myProfile.weight')}
							text2={`${weight} KG`}
						/>
						<GenericTicket
							mode='separated'
							text1={t('user.myProfile.height')}
							text2={`${height} Mt`}
						/>
					</div>
				</div>
				<div className='col-12'>
					<Button
						title={t('user.myProfile.password')}
						mode='flat'
						onClick={handleNavigate}
					/>
					<Button
						title={t('user.myProfile.logOut')}
						mode='flat-Danger'
						onClick={onLogout}
					/>
				</div>
			</div>
		</MainContainer>
	);
};

export default MyProfile;
