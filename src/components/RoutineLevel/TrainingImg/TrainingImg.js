import Text from "../../Text/Text"
import useStyles from './useStyles';

const TrainingImg = ({ text, active, done, onClick }) => {

    const styles = useStyles({ active, done });

    const handleClick = () => {
        if(active){
            onClick();
        }
    }

    return (
        <div className={styles.mainContainer} onClick={handleClick}>
            <div className={styles.textContainer}>
                <Text color={active ? 6 : done ? 3 : 0} text={text} />
            </div>
            <div className={styles.imgContainer}>
                <img className={styles.img} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Galletita_Sonrisas.jpg/245px-Galletita_Sonrisas.jpg' width='100' height='100' />
            </div>
        </div>
    )
}

export default TrainingImg
