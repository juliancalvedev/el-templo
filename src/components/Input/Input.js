import useStyles from './useStyles';
import './Input.scss';
import IconEye from '../../assets/Icons/IconEye';
import IconCheck from '../../assets/Icons/IconCheck';
import Text from '../Text/Text';

const ICON = ({ transparent }) => {
    const ICONS = {
        eye: <IconEye light={transparent}/>,
        check: <IconCheck />
    }
    return ICONS;
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
    disabled,
    onClickIcon = () => { }
}) => {

    const styles = useStyles({ isValid, isInvalid, transparent, className, icon });
    const feedbackColorType = (isInvalid && 'error') || (transparent && 2);

    return (
        <div className={styles.container}>
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.inputContent}>
                <input
                    disabled={disabled}
                    onChange={onChange}
                    type={type}
                    name={name}
                    className={styles.input}
                    value={value}
                    placeholder={placeholder}
                />
                { (icon || isValid) && <div className={styles.iconContainer}>
                    <span onClick={onClickIcon}>{isValid ? ICON().check : ICON({ transparent })?.[icon]}</span>
                </div>}
            </div>
                {feedback && <Text color={feedbackColorType} size={1} justify='end' text={feedback} />}
                {isInvalid && <Text color='error' size={1} justify='end' text={invalidText} />}
        </div>
    )
}

export default Input;