import MainContainer from '../../components/MainContainer/MainContainer';
import GenericTicket from '../../components/GenericTicket/GenericTicket'
import UserImage from '../../components/UserImage/UserImage'

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
          <GenericTicket list text1={''} />
          <GenericTicket list text1={''} />
        </div>
      </div>
    </MainContainer>
  )
}

export default EditProfile