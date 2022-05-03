import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import MainContainer from "../../components/MainContainer/MainContainer";
import ProfileImgAndXP from "../../components/ProfileImgAndXP/ProfileImgAndXP";
import RoutineCards from "../../components/RoutineCards/RoutineCards";
import RoutineLevel from "../../components/RoutineLevel/RoutineLevel";
import { PATHS } from "../../constants/paths";
import useFetch from "../../hooks/useFetch";
import { getMyExercise } from "../../services/training";


const DAYS = [1, 2, 3, 4, 5, 6, 7, 8];

const TrainingDashboard = () => {

    const navigate = useNavigate();
    const [training, setTraining] = useState({});

    const { t } = useTranslation();

    const [myExercise, myExerciseError, apiCallMyExercise] = useFetch({
        service: () => getMyExercise(),
        globalLoader: true,
        callNow: true,
        callback: () => {
            const trainingTypeAux = myExercise?.response?.trainingType
            setTraining({
                trainingType: trainingTypeAux,
                training: myExercise?.response?.routine?.[trainingTypeAux],
                currentDay: myExercise?.response?.currentDay,
                currentBlock: myExercise?.response?.currentBlock
            });

        }
    });

    const onClick = (trainingType) => {
        // console.log({training: training.training, currentBlock: training.currentBlock, currentDay: training.currentDay})
        navigate(`/${PATHS.TRAINING}`, { state:{training: training.training, currentBlock: training.currentBlock, currentDay: training.currentDay, trainingType} });
    }

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
            <RoutineCards currentBlock={training.currentBlock} />
            {/* Days */}
            <div className="my-4 col-12">
                {DAYS.map(day => <RoutineLevel
                    onClick={onClick}
                    trainingType={training.trainingType}
                    text={t('global.day', { number: day })}
                    done={day < training.currentDay}
                    active={day === training.currentDay}
                />)}
            </div>
        </MainContainer>
    )
}

export default TrainingDashboard
