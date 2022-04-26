import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import MainContainer from '../../../../components/MainContainer/MainContainer';
import TrainedDay from '../../../../components/TrainedDay/TrainedDay';
import TrainingCard from '../../../../components/TrainingCard/TrainingCard';
import useFetch from '../../../../hooks/useFetch';
import { getRoutineById } from '../../../../services/admin';

const AdminTraining = () => {
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

    console.log(routine)

    return (
        <MainContainer
            back
            color={2}
            bg={1}
            col={12}
            text={`Nivel: ${trainingLevel} - Bloque: ${trainingBlock} - Día: ${trainingDay}`}
            navbar
            scroll
            alignCenter
        >
            <TrainingCard
                title='Adaptación 1'
                exercise1={routine?.adaptation1?.exercise1}
                exercise2={routine?.adaptation1?.exercise2}
            />
            <TrainingCard title='Adaptación 2'
                exercise1={routine?.adaptation2?.exercise1}
                exercise2={routine?.adaptation2?.exercise2}
            />
            <TrainingCard title='Fuerza'
                exercise1={routine?.strength?.exercise1}
                exercise2={routine?.strength?.exercise2}
            />
            <TrainingCard title='Hipertrofia'
                exercise1={routine?.hypertrophy?.exercise1}
                exercise2={routine?.hypertrophy?.exercise2}
            />
            <TrainingCard title='Suplementario'
                exercise1={routine?.suplementary?.exercise1}
                exercise2={routine?.suplementary?.exercise2}
            />
        </MainContainer>
    );
};

export default AdminTraining;
