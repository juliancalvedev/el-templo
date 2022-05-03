import useStyles from "./useStyles";
import './RoutineCard.scss';
import Text from "../../Text/Text";
import EllipseChecked from "../../../assets/symbols/EllipseChecked";

const RoutineCard = ({ done }) => {
    const styles = useStyles();

    return (
        <div className={styles.cardBody}>
            <Text color={6} text='Bloque 1' />
            <div className={styles.cardStatusContainer}>
                <div className={styles.cardStatus}>
                        {done ? <EllipseChecked/> : <div className={styles.cardStatusEmpty}></div>}
                </div>
            </div>
        </div>
    )
}

export default RoutineCard;