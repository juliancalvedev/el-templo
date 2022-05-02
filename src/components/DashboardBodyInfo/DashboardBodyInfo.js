import { BrownCircle } from "./BrownCircle"
import ImgDashboardBodyInfo from '../../assets/images/ImgDashboardBodyInfo'
import useStyles from "./useStyles"
import './DashboardBodyInfo.scss'
import Text from "../Text/Text"
import { useTranslation } from "react-i18next"

const DashboardBodyInfo = ({ values }) => {
    // TODO pasar valores desde el backend
    const { t } = useTranslation()
    const style = useStyles()

    return (
        <div className={style.mainContainer}>
            <div>
                <div className={style.textsPosition}>
                    <div className={style.textsFlex}>
                        <Text text={t('dashboard.main.upperBody')} size={1} />
                        <Text text={t('dashboard.main.middleBody')} size={1} />
                        <Text text={t('dashboard.main.lowerBody')} size={1} />
                    </div>
                </div>
                <ImgDashboardBodyInfo />
            </div>

            <div className={style.circlesContainer}>
                <BrownCircle value={30} />
                <BrownCircle value={57} />
                <BrownCircle value={23} />
            </div>
        </div>
    )
}

export default DashboardBodyInfo