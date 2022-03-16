import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import MainContainer from '../../../components/MainContainer/MainContainer';
import Exercise from '../../../components/Exercise/Exercise';
import { getNivelationRoutine } from '../../../services/training';
import useFetch from '../../../hooks/useFetch';

const NivelationExercise = () => {

  const { t } = useTranslation();
  const [data, error, apiCall] = useFetch({
    service: () => getNivelationRoutine(),
    globalLoader: true,
    callback: () => {
      if(data?.response){

        const { adaptation1, adaptation2, strength, hyphertrophy, suplementary } = data?.response?.routine;
        setTraining({ adaptation1, adaptation2, strength, hyphertrophy, suplementary });
      }
    }
  });

  const [stepper, setStepper] = useState(0);
  const [nextExercise, setNextExercise] = useState(1);

  const [training, setTraining] = useState({});

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <MainContainer color={2} text={t('user.nivelation.nivelation')} bg={1} back scroll col={12}>

      {stepper === 0 && <Exercise
        title={training?.adaptation1?.exercise1?.exercise?.[`title${localStorage.getItem('lang').toUpperCase()}`]}
        video={training?.adaptation1?.exercise1?.exercise?.video}
        description={training?.adaptation1?.exercise1?.exercise?.[`description${localStorage.getItem('lang').toUpperCase()}`]}
        onNext={() => setNextExercise(nextExercise + 1)}
        />}
    </MainContainer>
  )
}

export default NivelationExercise;