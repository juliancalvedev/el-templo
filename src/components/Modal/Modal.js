import { useTranslation } from 'react-i18next';
import './Modal.scss';
import useStyles from './useStyles';

const Modal = ({
    header,
    children,
    show,
    closeText,
    onClose,
    acceptButton
}) => {

    const { t } = useTranslation();

    const styles = useStyles();

    return (
        <>
            {show && <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        {header}
                    </div>
                    <div className={styles.body}>
                        {children}
                    </div>
                    {<div className={styles.footer}>
                        <button onClick={onClose}>{closeText || t('global.close')}</button>
                        {acceptButton && <button onClick={onClose && acceptButton?.action}>{acceptButton?.text}</button>}
                    </div>}
                </div>
            </div>}
        </>
    )
}

export default Modal
