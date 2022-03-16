import { useEffect, useState } from 'react'
import { cutDate } from '../../utils/date'
import useFetch from '../../hooks/useFetch'
import Text from '../../components/Text/Text'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import UserImage from '../../components/UserImage/UserImage'
import InputSelect from '../../components/InputSelect/InputSelect'
import SexSelector from '../../components/SexSelector/SexSelector'
import MainContainer from '../../components/MainContainer/MainContainer';


import { Countries } from '../../constants/countries';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import useStyles from './useStyles.js'
import './EditProfile.scss';
import { editProfile } from '../../services/user'

const EditProfile = () => {
  const navigate = useNavigate()
  const { firstName, lastName, sex, country, dateOfBirth, img } = useSelector((store) => store.user);
  const [values, setValues] = useState({ firstName, lastName, country, dateOfBirth, img, sex });
  const { t } = useTranslation();
  const countries = Countries({ t });

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    setValues({ firstName, lastName, country, dateOfBirth: cutDate(dateOfBirth), img, sex });
  }, [firstName,])

  console.log({firstName, lastName, country, dateOfBirth: cutDate(dateOfBirth)});

  const [data, error, apiCall] = useFetch({
    service: () => editProfile({ ...values }),
    globalLoader: true,
    callback : () => navigate(-1)
    
  });
  

  const styles = useStyles();
  const clickFile = () => {
		document.getElementById('file').click();
	};


  const [type, setType] = useState('text');
  const onFocus = () => setType('date');
  const onBlur = () => setType('text');

  return (
    <MainContainer back text='Edicion de perfil' shadow >
      <div className={styles.ImgAndName} >
        <div className={styles.userImg} >
          <UserImage />
        </div>
        <div className={styles.userName} >
          <Input name='firstName' onChange={onChange} value={values.firstName} />
          <Input name='lastName' onChange={onChange} value={values.lastName} />
        </div>
        {/*  */}
      </div>
      <div className={styles.SexSelection} > 
        <div className={styles.textSex}>

          <Text text='Sexo' bold />
        </div>
        <SexSelector handleChange={onChange} />
      </div>

      <div className={styles.inputBox} >
        

        <InputSelect
          value={values.country}
          defaulValue={values.country}
          onChange={onChange}
          options={countries}
          name='country'

        />

        <Input
          onChange={onChange}
          type={type}
          name='dateOfBirth'
          value={values.dateOfBirth}
          onBlur={onBlur}
          onFocus={onFocus}
          icon='date' />
      </div>

      <div className={styles.buttonBox} >
        <Button text='Guardar Cambios' onClick={apiCall} />
      </div>

    </MainContainer>
  )
}

export default EditProfile