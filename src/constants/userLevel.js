import { useSelector } from "react-redux";

export const UserTrainingLevel = () => {
    const {trainingLevel} = useSelector((store) => store.user)
    let level = trainingLevel -1;

    const levels= {
        1: 'Principiante',
        2: 'Intermedio',
        3: 'avazado',
        4: 'aficionado',
        5: 'experto'
    }
    const flag = levels[level]

    return flag
}
