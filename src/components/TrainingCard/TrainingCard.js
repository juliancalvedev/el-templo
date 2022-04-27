import useStyles from './useStyles';
import './TrainingCard.scss';
import Text from '../Text/Text';
import { useTranslation } from 'react-i18next';
import InputSelect from '../InputSelect/InputSelect'
import useFetch from '../../hooks/useFetch';
import { getExercises } from '../../services/admin';
import { useEffect, useState } from 'react';

const TrainingCard = ({
    title = 'Title',
    exercise1,
    exercise2,
    isEditing
}) => {
    const { t } = useTranslation()
    const styles = useStyles();
    const lang = localStorage.getItem('lang').toUpperCase();

    const [eachCard, setEachCard] = useState({})

    useEffect(() => {
        setEachCard({
            trainingType: title,
            exercise1: {
                exerciseName: exercise1?.exercise?.titleES,
                exerciseId: exercise1?.exerciseId,
                reps: '',
                times: '',

            },
            exercise2: {
                exerciseName: '',
                exerciseId: '',
                reps: '',
                times: '',
            }
        })
    }, [exercise1, exercise2])

    console.log(eachCard?.exercise1?.exerciseId)
    const [exercisesListResponse, exercisesListError, apiCallExercisesList] = useFetch({
        service: () => getExercises(),
        globalLoader: true,
        callNow: true,
        callback: () => { },
    });

    const onChangeExercise1 = (e) => {
        console.log(e.target.value)
        setEachCard({ ...eachCard, ...eachCard.exercise1.exerciseId = e.target.value })
    }

    return (
        <div className={styles.trainingCardContainer} >
            <div className={styles.titleContainer}>
                <Text text={title} />
            </div>

            <div className={styles.exercisesContainer}>
                <div className={styles.exerciseLeft}>
                    {isEditing ?
                        <div>
                            <select
                                className={styles.inputSelect}
                                value={eachCard?.exercise1?.exerciseId}
                                onChange={(e) => onChangeExercise1(e)}
                                name='exercise1'
                            >
                                <option value={null}>Elegir</option>
                                {exercisesListResponse?.exercises?.map(exercise => {
                                    return (
                                        <option
                                            key={exercise?._id}
                                            // hidden={selectOption?.hidden}
                                            value={exercise?._id}
                                        >
                                            {exercise?.titleES}
                                        </option>
                                    )
                                }
                                )}

                            </select>
                        </div>
                        :
                        <>
                            <Text text={exercise1?.exercise[`title${lang}`]} size='1' bold />
                            <Text text={`${t('admin.routines.reps')}: ${exercise1?.reps}`} size='1' />
                            <Text text={`${t('admin.routines.times')}: ${exercise1?.times}`} size='1' />
                        </>
                    }
                </div>

                <div className={styles.exerciseRight}>
                    {isEditing ?
                        <>
                            editando
                        </>
                        :
                        <>
                            <Text text={exercise2?.exercise[`title${lang}`]} size='1' bold />
                            <Text text={`${t('admin.routines.reps')}: ${exercise2?.reps}`} size='1' />
                            <Text text={`${t('admin.routines.times')}: ${exercise2?.times}`} size='1' />
                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default TrainingCard;
