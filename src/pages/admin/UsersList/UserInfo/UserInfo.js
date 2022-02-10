import { useLocation, useNavigate } from 'react-router-dom';
import { PATHS } from '../../../../constants/paths';
import Button from '../../../../components/Button/Button';
import Text from '../../../../components/Text/Text';
import MainContainer from '../../../../components/MainContainer/MainContainer';

export const UserInfo = () => {
	const navigate = useNavigate();

	const location = useLocation();
	const {
		_id,
		email,
		firstName,
		lastName,
		dateOfBirth,
		sex,
		country,
		img,
		createdAt,
		role,
		emailIsVerified,
		enabled,
		level,
		endEnabledDate,
		startEnabledDate,
	} = location.state.user;

	const handleButtonBack = () => navigate(`/${PATHS.USERS_LIST}`);

	return (
		<MainContainer col='12'>
			<div className=''>
				<div className='list'>
					<ul>
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
					</ul>
				</div>
				<Button text={'Volver'} size={1} onClick={handleButtonBack} />
			</div>
		</MainContainer>
	);
};
