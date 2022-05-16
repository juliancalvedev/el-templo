import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MainContainer from '../../../components/MainContainer/MainContainer';
import Exercise from '../../../components/Exercise/Exercise';
import useFetch from '../../../hooks/useFetch';
import { langUpperCased } from '../../../utils/localStorage';
import {
  getNivelationExercises,
  makeNivelation,
} from '../../../services/training';
import NivelationCard from './NivelationCard';
import Button from '../../../components/Button/Button';
import DivTop from '../../../components/DivTop/DivTop';
import DivBottom from '../../../components/DivBottom/DivBottom';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../constants/paths';

const NivelationExercise = () => {
  const { t } = useTranslation();
  const lang = langUpperCased();
  const navigate = useNavigate();

  const [step, setStep] = useState(0)
  const [finalStep, setFinalStep] = useState(0)
  const [nivelations, setNivelations] = useState([]);

  const [questionsArray, errorQuestionsArray, apiCallQuestionsArray] = useFetch({
    service: () => getNivelationExercises(),
    globalLoader: true,
    callNow: true,
    callback: () => {
      setNivelations(
        questionsArray.response.map((d) => ({
          id: d._id,
          count: 0,
          titleES: d.titleES,
          titleEN: d.titleEN,
        }))
      );
    },
  });

  const [makeNivelationData, makeNivelationError, makeNivelationApiCall] = useFetch({
    service: () => makeNivelation(nivelations),
    globalLoader: true,
    callback: () => {
      navigate(`/${PATHS.DASHBOARD}`);
    },
  });

  useEffect(() => {
    setFinalStep(questionsArray?.response?.length)
  }, [questionsArray])

  const onChangeValue = (e, id) => {
    const aux = [...nivelations];
    const currNiv = aux.indexOf(aux.find((n) => n.id === id));
    aux[currNiv].count = e.target.value;
    setNivelations(aux);
  };

  return (
    <MainContainer
      color={2}
      text={t('user.nivelation.nivelation')}
      bg={1}
      back
      scroll
      calc
    >
      <DivTop>
        <div className='mt-5'>
          {nivelations.map((n, i) => {
            if (step === i) {
              return (
                <div key={i}>
                  <NivelationCard
                    value={n.count}
                    title={n[`title${lang}`]}
                    onChange={(e) => onChangeValue(e, n.id)}
                  />
                </div>
              )
            }
          })}
        </div>
      </DivTop>

      <DivBottom>
        {step < finalStep - 1 ?
          <Button
            onClick={() => setStep(step + 1)}
            text={t('global.next')}
          />
          :
          <Button
            onClick={makeNivelationApiCall}
            text={t('global.confirm')}
          />
        }
      </DivBottom>
    </MainContainer>
  );
};

export default NivelationExercise;
