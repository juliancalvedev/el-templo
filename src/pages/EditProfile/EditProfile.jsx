import MainContainer from '../../components/MainContainer/MainContainer';
import Input from '../../components/Input/Input'
import UserImage from '../../components/UserImage/UserImage'
import SexSelector from '../../components/SexSelector/SexSelector';

import './EditProfile.scss';
import useStyles from './useStyles.js'

const EditProfile = () => {
  const styles = useStyles();
  return (
    <MainContainer back scroll text='Edicion de perfil' shadow >
      <div className={styles.ImgAndName} >
        <div className={styles.userImg} >
          <UserImage />
        </div>
        <div className={styles.userName} >
          <Input />
          <Input />
        </div>
      </div>
      <div className='SexSelection' >
        <SexSelector />
      </div>
    </MainContainer>
  )
}

export default EditProfile