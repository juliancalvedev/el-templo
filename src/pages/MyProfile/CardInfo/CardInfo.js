import { useNavigate } from "react-router-dom"
import EditUserIcon from "../../../assets/Icons/EditUserIcon"
import Text from "../../../components/Text/Text"
import UserImage from "../../../components/UserImage/UserImage"
import { PATHS } from "../../../constants/paths"
import { cutDate } from "../../../utils/date"
import useStyles from "./useStyles"

const CardInfo = ({ level, t, startEnabledDate }) => {

    const navigation = useNavigate();

    const onClickIcon = () => navigation(`/${PATHS.EDIT_PROFILE}`)

    const styles = useStyles();

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <UserImage />
            </div>
            <div className={styles.textContainer}>
                <Text
                    justify="start"
                    size="3"
                    bold
                    text={`${t("user.myProfile.level")} ${level}`}
                />
                <Text
                    justify="start"
                    size="1"
                    className="mt-2"
                    text={`${t("user.myProfile.completedTrainings")}: 00`}
                />

                <Text
                    justify="start"
                    size="1"
                    className="mt-2"
                    text={`${t("user.myProfile.memberSince")}: ${cutDate(
                        `${startEnabledDate}`
                    )}`}
                />
            </div>
            <div className={styles.iconEdit}>
                <span onClick={onClickIcon}>
                    <EditUserIcon />
                </span>
            </div>
        </div>
    )
}

export default CardInfo
