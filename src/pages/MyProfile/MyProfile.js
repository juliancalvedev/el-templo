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

const MyProfile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { startEnabledDate, endEnabledDate, goals, height, weight, level } =
    useSelector((store) => store.user);

  const handleChangePasswordNavigate = () => navigate(`/${PATHS.CHANGE_USER_PASSWORD}`);

  const handleEditAboutYou = () => navigate(`/${PATHS.EDIT_ABOUT_YOU}`);

  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <MainContainer color="2" bg="1" back text={t("user.myProfile.myProfile")}>
      <div className=" col-12 my-profile-body flex-col mt-5 ">
        <CardInfo t={t} startEnabledDate={startEnabledDate} level={level} />
        <div className=" subscription-box col-12 ">
          <ImportantBar
            text={`${t("user.myProfile.endEnabledDate")}${cutDate(
              `${endEnabledDate}`
            )}`}
          />
        </div>

        <div className="about-you-box d-flex col-12 justify-content-between align-items-center px-3">
          <Text bold text={`${t("user.myProfile.aboutYou")}`} />


          <Text onClick={handleEditAboutYou} text={t("user.myProfile.editInfo")} />
        </div>
        <div className="my-profile-stats col-11 ">
          <Text
            justify="start"
            bold
            text={t("user.myProfile.goals")}
          />
          <div className="col-12 d-flex flex-column ticket-box ">
            <div className="goals-box">
              <GenericTicket
                mode="list"
                text1="1 "
                text2={`${t(`welcome.goals.${goals?.[0]}`)}`}
              />
              <GenericTicket
                mode="list"
                text1="2"
                text2={`${t(`welcome.goals.${goals?.[1]}`)}`}
              />
              <GenericTicket
                mode="list"
                text1="3"
                text2={`${t(`welcome.goals.${goals?.[2]}`)}`}
              />
            </div>

            <Text
              justify="start"
              bold
              text={t("user.myProfile.personalInfo")}
            />
            <GenericTicket
              mode="separated"
              text1={t("user.myProfile.weight")}
              text2={`${weight} KG`}
            />
            <GenericTicket
              mode="separated"
              text1={t("user.myProfile.height")}
              text2={`${height} Mt`}
            />
          </div>
        </div>
        <div className="col-12">
          <Button
            title={t("user.myProfile.password")}
            mode="flat"
            onClick={handleChangePasswordNavigate}
          />
          <Button
            title={t("user.myProfile.logOut")}
            mode="flat-Danger"
            onClick={onLogout}
          />
        </div>
      </div>
    </MainContainer>
  );
};

export default MyProfile;