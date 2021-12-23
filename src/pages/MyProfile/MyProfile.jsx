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
import SubTitle from '../../components/SubTitle/SubTitle';

const MyProfile = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const {
		startEnabledDate,
		endEnabledDate,
		goals,
		height,
		weight,
		trainingLevel,
		img,
	} = useSelector((store) => store.user);
	const userData = useSelector((store) => store.user);
	console.log(userData);

	const handleNavigate = () => {
		navigate(`/${PATHS.CHANGE_USER_PASSWORD}`, { replace: true });
	};
	const dispatch = useDispatch();
	const onLogout = () => {
		dispatch(logoutAction());
	};
	return (
		<div className=' col-12 my-profile-body'>
			<div className='d-flex flex-row col-10 user-level-box'>
				<div className=' align-self-center image-container'>
					<img src={img} alt='' />
				</div>
				<div className=' level-and-profile'>
					<div>
						<p className=' userLevel align-self-center'>{`${t(
							'user.myProfile.level'
						)} ${trainingLevel}`}</p>
					</div>
					<div className='userLevel-box-texts'>
						<div className='d-flex flex-column justify-content-center date-container'>
							<p className='date'>
								{`${t(
									'user.myProfile.completedTrainings'
								)}: 00`}{' '}
							</p>

							<p className='date'>
								{`${t('user.myProfile.memberSince')}: ${cutDate(
									`${startEnabledDate}`
								)}`}
							</p>
						</div>
					</div>
				</div>
				<a className='link' href=''>
					<div className=' align-self-top align-self-end edit-profile-box '>
						<img className='editProfile-icon' src='' alt='icon' />
						<p className='editProfile-text'>
							{t('user.myProfile.editProfile')}
						</p>
					</div>
				</a>
			</div>

			<div className=' subscription-box'>
				<div>
					<p className=' subscription-white-text '>
						{t('user.myProfile.endEnabledDate')}:
						{cutDate(`${endEnabledDate}`)}
					</p>
				</div>
			</div>

			<div className='about-you-box '>
				<p className='align-self-end'>{t('user.myProfile.aboutYou')}</p>
				<a className='about-you-link' href='/edit-user-info'>
					{t('user.myProfile.editInfo')}
				</a>
			</div>
			<div className='my-profile-stats'>
				<div className='training-level-box'>
					<p>{`${t('user.myProfile.trainingLevel')} : inicial`}</p>
				</div>
				<br />
				<AuxText text={t('user.myProfile.goals')} />
				<GenericTicket text1={' 1 . ' + goals?.[0]} />
				<GenericTicket text1={' 2 . ' + goals?.[1]} />
				<GenericTicket text1={' 3 . ' + goals?.[2]} />
				<AuxText text='Datos personales:' />
				<GenericTicket
					text1={t('user.myProfile.weight')}
					text2={weight}
				/>
				<GenericTicket
					text1={t('user.myProfile.height')}
					text2={height}
				/>
			</div>

			<Button
				title={t('user.myProfile.password')}
				mode='flat'
				onClick={handleNavigate}
			/>
			<Button
				title={t('user.myProfile.logOut')}
				mode='flatDanger'
				onClick={onLogout}
			/>
		</div>
	);
};

export default MyProfile;
