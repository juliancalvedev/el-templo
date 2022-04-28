import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { getRoutineById } from '../../services/admin';
import TrainingCard from '../TrainingCard/TrainingCard';
import Button from '../Button/Button'

const RoutineTable = ({ trainingDayId, isEditing }) => {
    const { t } = useTranslation()
    const navigate = useNavigate();

    const [routine, setRoutine] = useState({})

    const [trainingResponse, trainingError, apiCallTraining] = useFetch({
        service: () => getRoutineById({ id: trainingDayId }),
        globalLoader: true,
        callNow: true,
        callback: () => { setRoutine(trainingResponse?.response?.routine) },
    });
    console.log(trainingResponse)
    return (
        <div className='col-12 d-flex flex-column align-items-center'>
            <TrainingCard
                isEditing={isEditing}
                title={t('admin.routines.adaptation1')}
                exercise1={routine?.adaptation1?.exercise1}
                exercise2={routine?.adaptation1?.exercise2}
            />
            <TrainingCard
                isEditing={isEditing}
                title={t('admin.routines.adaptation2')}
                exercise1={routine?.adaptation2?.exercise1}
                exercise2={routine?.adaptation2?.exercise2}
            />
            <TrainingCard
                isEditing={isEditing}
                title={t('admin.routines.strength')}
                exercise1={routine?.strength?.exercise1}
                exercise2={routine?.strength?.exercise2}
            />
            <TrainingCard
                isEditing={isEditing}
                title={t('admin.routines.hypertrophy')}
                exercise1={routine?.hypertrophy?.exercise1}
                exercise2={routine?.hypertrophy?.exercise2}
            />
            <TrainingCard
                isEditing={isEditing}
                title={t('admin.routines.suplementary')}
                exercise1={routine?.suplementary?.exercise1}
                exercise2={routine?.suplementary?.exercise2}
            />
            <Button text='Crear Rutina' size={2} disabled={true} />
        </div>
    );
};

export default RoutineTable