import './Text.scss';
import useStyles from "./useStyles"
// sizes : 1, 2, 3, 4, 5
// if title is true, the font-family will change to the title
// colors: 1, 2, 3
const Text = ({ text, size = '3', bold, underline, color = 1, font = 1, className, onClick = () => {} }) => {

    const styles = useStyles({ bold, underline, size, color, className, font });

    return (
        <div>
            <p onClick={onClick} className={styles.text}>{text}</p>
        </div>
    )
}

export default Text
