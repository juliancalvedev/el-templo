import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import MainContainer from '../../../components/MainContainer/MainContainer';
import Exercise from '../../../components/Exercise/Exercise';
import useFetch from '../../../hooks/useFetch';
import { langUpperCased } from '../../../utils/localStorage';
import { getNivelationExercises, makeNivelation } from '../../../services/training';
import NivelationCard from './NivelationCard';
import Button from '../../../components/Button/Button';
import DivTop from '../../../components/DivTop/DivTop';
import DivBottom from '../../../components/DivBottom/DivBottom';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../constants/paths';

const NivelationExercise = () => {

  const { t } = useTranslation();
  const [nivelations, setNivelations] = useState([]);
  const lang = langUpperCased();
  const navigate = useNavigate();
  const [data, error, apiCall] = useFetch({
    service: () => getNivelationExercises(),
    globalLoader: true,
    callNow: true,
    callback: () => {
      setNivelations(data.response.map(d => ({
        id: d._id,
        count: 0,
        titleES: d.titleES,
        titleEN: d.titleEN
      })))
    }
  });

  const [makeNivelationData, makeNivelationError, makeNivelationApiCall] = useFetch({
    service: () => makeNivelation(nivelations),
    globalLoader: true,
    callback: () => {
      navigate(`/${PATHS.DASHBOARD}`);
    }
  });

  const onChangeValue = (e, id) => {
    const aux = [...nivelations];
    const currNiv = aux.indexOf(aux.find(n => n.id === id));
    aux[currNiv].count = e.target.value;
    setNivelations(aux);
  }



  return (
    <MainContainer color={2} text={t('user.nivelation.nivelation')} bg={1} back scroll calc>
      <DivTop>
        {nivelations.map(n => <NivelationCard value={n.count} title={n[`title${lang}`]} onChange={(e) => onChangeValue(e, n.id)} />)}
      </DivTop>
      <DivBottom>
        <Button onClick={makeNivelationApiCall} text={t('global.confirm')} />
      </DivBottom>
    </MainContainer>
  )
}

export default NivelationExercise;