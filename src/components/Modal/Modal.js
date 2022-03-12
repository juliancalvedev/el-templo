import {useTranslation} from 'react-i18next';
import Button from '../Button/Button';
import Text from '../Text/Text';
import './Modal.scss';
import useStyles from './useStyles';

const Modal = ({header, children, show, closeText, onClose, acceptButton}) => {
	const {t} = useTranslation();

	const styles = useStyles();

	return (
		<>
			{show && (
				<div className={styles.container}>
					<div className={styles.content}>
						<Text className={styles.header} text={header} size={4}/>

						<div className={styles.body}>{children}</div>
						{
							<div className={styles.footer}>
								<Button
									onClick={onClose}
									type={3}
									text={closeText || t('global.close')}
								/>
								{acceptButton && (
									<button
										text={acceptButton.text}
										onClick={
											onClose && acceptButton?.action
										}
									/>
								)}
							</div>
						}
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
