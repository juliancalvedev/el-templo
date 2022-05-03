import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import MainContainer from "../../components/MainContainer/MainContainer";
import DivTop from "../../components/DivTop/DivTop";
import DivBottom from "../../components/DivBottom/DivBottom";
import Button from "../../components/Button/Button";
import { getExerciseById } from "../../services/admin";
import { makeTraining } from "../../services/training";
import useFetch from "../../hooks/useFetch";
import CardInfoTraining from "../../components/CardInfoTrainingImg/CardInfoTraining";
import { langUpperCased } from "../../utils/localStorage";
import SubtitleBar from "../../components/SubtitleBar/SubtitleBar";
import SkipRoutine from "./SkipRoutine/SkipRoutine";
import { useState } from "react";
import { TRAINING_TYPES } from "../../constants/training";

const TrainingRoutine = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const lang = langUpperCased();

    const [showSkip, setShowSkip] = useState(true);

    const { training, currentBlock, currentDay, trainingType } = useLocation()?.state;
    if (!training || !currentBlock || !currentDay) {
        navigate(-1);
    }

    console.log('TT', training);

    const [exercise1, errorExercise1, exercise1ApiCall] = useFetch({
        service: () => getExerciseById({ id: training?.exercise1?.exercise?._id }),
        callNow: true,
        globalLoader: true
    })

    const [exercise2, errorExercise2, exercise2ApiCall] = useFetch({
        service: () => getExerciseById({ id: training?.exercise2?.exercise?._id }),
        callNow: true,
        globalLoader: true
    })

    const [makeTrainingData, errorMakeTraining, makeTrainingApiCall] = useFetch({
        service: () => makeTraining({ trainingType, currentBlock, currentDay }),
        globalLoader: true,
        callback: () => navigate(-1)
    })


    return (
        <MainContainer
            back
            color={2}
            bg={1}
            text={t('user.training.index')}
            navbar
            calc
            col={12}
        >
            <DivTop>
                <SubtitleBar text={`
                 ${t('admin.routines.block')}: ${currentBlock} -
                  ${t('admin.routines.day')}: ${currentDay} - ${t(`routineTypes.${trainingType}`)}`
                } />
                {showSkip && (trainingType === TRAINING_TYPES.ADAPTATION1 || trainingType === TRAINING_TYPES.ADAPTATION2) && <SkipRoutine onClick={makeTrainingApiCall} onClose={() => setShowSkip(false)} />}
                <div className="col-11 d-flex flex-column align-items-center m-auto">

                    <CardInfoTraining tags={exercise1?.exercise?.tags.map(t => t[`title${lang}`])} text={exercise1?.exercise?.[`title${lang}`]} />
                    <CardInfoTraining tags={exercise2?.exercise?.tags.map(t => t[`title${lang}`])} text={exercise2?.exercise?.[`title${lang}`]} />
                </div>
            </DivTop>
            <DivBottom className="col-12">
                <div className="col-11 m-auto">
                    <Button text='comenzar training asdasd' />
                </div>
            </DivBottom>

        </MainContainer>
    );
}

export default TrainingRoutine