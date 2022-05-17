import React from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import InputAvatar from '../InputAvatar/InputAvatar'
import useStyles from './useStyles';
import './ProfileImgAndXP.scss';
import XPBar from './XPBar';

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

            <XPBar />
        </div>
    )
}

export default ProfileImgAndXP
