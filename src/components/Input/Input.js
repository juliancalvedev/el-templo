import useStyles from './useStyles';
import './Input.scss';
import IconEye from '../../assets/Icons/IconEye';
import IconCheck from '../../assets/Icons/IconCheck';
import Text from '../Text/Text';

const ICON = {
    eye: <IconEye />,
    check: <IconCheck />
}

const Input = ({
    label,
    value,
    onChange,
    type = 'text',
    placeholder,
    isInvalid,
    isValid,
    invalidText,
    feedback,
    transparent,
    icon,
    name,
    className,
    onClickIcon = () => { }
}) => {

    const styles = useStyles({ isValid, isInvalid, transparent, className });
    const feedbackColorType = (isInvalid && 'error') || (transparent && 2);

    return (
        <div className={styles.container}>
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.inputContent}>
                <input
                    onChange={onChange}
                    type={type}
                    name={name}
                    className={styles.input}
                    value={value}
                    placeholder={placeholder}
                />
                <div className={styles.iconContainer}>
                    <span onClick={onClickIcon}>{isValid ? ICON.check : ICON[icon]}</span>
                </div>
            </div>
                {feedback && <Text color={feedbackColorType} size={1} justify='end' text={feedback} />}
                {isInvalid && <Text color='error' size={1} justify='end' text={invalidText} />}
        </div>
    )
}

export default Input;