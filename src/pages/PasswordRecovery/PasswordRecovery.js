import { useEffect } from 'react';
import { getSearchParams } from '../../utils/searchParams';
import { enablePasswordRecovery } from '../../services/auth';
import PasswordRecoveryForm from './PasswordRecoveryForm';
import PasswordRecoveryError from './PasswordRecoveryError';
import useFetch from '../../hooks/useFetch';
import MainContainer from '../../components/MainContainer/MainContainer';
import TopSpacing from '../../components/TopSpacing/TopSpacing';
import Input from '../../components/Input/Input';

const PasswordRecovery = () => {
	const token = getSearchParams('token');

	const [data, error, apiCall] = useFetch({
		service: () => enablePasswordRecovery({ token }),
		globalLoader: true
	})

	useEffect(() => {
		if (token) {

			apiCall();
		}
	}, [token]);

	return (
		<MainContainer>
			<div className='col-12 d-flex justify-content-center h-100 py-5 mb-4'>
				{data && <PasswordRecoveryForm />}
				{error && <PasswordRecoveryError />}
			</div>
		</MainContainer>
	);
};

export default PasswordRecovery;
