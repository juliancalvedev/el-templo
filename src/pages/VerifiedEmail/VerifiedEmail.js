import { useEffect, useState } from 'react';
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

			<div className='col-12 d-flex flex-column align-items-center'>
				{data && (
					<div className='col-12 h-100 d-flex flex-column align-items-center justify-content-between '>
						<div className='col-10 text-center mt-4 pt-5'>
							<Text
								text={t('auth.emailVerified.title')}
								size='4'
								bold
							/>
						</div>
						<div className='mt-5'>
							<ImgEmailVerified />
						</div>
						<div className='col-12 d-flex flex-column align-items-center justify-content-between '>

							<Text
								text={t('auth.emailVerified.auxText')}
								size='3'
							/>
						</div>

						<div
							className='col-10'
							style={{
								marginBottom: '18%',
							}}
						>
							<Button
								text={t('auth.emailVerified.btnNext')}
								onClick={navigateToLoggin}
							/>
						</div>
					</div>
				)}
			</div>

		</MainContainer>
	);
};

export default VerifiedEmail;
