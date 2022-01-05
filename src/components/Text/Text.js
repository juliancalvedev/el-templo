import './Text.scss';
import useStyles from "./useStyles"
// sizes : 1, 2, 3, 4, 5
// if title is true, the font-family will change to the title
// colors: 1, 2, 3
const Text = ({ text, size = '3', bold, underline, color = 1, title, className }) => {

    if(title) {
        size = '5';
    }

    const styles = useStyles({ bold, underline, size, color, title, className });

    return (
        <div>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default Text
