import React from 'react';
import './MyProfile.css';
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
 

const MyProfile = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { startEnabledDate, endEnabledDate, goals, height, weight, trainingLevel } =
		useSelector((store) => store.user);
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
		<div className='my-profile-body'>
			<div className='user-level-box   '>
				<div className='userImg'>
					<img src='' alt='' />
				</div>
				<div className='edit-profile-box '>
					<img src='' alt='' />
					<p className='edit-profile-text'>{t('user.myProfile.editProfile')}</p>
				</div>
				<h3 className='' >{t('user.myProfile.level')} {trainingLevel}</h3>
				<p className='align-self-center' >{t('user.myProfile.completedTrainings')}: X</p>
				
				
				
				<AuxText  className='' text={`${t('user.myProfile.memberSince'), cutDate(`${startEnabledDate}`)}`}/>
			</div>
			<div className='subscription-box'>
				<p className='subscription-white-text'>
					{t('user.myProfile.endEnabledDate')} : {cutDate(`${endEnabledDate}`)}
				</p>
			</div>

			<div className='about-you-box  '>
				<p className="align-self-end"> {t('user.myProfile.aboutYou')} </p>
				<a className='about-you-link' href='/edit-user-info'>
					{t('user.myProfile.editInfo')}
				</a>
			</div>
			<div className='my-profile-stats'>
				<div className='training-level-box'>
					<p>{`${t('user.myProfile.trainingLevel')} : inicial`}</p>
				</div>
				<AuxText text={t('user.myProfile.goals')} />
				<GenericTicket text1={" 1 	. " + goals?.[0]} />
				<GenericTicket text1={" 2 . " + goals?.[1]} />
				<GenericTicket text1={" 3 . " +goals?.[2]} />
				<AuxText text='Datos personales:' />
				<GenericTicket text1={t('user.myProfile.weight')} text2={weight} />
				<GenericTicket text1={t('user.myProfile.height')} text2={height} />

			</div>

			<Button title={t('user.myProfile.password')} mode='flat' onClick={handleNavigate} />
			<Button
				title={t('user.myProfile.logOut')}
				mode='flat dangerText'
				onClick={onLogout}
				/>
				
		</div>
	);
};

export default MyProfile;
