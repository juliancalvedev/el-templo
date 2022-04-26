import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATHS } from '../../../../constants/paths';
import Button from '../../../../components/Button/Button';
import MainContainer from '../../../../components/MainContainer/MainContainer';
import useFetch from '../../../../hooks/useFetch';
import { getUserById } from '../../../../services/admin';

export const AdminUserInfo = () => {
	const navigate = useNavigate();

	const id = useLocation()?.search?.split('id=')?.[1];
	if (!id) {
		navigate(-1);
	}

	const [data, error, apiCall] = useFetch({
		service: () => getUserById(id),
		globalLoader: true
	})

	useEffect(() => {
		if (id) {
			apiCall();
		}
	}, [id])

	return (
		<MainContainer col='12' text={`${data?.user?.firstName + ' ' + data?.user?.lastName}`} back>
			<div className=''>
					{/* <ul>
						<li>ID: {_id}</li>
						<li>Email: {email}</li>
						<li>Nombre: {firstName}</li>
						<li>Apellido: {lastName}</li>
						<li>Fecha de Nacimiento: {dateOfBirth}</li>
						<li>Sexo: {sex}</li>
						<li>País: {country}</li>
						<li>
							Imagen:{' '}
							{<img src={img} style={{ height: '50px' }}></img>}
						</li>
						<li>Fecha de Creación: {createdAt}</li>
						<li>Rol: {role}</li>
						<li>Verificación de Email: {emailIsVerified}</li>
						<li>Usuario Habilitado: {enabled}</li>
						<li>Nivel: {level}</li>
						<li>Comienzo de Habilitación: {startEnabledDate}</li>
						<li>Finalización de Habilitación: {endEnabledDate}</li>
					</ul> */}
			</div>
		</MainContainer>
	);
};
