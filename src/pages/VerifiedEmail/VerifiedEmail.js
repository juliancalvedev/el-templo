import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { verifyEmailToBackEnd } from '../../services/auth';

import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import { PATHS } from '../../constants/paths';
import MainContainer from '../../components/MainContainer/MainContainer';
import ImgEmailVerified from '../../assets/images/ImgEmailVerified';
import useFetch from '../../hooks/useFetch';
import { getSearchParams } from '../../utils/searchParams';

const VerifiedEmail = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const token = getSearchParams('token');

	const [data, error, apiCall] = useFetch({
		service: () => verifyEmailToBackEnd({ token }),
		globalLoader: true
	})

	const navigateToLoggin = () => navigate(`/${PATHS.LOGIN}`);

	useEffect(() => {
		if (token) {
			apiCall();
		}
	}, [token]);

	return (
		<MainContainer>
							<Text
								text={t('auth.emailVerified.title')}
								size='4'
								bold
								className='mt-5 pt-4'
							/>
						<div className='mt-2 d-flex justify-content-center'>
							<ImgEmailVerified />
						</div>

							<Text
								text={t('auth.emailVerified.auxText')}
								size='3'
							/>


							<Button
								text={t('auth.emailVerified.btnNext')}
								onClick={navigateToLoggin}
							/>

		</MainContainer>
	);
};

export default VerifiedEmail;
