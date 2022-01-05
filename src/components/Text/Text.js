import './Text.scss';
import useStyles from "./useStyles"
// sizes : xs, sm, md, lg, xl
// if title is true, the font-family will change to the title
// colors: primary, secondary, thirth
const Text = ({ text, size = 'md', bold, underline, color = 1, title, className }) => {

    if(title) {
        size = 'xl';
    }

    const styles = useStyles({ bold, underline, size, color, title, className });

    return (
        <div>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default Text
