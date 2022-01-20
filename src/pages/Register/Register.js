import { useState } from 'react';
import useForm from './UseForm';
import { RegisterValidate } from './RegisterValidate';
import Input from '../../components/Input/Input';
import { useTranslation } from 'react-i18next';
import './Register.scss';
import MainContainer from '../../components/MainContainer/MainContainer';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import TopSpacing from '../../components/TopSpacing/TopSpacing';
import { useRef } from 'react';
import Text from '../../components/Text/Text';
import useStyles from './useStyles';

export const Register = () => {
	const { t } = useTranslation();
	const styles=useStyles();

	const [baseImage, setBaseImage] = useState(
		'https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg'
	);
	//inputDate
	const inputDateRef = useRef();
	const onFocusDate = () => (inputDateRef.current.type = 'date');
	const onBlurDate = () => (inputDateRef.current.type = 'text');
	//inputDate

	/*.....................................................................*/

	//InputPasswordEye
	const [inputTypePassword, setInputTypePassword] = useState('password');
	const [inputTypePassword2, setInputTypePassword2] = useState('password');

	const onClickIconPassword = () => {
		if (inputTypePassword === 'password') {
			setInputTypePassword('text');
		}
		if (inputTypePassword === 'text') {
			setInputTypePassword('password');
		}
	};

	const onClickIconPassword2 = () => {
		if (inputTypePassword2 === 'password') {
			setInputTypePassword2('text');
		}
		if (inputTypePassword2 === 'text') {
			setInputTypePassword2('password');
		}
	};
	//InputPasswordEye
	/*.....................................................................*/

	//Base64

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

	const { handleChange, values, handleSubmit, errors } =
	useForm(RegisterValidate, baseImage);

	return (
		<MainContainer
			text={t('auth.register.register')}
			back
			shadow
			bg={2}
			color={1}
			scroll
		>
				<div className={styles.Rcontainer}>
					<div className={styles.base64}>
						<input
							className={styles.base1}
							id='file'
							type='file'
							onChange={handleClickimg}
							hidden
						/>
						<img
							className={styles.base2}
							src={baseImage}
							name='img'
							onClick={clickFile}
							alt='img'
						/>

						<div className={styles.NL}>
							<div className={styles.Fname}>
								<Input
									name='firstName'
									placeholder={t('auth.register.firstNamePlaceholder')}
									value={values.firstName}
									onChange={handleChange}
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
							<div className={styles.Lname}>
								<Input
									name='lastName'
									placeholder={t('auth.register.lastNamePlaceholder')}
									value={values.lastName}
									onChange={handleChange}
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

				<div className='inputsRadio my-3 justify-content-center align-content-center d-flex col-12'>
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
							type='email'
							name='email'
							placeholder={t('auth.register.emailPlaceholder')}
							value={values.email}
							onChange={handleChange}
						/>
						{errors.email && (
							<p>{(errors.email = t('auth.register.emailError'))}</p>
						)}
					</div>
					<div className='form-inputs mb-2'>
						<Input
							name='password'
							placeholder={t('auth.register.passwordPlaceholder')}
							value={values.password}
							onChange={handleChange}
							isInvalid={errors.password}
							invalidText={t('auth.register.password1Error')}
							icon='eye'
							type={inputTypePassword}
							onClickIcon={onClickIconPassword}
							isInvalid={errors.password}
							feedback={t('global.errors.validPassword')}
						/>
					</div>

					<div className='form-inputs mb-3'>
						<Input
							onChange={handleChange}
							isInvalid={errors.password}
							invalidText={t('auth.register.password2Error')}
							icon='eye'
							type={inputTypePassword2}
							onClickIcon={onClickIconPassword2}
							name='password2'
							placeholder={t('auth.register.password2Placeholder')}
							value={values.password2}
						/>
					</div>
					<div className='form-inputs-select col-md-4 my-3 '>
						<select
							className='inputs__select d-flex  pr-5 col-12'
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

						<div className='chevron__down '>
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
					</div>

					{errors.country && (
						<p>{(errors.country = t('auth.register.countryError'))}</p>
					)}

					<div className='input__date col-md-4 my-3 relative'>
						<input
							className='inputs col-12 d-flex pr-5 '
							type='text'
							placeholder={t('auth.register.dateOfBirth')}
							name='dateOfBirth'
							value={values.dateOfBirth}
							onChange={handleChange}
							ref={inputDateRef}
							onFocus={onFocusDate}
							onBlur={onBlurDate}
						/>
						<div className='input-date-icon justify-content-end align-items-center'>
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
				<div className='mb-5'>
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
						text={t('auth.register.btnRegister')}
					/>

					<Text size='1' text={t('auth.register.termsAndConditions1')} className='mt-1'/>
						
					<Text size='1' color={4} underline text={t('auth.register.termsAndConditions2')}/>
						
				</div>
		</MainContainer>
	);
};

export default Register;