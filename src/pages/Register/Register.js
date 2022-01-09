import { useState } from 'react';
import useForm from './UseForm';
import { RegisterValidate } from './RegisterValidate';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useTranslation } from 'react-i18next';
import './Register.scss'
import MainContainer from '../../components/MainContainer/MainContainer';
import { Link } from 'react-router-dom';
import UserImage from '../../components/UserImage/UserImage';
import InputIcon from '../../components/InputIcon/InputIcon';
import TopBar from '../../components/TopBar/TopBar';



export const Register = () => {
	const { t } = useTranslation();
	const { handleChange, values, handleSubmit, errors } =
		useForm(RegisterValidate);

	
	//Base64

	const [baseImage, setBaseImage] = useState(
		'https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg'
	);

	const uploadImage = async (e) => {
		const file = e.target.files[0];
		const base64 = await convertBase64(file);
		setBaseImage(base64);
		
	};

	const clickFile = () => {
		document.getElementById('file').click();
	};
	const handleClickimg = (e) => {
		uploadImage(e);
	};

	const convertBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);

			fileReader.onload = () => {
				resolve(fileReader.result);
			};

			fileReader.onerror = (error) => {
				reject(error);
			};
		});
		

		//Base64
	};

	return (
		<MainContainer text={'Register '} bg={4} color={1} back shadow>
			<form className='register col-12 mt-5' onSubmit={handleSubmit}>
				<div className='contBaseInputs px-3 mt-4 col-12 '>
					<div className='baseI64 d-flex align-items-center col-12 '>
						<input
							className='base-img1 '
							id='file'
							type='file'
							onChange={handleClickimg}
							hidden
							value={values.img}
						/>
						<UserImage
							className='base-img2  '
							src={baseImage}
							name='img'
							onClick={clickFile}
							value={values.img}
						/>

						<div className='inputsNL col-9 '>
							<div className='fName '>
								<Input
									className='inputs col-12 '
									type='firstName'
									name='firstName'
									placeholder={t('auth.register.firstNamePlaceholder')}
									value={values.firstName}
									handleChange={handleChange}
								/>
								{errors.firstName && (
									<p>
										{
											(errors.firstName = t(
												'auth.register.firstNameError'
											))
										}
									</p>
								)}
							</div>
							<div className='lastN mt-2 '>
								<Input
									className='inputs col-12 '
									type='lastName'
									name='lastName'
									placeholder={t('auth.register.lastNamePlaceholder')}
									value={values.lastName}
									handleChange={handleChange}
								/>
								{errors.lastName && (
									<p>
										{
											(errors.lastName = t(
												'auth.register.lastNameError'
											))
										}
									</p>
								)}
							</div>
						</div>
					</div>
				</div>

				<div className='inputsRadio justify-content-center align-content-center d-flex mt-4 mb-4 col-12'>
					<div
						className='inputSexTitle col-10'
						name='sex'
						value={values.sex}
					>
						<div className='mb-0 '>
							<label className='nameInput '>
								{t('auth.register.sexTitle')}
							</label>
						</div>
						<div className='btnheck'>
							<input
								type='radio'
								className='btn-check'
								name='sex'
								id='btnradio1'
								value='F'
								checked={values.sex === 'F' ? true : false}
								onChange={handleChange}
							/>
							<label
								className='btn-all btn btn-outline  btncheck1  col-4 '
								htmlFor='btnradio1'
							>
								{t('auth.register.sex1')}
							</label>

							<input
								type='radio'
								className='btn-check'
								name='sex'
								id='btnradio2'
								value='M'
								checked={values.sex === 'M' ? true : false}
								onChange={handleChange}
							/>
							<label
								className='btn btn-outline btn-all btncheck2 col-4   '
								htmlFor='btnradio2'
							>
								{t('auth.register.sex2')}
							</label>

							<input
								type='radio'
								className='btn-check'
								name='sex'
								id='btnradio3'
								value='O'
								checked={values.sex === 'O' ? true : false}
								onChange={handleChange}
							/>
							<label
								className='btn btn-outline btn-all btncheck3 col-4 checked '
								htmlFor='btnradio3'
							>
								{t('auth.register.sex3')}
							</label>
						</div>
					</div>
				</div>
				<div className='inputsP2  m-3'>
					<div className='form-inputs mb-3'>
						<Input
							className='inputs col-12 '
							type='email'
							name='email'
							placeholder={t('auth.register.emailPlaceholder')}
							value={values.email}
							handleChange={handleChange}
						/>
						{errors.email && (
							<p>{(errors.email = t('auth.register.emailError'))}</p>
						)}
					</div>
					<div className='form-inputs mb-2'>
						<Input
							className='inputs col-12 '
							type='password'
							name='password'
							placeholder={t('auth.register.passwordPlaceholder')}
							value={values.password}
							handleChange={handleChange}
						/>
						{errors.password && (
							<p>
								{(errors.password = t('auth.register.password1Error'))}
							</p>
						)}

						<label className='conteinerPass mt-0 col-12 text-end'>
							{t('auth.register.passwordRequirement')}
						</label>
					</div>
					<div className='form-inputs mb-3'>
						<Input
							className='inputs col-12  '
							type='password'
							name='password2'
							placeholder={t('auth.register.password2Placeholder')}
							value={values.password2}
							handleChange={handleChange}
						/>
						{errors.password2 && (
							<p>
								{(errors.password2 = t('auth.register.password2Error'))}
							</p>
						)}
					</div>
					<div className='form-inputs-select mb-0'>
						<select
							className='inputs__select  col-12'
							value={values.country}
							onChange={handleChange}
							name='country'
						>
							<option>{t('auth.register.countrySelection')}</option>
							<option value='argentina'>
								{t('auth.register.country1')}
							</option>
							<option value='us'>{t('auth.register.country2')}</option>
							<option value='mexico'>
								{t('auth.register.country3')}
							</option>	
						</select>
					<div className='chevron-down'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='currentColor'
								className='bi bi-chevron-down'
								viewBox='0 0 16 16'
							>
								<path
									fill='evenodd'
									d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
								/>
							</svg>
						</div>

						{errors.country && (
							<p>{(errors.country = t('auth.register.countryError'))}</p>
						)}
					</div>
					<label className='nameInput2n mb-0'>
						{t('auth.register.dateOfBirth')}
					</label>
					<div className='input-date '>
						<Input
							className='inputs col-12  '
							type='date'
							name='dateOfBirth'
							value={values.dateOfBirth}
							handleChange={handleChange}
						/>
						<div className='input-date-icon'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							className='bi bi-calendar4'
							viewBox='0 0 16 16'
						>
							<path d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z' />
						</svg>	
						</div>
						
						{errors.dateOfBirth && (
							<p>
								{
									(errors.dateOfBirth = t(
										'auth.register.dateOfBirthError'
									))
								}
							</p>
						)}
					</div>
				</div>
				<div className='col-10 m-4 '>
					<Button
						disabled={
							(!values.firstName,
							!values.lastName,
							!values.sex,
							!values.email,
							!values.password,
							!values.password2,
							!values.country,
							!values.dateOfBirth)
						}
						onClick={handleSubmit}
						title={t('auth.register.btnRegister')}
					/>

					<p className='TC d-flex justify-content-center mb-0'>
						{t('auth.register.termsAndConditions1')}
					</p>
					<Link className='TC2 d-flex justify-content-center' to=''>
						{t('auth.register.termsAndConditions2')}
					</Link>
				</div>
			</form>
		</MainContainer>
	);
};

export default Register;
