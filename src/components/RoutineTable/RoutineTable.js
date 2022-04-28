import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { getExercises, getRoutineById } from '../../services/admin';
import TrainingCard from '../TrainingCard/TrainingCard';
import Button from '../Button/Button'

const RoutineTable = ({ trainingDayId, isEditing }) => {
    const { t } = useTranslation()
    const navigate = useNavigate();

    const [routine, setRoutine] = useState({})
    const [eachCard, setEachCard] = useState({})

    const [trainingResponse, trainingError, apiCallTraining] = useFetch({
        service: () => getRoutineById({ id: trainingDayId }),
        globalLoader: true,
        callNow: true,
        callback: () => {
            const { routine } = trainingResponse?.response;
            setRoutine(routine);
            setEachCard({
                adaptation1: {
                    exercise1: {
                        exerciseId: routine?.adaptation1?.exercise1?.exerciseId,
                        reps: routine?.adaptation1?.exercise1?.reps,
                        times: routine?.adaptation1?.exercise1?.times
                    },
                    exercise2: {
                        exerciseId: routine?.adaptation1?.exercise2?.exerciseId,
                        reps: routine?.adaptation1?.exercise2?.reps,
                        times: routine?.adaptation1?.exercise2?.times
                    }
                },
                adaptation2: {
                    exercise1: {
                        exerciseId: routine?.adaptation2?.exercise1?.exerciseId,
                        reps: routine?.adaptation2?.exercise1?.reps,
                        times: routine?.adaptation2?.exercise1?.times
                    },
                    exercise2: {
                        exerciseId: routine?.adaptation2?.exercise2?.exerciseId,
                        reps: routine?.adaptation2?.exercise2?.reps,
                        times: routine?.adaptation2?.exercise2?.times
                    }
                },
                strength: {
                    exercise1: {
                        exerciseId: routine?.strength?.exercise1?.exerciseId,
                        reps: routine?.strength?.exercise1?.reps,
                        times: routine?.strength?.exercise1?.times
                    },
                    exercise2: {
                        exerciseId: routine?.strength?.exercise2?.exerciseId,
                        reps: routine?.strength?.exercise2?.reps,
                        times: routine?.strength?.exercise2?.times
                    }
                },
                hypertrophy: {
                    exercise1: {
                        exerciseId: routine?.hypertrophy?.exercise1?.exerciseId,
                        reps: routine?.hypertrophy?.exercise1?.reps,
                        times: routine?.hypertrophy?.exercise1?.times
                    },
                    exercise2: {
                        exerciseId: routine?.hypertrophy?.exercise2?.exerciseId,
                        reps: routine?.hypertrophy?.exercise2?.reps,
                        times: routine?.hypertrophy?.exercise2?.times
                    }
                },
                suplementary: {
                    exercise1: {
                        exerciseId: routine?.suplementary?.exercise1?.exerciseId,
                        reps: routine?.suplementary?.exercise1?.reps,
                        times: routine?.suplementary?.exercise1?.times
                    },
                    exercise2: {
                        exerciseId: routine?.suplementary?.exercise2?.exerciseId,
                        reps: routine?.suplementary?.exercise2?.reps,
                        times: routine?.suplementary?.exercise2?.times
                    }
                },

            })
        },
    });

    const [exercisesListResponse, exercisesListError, apiCallExercisesList] = useFetch({
        service: () => getExercises(),
        globalLoader: true,
        callNow: true,
        callback: () => { },
    });

    const onChangeInput = (e, exerciseType) => {
        console.log(e)
        console.log('exerciseType', exerciseType)

        setEachCard({
            ...eachCard,
            [exerciseType]: {
                ...eachCard[exerciseType],
                [exerciseType]: {
                    ...eachCard[exerciseType][e.exerciseNumber],
                    [e.exerciseNumber]: {
                        ...eachCard[exerciseType][e.exerciseNumber]
                    }
                },
            }
        })
    }
    useEffect(() => {
        console.log(eachCard?.adaptation1)
    }, [eachCard])


    return (
        <div className='col-12 d-flex flex-column align-items-center'>
            <TrainingCard
                isEditing={isEditing}
                title={t('admin.routines.adaptation1')}
                exercise1={eachCard?.adaptation1?.exercise1}
                exercise2={eachCard?.adaptation1?.exercise2}
                exercisesListResponse={exercisesListResponse}
                onChange={(e) => onChangeInput(e, 'adaptation1')}
            />
            <TrainingCard
                isEditing={isEditing}
                title={t('admin.routines.adaptation2')}
                exercise1={eachCard?.adaptation2?.exercise1}
                exercise2={eachCard?.adaptation2?.exercise2}
                exercisesListResponse={exercisesListResponse}
                onChange={(e) => onChangeInput(e, 'adaptation2')}

            />
            <TrainingCard
                isEditing={isEditing}
                title={t('admin.routines.strength')}
                exercise1={eachCard?.strength?.exercise1}
                exercise2={eachCard?.strength?.exercise2}
                exercisesListResponse={exercisesListResponse}
                onChange={(e) => onChangeInput(e, 'strength')}

            />
            <TrainingCard
                isEditing={isEditing}
                title={t('admin.routines.hypertrophy')}
                exercise1={eachCard?.hypertrophy?.exercise1}
                exercise2={eachCard?.hypertrophy?.exercise2}
                exercisesListResponse={exercisesListResponse}
                onChange={(e) => onChangeInput(e, 'hypertrophy')}

            />
            <TrainingCard
                isEditing={isEditing}
                title={t('admin.routines.suplementary')}
                exercise1={eachCard?.suplementary?.exercise1}
                exercise2={eachCard?.suplementary?.exercise2}
                exercisesListResponse={exercisesListResponse}
                onChange={(e) => onChangeInput(e, 'suplementary')}

            />
            <Button text='Crear Rutina' size={2} disabled={true} />
        </div>
    );
};

export default RoutineTable