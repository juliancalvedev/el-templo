import "./MyProfile.scss";
import Button from "../../components/Button/Button";
import { useSelector } from "react-redux";
import { cutDate } from "../../utils/date";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import GenericTicket from "../../components/GenericTicket/GenericTicket";
import { logoutAction } from "../../redux/auth";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import MainContainer from "../../components/MainContainer/MainContainer";
import ImportantBar from "../../components/ImportantBar/ImportantBar";
import Text from "../../components/Text/Text";
import CardInfo from "./CardInfo/CardInfo";
import TopSpacing from '../../components/TopSpacing/TopSpacing';
import useStyles from './useStyles';

const MyProfile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const styles=useStyles();

  const { startEnabledDate, endEnabledDate, goals, height, weight, level } =
    useSelector((store) => store.user);

  const handleChangePasswordNavigate = () => navigate(`/${PATHS.CHANGE_USER_PASSWORD}`);

  const handleEditAboutYou = () => navigate(`/${PATHS.EDIT_ABOUT_YOU}`);

  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutAction());
  };

  return (
		<MainContainer color='2' bg='1' back text={t('user.myProfile.myProfile')}>
			<TopSpacing />
			<CardInfo t={t} startEnabledDate={startEnabledDate} level={level} />
			<div className={styles.importantBar}>
				<ImportantBar
					text={`${t('user.myProfile.endEnabledDate')}${cutDate(
						`${endEnabledDate}`
					)}`}
				/>
			</div>

			<div className={styles.aboutYou}>
				<div className={styles.aboutYou2}>
					<Text bold text={`${t('user.myProfile.aboutYou')}`} />
				</div>

				<Button
					onClick={handleEditAboutYou}
					text={t('user.myProfile.editInfo')}
					type={3}
					size={1}
				/>
			</div>
			<div className={styles.goals}>
				<Text justify='start' bold text={t('user.myProfile.goals')} />
				<div className={styles.generic}>
					<div className={styles.genericDiv}>
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

					<Text
						justify='start'
						bold
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
			<div className={styles.btn}>
				<Button
					text={t('user.myProfile.password')}
					type={4}
					onClick={handleChangePasswordNavigate}
				/>
				<Button
					text={t('user.myProfile.logOut')}
					type={4}
					onClick={onLogout}
				/>
			</div>
		</MainContainer>
  );
};

export default MyProfile;
