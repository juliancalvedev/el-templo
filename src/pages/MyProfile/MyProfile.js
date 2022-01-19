import './MyProfile.scss';
import Button from '../../components/Button/Button';
import { useSelector } from 'react-redux';
import { cutDate } from '../../utils/date';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';
import GenericTicket from '../../components/GenericTicket/GenericTicket';
import { logoutAction } from '../../redux/auth';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import MainContainer from '../../components/MainContainer/MainContainer';
import ImportantBar from '../../components/ImportantBar/ImportantBar';
import Text from '../../components/Text/Text';
import CardInfo from './CardInfo/CardInfo';

const MyProfile = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const { startEnabledDate, endEnabledDate, goals, height, weight, level } =
		useSelector((store) => store.user);

	const handleChangePasswordNavigate = () =>
		navigate(`/${PATHS.CHANGE_USER_PASSWORD}`);

	const handleEditAboutYou = () => navigate(`/${PATHS.EDIT_ABOUT_YOU}`);

	const dispatch = useDispatch();
	const onLogout = () => {
		dispatch(logoutAction());
	};

	return (
		<MainContainer
			color='2'
			bg='1'
			back
			text={t('user.myProfile.myProfile')}
			col='12'
		>
			<CardInfo t={t} startEnabledDate={startEnabledDate} level={level} />
			<div className=' subscription-box col-12'>
				<ImportantBar
					text={`${t('user.myProfile.endEnabledDate')}${cutDate(
						`${endEnabledDate}`
					)}`}
				/>
			</div>

			<div className='d-flex col-12 justify-content-between border align-items-center p-1 mb-2'>
				<div className='px-3'>
					<Text bold text={`${t('user.myProfile.aboutYou')}`} />
				</div>

				<Button
					onClick={handleEditAboutYou}
					text={t('user.myProfile.editInfo')}
					type={3}
					size={1}
				/>
			</div>
			<div className='my-profile-stats col-12 '>
				<Text justify='start' bold text={t('user.myProfile.goals')} />
				<div className='col-12 d-flex flex-column ticket-box '>
					<div className='goals-box my-2'>
						<GenericTicket
							text1='1 '
							text2={`${t(`welcome.goals.${goals?.[0]}`)}`}
						/>
						<GenericTicket
							text1='2'
							text2={`${t(`welcome.goals.${goals?.[1]}`)}`}
						/>
						<GenericTicket
							text1='3'
							text2={`${t(`welcome.goals.${goals?.[2]}`)}`}
						/>
					</div>

					<Text
						justify='start'
						bold
						text={t('user.myProfile.personalInfo')}
					/>
					<GenericTicket
						mode='list'
						text1={t('user.myProfile.weight')}
						text3={`${weight} KG`}
					/>
					<GenericTicket
						mode='list'
						text1={t('user.myProfile.height')}
						text3={`${height} Mt`}
					/>
				</div>
			</div>
			<div className='col-12 mt-4'>
				<Button
					text={t('user.myProfile.password')}
					type={4}
					onClick={handleChangePasswordNavigate}
					size={4}
				/>
				<Button
					text={t('user.myProfile.logOut')}
					type={4}
					onClick={onLogout}
					color='1'
				/>
			</div>
		</MainContainer>
	);
};

export default MyProfile;
