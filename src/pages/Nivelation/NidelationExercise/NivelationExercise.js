import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import MainContainer from '../../../components/MainContainer/MainContainer';
import Exercise from '../../../components/Exercise/Exercise';
import { getNivelationRoutine } from '../../../services/training';
import useFetch from '../../../hooks/useFetch';

const NivelationExercise = () => {

  const { t } = useTranslation();
  const [data, error, apiCall] = useFetch({
    service: () => getNivelationRoutine(),
    globalLoader: true
  });

  useEffect(() => {
    apiCall();
  }, []);

  console.log(data);

  return (
    <MainContainer color={2} text={t('user.nivelation.nivelation')} bg={1} back scroll col={12}>

      <Exercise
        title={data?.response?.routine?.adaptation1?.exercise1?.exercise?.[`title${localStorage.getItem('lang').toUpperCase()}`]}
        video={data?.response?.routine?.adaptation1?.exercise1?.exercise?.video}
        description={data?.response?.routine?.adaptation1?.exercise1?.exercise?.[`description${localStorage.getItem('lang').toUpperCase()}`]}
        />
    </MainContainer>
  )
}

export default NivelationExercise;