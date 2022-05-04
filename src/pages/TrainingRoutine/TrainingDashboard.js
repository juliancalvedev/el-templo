import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "../../components/MainContainer/MainContainer";
import ProfileImgAndXP from "../../components/ProfileImgAndXP/ProfileImgAndXP";
import RoutineCards from "../../components/RoutineCards/RoutineCards";
import RoutineLevel from "../../components/RoutineLevel/RoutineLevel";
import { PATHS } from "../../constants/paths";
import useFetch from "../../hooks/useFetch";
import { setExerciseAction } from "../../redux/exercise";
import { getMyExercise } from "../../services/training";


const DAYS = [1, 2, 3, 4, 5, 6, 7, 8];

const TrainingDashboard = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { trainingType, currentBlock, currentDay } = useSelector( state => state.exercise );

    const { t } = useTranslation();

    const [myExercise, myExerciseError, apiCallMyExercise] = useFetch({
        service: () => getMyExercise(),
        globalLoader: true,
        callNow: true,
        callback: () => {
            const trainingTypeAux = myExercise?.response?.trainingType;
            const { exercise1, exercise2 } = myExercise?.response?.routine?.[trainingTypeAux];
            dispatch(setExerciseAction({
                trainingType: trainingTypeAux,
                exercise1,
                exercise2,
                currentDay: myExercise?.response?.currentDay,
                currentBlock: myExercise?.response?.currentBlock,
                currentExerciseNumber: 1
            }));
            // setTraining({
            //     training: myExercise?.response?.routine?.[trainingTypeAux],
            // });

        }
    });

    const onClick = () => {
        // navigate(`/${PATHS.TRAINING}`, { state:{training: training.training, currentBlock: training.currentBlock, currentDay: training.currentDay, trainingType} });
        navigate(`/${PATHS.TRAINING}`);
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
            <RoutineCards currentBlock={currentBlock} />
            {/* Days */}
            <div className="my-4 col-12">
                {DAYS.map(day => <RoutineLevel
                    onClick={onClick}
                    trainingType={trainingType}
                    text={t('global.day', { number: day })}
                    done={day < currentDay}
                    active={day === currentDay}
                />)}
            </div>
        </MainContainer>
    )
}

export default TrainingDashboard
