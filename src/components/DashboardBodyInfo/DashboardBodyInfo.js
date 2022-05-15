import { BrownCircle } from "./BrownCircle"
import ImgDashboardBodyInfo from '../../assets/images/ImgDashboardBodyInfo'
import useStyles from "./useStyles"
import './DashboardBodyInfo.scss'
import Text from "../Text/Text"
import { useTranslation } from "react-i18next"

const DashboardBodyInfo = ({ upper, middle, bottom }) => {
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
                <BrownCircle value={isNaN(upper) ? 0 : upper} />
                <BrownCircle value={isNaN(middle) ? 0 : middle} />
                <BrownCircle value={isNaN(bottom) ? 0 : bottom} />
            </div>
        </div>
    )
}

export default DashboardBodyInfo