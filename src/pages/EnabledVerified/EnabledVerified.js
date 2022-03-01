import { useSelector } from 'react-redux';
import { resendVerifyEmail } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PATHS } from '../../constants/paths';

import './EnabledVerified.scss';

import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import MainContainer from '../../components/MainContainer/MainContainer';
import ImgCorreoNoVerificado from '../../assets/images/ImgCorreoNoVerificado';
import useFetch from '../../hooks/useFetch';
import useStyles from './useStyles';

const EnabledVerified = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	const styles = useStyles();

	const { emailIsVerified, savedEmail } = useSelector((store) => store.auth);

	const [data, error, apiCall] = useFetch({
		service: () => resendVerifyEmail(savedEmail),
		globalLoader: true,
		callback: () => navigate(`/${PATHS.LOGIN}`),
	});

	return (
		<MainContainer scroll>
			<div className={styles.maincontainer}>
				{!emailIsVerified && (
					<div className={styles.container}>
						<div className={styles.title}>
							<Text
								text={t(
									'auth.enabledVerified.emailNotVerified.title'
								)}
								size='4'
								bold
							/>
						</div>
						<div className={styles.text1}>
							<Text
								text={t(
									'auth.enabledVerified.emailNotVerified.auxText'
								)}
								size='3'
							/>
						</div>
						<div className={styles.img}>
							<ImgCorreoNoVerificado />
						</div>

						<div className={styles.text2}>
							<Text
								text={t(
									'auth.enabledVerified.emailNotVerified.hasNotEmail'
								)}
								size='1'
							/>
							<Button
								text={t(
									'auth.enabledVerified.emailNotVerified.btnResendEmail'
								)}
								onClick={apiCall}
							/>
						</div>
					</div>
				)}
			</div>
		</MainContainer>
	);
};

export default EnabledVerified;
