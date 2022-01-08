import useStyles from './useStyles';
import './Input.scss';
import IconEye from '../../assets/Icons/IconEye';
import IconCheck from '../../assets/Icons/IconCheck';

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
    validText,
    feedback,
    transparent,
    icon,
    name,
    className,
    onClickIcon = () => { }
}) => {

    const styles = useStyles({ isValid, isInvalid, transparent, className });

    return (
        <div className={styles.container}>
            {label && <label className="form-label">{label}</label>}
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
            {invalidText && <div className="invalid-feedback">
                {invalidText}
            </div>}
            {validText && <div className="valid-feedback">
                {validText}
            </div>}
            {feedback && <div className="feedback">
                {feedback}
            </div>}
        </div>
    )
}

export default Input;