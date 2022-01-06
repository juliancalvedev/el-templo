import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { verifyEmailToBackEnd } from '../../services/auth';

import Text from '../../components/Text/Text';
import AuxText from '../../components/AuxText/AuxText';
import Button from '../../components/Button/Button';
import { PATHS } from '../../constants/paths';
import MainContainer from '../../components/MainContainer/MainContainer';
import ImgEmailVerified from '../../assets/images/ImgEmailVerified';
import ImgDownArrow from '../../assets/images/ImgDownArrow';

const VerifiedEmail = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const [isVerified, setIsVerified] = useState(true);
	const [isLoading, setIsLoading] = useState(true);

	const navigateToLoggin = () => navigate(`/${PATHS.LOGIN}`);

	const makeVerify = async () => {
		const response = await verifyEmailToBackEnd();
		setIsVerified(response);
		setIsLoading(false);
	};

	useEffect(() => {
		makeVerify();
	}, []);

	return (
		<MainContainer top>
			{isLoading ? (
				<div>
					<h1>{t('global.loading')}</h1>
					<div className='spinner-border' role='status'>
						<span className='sr-only'></span>
					</div>
				</div>
			) : (
				<div className='col-12 d-flex flex-column align-items-center'>
					{isVerified ? (
						<div className='col-12 h-100 d-flex flex-column align-items-center justify-content-between '>
							<div
								className='col-12 '
								style={{ textAlign: 'center' }}
							>
								<Text text={t('auth.emailVerified.title')} />
							</div>
							<div>
								<ImgEmailVerified />
							</div>
							<div className='col-12 d-flex flex-column align-items-center justify-content-between '>
								<AuxText
									text={t('auth.emailVerified.auxText')}
								/>
								<ImgDownArrow />
							</div>
							<div
								className='col-10'
								style={{
									marginBottom: '18%',
								}}
							>
								<Button
									title={t('auth.emailVerified.btnNext')}
									onClick={navigateToLoggin}
								/>
							</div>
						</div>
					) : (
						<div>
							<Text text={t('auth.emailVerified.titleError')} />
							<Button
								title={t('auth.emailVerified.btnNext')}
								onClick={navigateToLoggin}
							/>
						</div>
					)}
				</div>
			)}
		</MainContainer>
	);
};

export default VerifiedEmail;
