import { useSelector } from "react-redux";

export const UserTrainingLevel = () => {
    const {trainingLevel} = useSelector((store) => store.user)
    console.log(trainingLevel)
}
