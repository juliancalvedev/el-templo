import { useTranslation } from "react-i18next";
import MainContainer from "../../components/MainContainer/MainContainer";
import EditRoutineDay from "../../components/EditRoutineDay/EditRoutineDay";
import useFetch from "../../hooks/useFetch";
import { getMyExercise } from "../../services/training";

const TrainingRoutine = () => {
    const { t } = useTranslation();

    const [myExercise, myExerciseError, apiCallMyExercise] = useFetch({
        service: () => getMyExercise(),
        globalLoader: true,
        callNow: true,
        callback: () => {
            // console.log('myExercise', myExercise?.response?.routine?._id)
        }
    })

    return (
        <MainContainer
            back
            color={2}
            bg={1}
            col={12}
            text={'Página de entrenamiento'
                //     `${t('admin.routines.level')}: ${trainingLevel} -
                //  ${t('admin.routines.block')}: ${trainingBlock} -
                //   ${t('admin.routines.day')}: ${trainingDay}`
            }
            navbar
            scroll
            alignCenter
        >
            <EditRoutineDay
                trainingDayId={myExercise?.response?.routine?._id}
            />
        </MainContainer>
    );
}

export default TrainingRoutine