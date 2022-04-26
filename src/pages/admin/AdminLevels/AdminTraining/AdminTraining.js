import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import MainContainer from '../../../../components/MainContainer/MainContainer';
import TrainedDay from '../../../../components/TrainedDay/TrainedDay';
import TrainingCard from '../../../../components/TrainingCard/TrainingCard';
import useFetch from '../../../../hooks/useFetch';
import { getRoutineById } from '../../../../services/admin';

const AdminTraining = () => {
    const { t } = useTranslation()
    const navigate = useNavigate();
    const { trainingDayId, trainingLevel, trainingDay, trainingBlock } =
        useLocation().state;

    const [routine, setRoutine] = useState({})

    const [trainingResponse, trainingError, apiCallTraining] = useFetch({
        service: () => getRoutineById({ id: trainingDayId }),
        globalLoader: true,
        callNow: true,
        callback: () => { setRoutine(trainingResponse?.response?.routine) },
    });

    return (
        <MainContainer
            back
            color={2}
            bg={1}
            col={12}
            text={
                `${t('admin.routines.level')}: ${trainingLevel} -
                 ${t('admin.routines.block')}: ${trainingBlock} -
                  ${t('admin.routines.day')}: ${trainingDay}`
            }
            navbar
            scroll
            alignCenter
        >
            <TrainingCard
                title={t('admin.routines.adaptation1')}
                exercise1={routine?.adaptation1?.exercise1}
                exercise2={routine?.adaptation1?.exercise2}
            />
            <TrainingCard
                title={t('admin.routines.adaptation2')}
                exercise1={routine?.adaptation2?.exercise1}
                exercise2={routine?.adaptation2?.exercise2}
            />
            <TrainingCard
                title={t('admin.routines.strength')}
                exercise1={routine?.strength?.exercise1}
                exercise2={routine?.strength?.exercise2}
            />
            <TrainingCard
                title={t('admin.routines.hypertrophy')}
                exercise1={routine?.hypertrophy?.exercise1}
                exercise2={routine?.hypertrophy?.exercise2}
            />
            <TrainingCard
                title={t('admin.routines.suplementary')}
                exercise1={routine?.suplementary?.exercise1}
                exercise2={routine?.suplementary?.exercise2}
            />
        </MainContainer>
    );
};

export default AdminTraining;
