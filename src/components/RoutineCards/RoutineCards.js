import useStyles from "./useStyles";
import './RoutineCards.scss';
import RoutineCard from "./RoutineCard/RoutineCard";

const RoutineCards = () => {
    const styles = useStyles();

    return (
        <div className={styles.mainContainer}>
            <div className={styles.cardContainer}>
                <RoutineCard done/>
                <RoutineCard />
                <RoutineCard />
            </div>
        </div>

    )
}

export default RoutineCards;