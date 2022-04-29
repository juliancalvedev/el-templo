import { useTranslation } from "react-i18next";
import MainContainer from "../../components/MainContainer/MainContainer";
import RoutineTable from "../../components/RoutineTable/RoutineTable";
import useFetch from "../../hooks/useFetch";
import { getMyExercise } from "../../services/training";

const TrainingRoutine = () => {
    const { t } = useTranslation();

    const [myExercise, myExerciseError, apiCallMyExercise] = useFetch({
        service: () => getMyExercise(),
        globalLoader: true,
        callNow: true
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
            <RoutineTable
                {...myExercise?.response?.routine}
                trainingType={myExercise?.response?.trainingType}
            />
        </MainContainer>
    );
}

export default TrainingRoutine