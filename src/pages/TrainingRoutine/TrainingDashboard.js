import { useTranslation } from "react-i18next";
import MainContainer from "../../components/MainContainer/MainContainer";
import ProfileImgAndXP from "../../components/ProfileImgAndXP/ProfileImgAndXP";
import RoutineCards from "../../components/RoutineCards/RoutineCards";
import useFetch from "../../hooks/useFetch";
import { getMyExercise } from "../../services/training";

const TrainingDashboard = () => {
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
            text={t('trainingDashboard.index')}
            navbar
            scroll
            alignCenter
        >
            <ProfileImgAndXP />
            <RoutineCards />
            {/* <RoutineTable
            {...myExercise?.response?.routine}
            trainingType={myExercise?.response?.trainingType}
        /> */}
        </MainContainer>
    )
}

export default TrainingDashboard
