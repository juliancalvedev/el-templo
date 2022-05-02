import React from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import InputAvatar from '../InputAvatar/InputAvatar'
import Text from '../Text/Text';
import useStyles from './useStyles';
import './ProfileImgAndXP.scss';

const ProfileImgAndXP = () => {

    const { t } = useTranslation();
    const { level, img, experience } = useSelector((store) => store.user);
    const xp = (100 * experience) / 24 + 4;
    const styles = useStyles();

    return (
        <div className={styles.levelContainer}>
            <div className={styles.userImg} >
                <InputAvatar img={img} />
            </div>

            <div className={styles.containerColor}>
                <div className={styles.textOverLevelContainer}>
                    <Text
                        className={'mx-4'}
                        text={`${t('dashboard.main.level')} ${level}`}
                        bold
                        size={3}
                    />
                    <div className={styles.textExperiencePercent}>
                        <Text
                            className={'mx-4'}
                            text={`${Math.trunc(xp)}%`}
                            size={1}
                        />
                    </div>
                </div>
                <div className={styles.boxcontainer}>
                    <div className={styles.boxColor} style={{ width: `${xp}%` }}></div>
                </div>
                <div className={styles.textUnderLevelContainer}>
                    <Text
                        justify={'end'}
                        size='1'
                        color={5}
                        bold
                        text={`${t('dashboard.main.level')} ${level + 1}`}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProfileImgAndXP
