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
import InputDate from '../../components/InputDate/InputDate';
import ButtonRadio from '../../components/ButtonRadio/ButtonRadio';
import InputSelect from '../../components/InputSelect/InputSelect';
import useStyles from './useStyles';

export const Register = () => {
	const { t } = useTranslation();
	const styles = useStyles();



	/*.....................................................................*/

	const [baseImage, setBaseImage] = useState(
		'https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg'
	);


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

	const { handleChange, values, handleSubmit, errors } = useForm(
		RegisterValidate,
		baseImage
	);

	return (
		<MainContainer
			text={t('auth.register.register')}
			back
			shadow
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
				<div className='inputSexTitle col-10' name='sex' value={values.sex}>
					<div className='mb-0 '>
						<label className='nameInput '>
							{t('auth.register.sexTitle')}
						</label>
					</div>
					<div>
						<div className='d-flex col-12'>
							<div className='col-4'>
								<ButtonRadio
									type={'radio'}
									name={'sex'}
									id={'btnradio1'}
									defaultValue={'F'}
									checked={values.sex === 'F' ? true : false}
									onChange={handleChange}
									colors={1}
									htmlFor={'btnradio1'}
									label={t('auth.register.sex1')}
								/>
							</div>

							<div className='col-4'>
								<ButtonRadio
									type='radio'
									name={'sex'}
									id={'btnradio2'}
									defaultValue={'M'}
									checked={values.sex === 'M' ? true : false}
									onChange={handleChange}
									colors={2}
									label={t('auth.register.sex2')}
									htmlFor={'btnradio2'}
								/>
							
							</div>	
							<div className='col-4'>
									<ButtonRadio
										type={'radio'}
										name={'sex'}
										id={'btnradio3'}
										defaultValue={'O'}
										checked={values.sex === 'F' ? true : false}
										onChange={handleChange}
										colors={3}
										htmlFor={'btnradio3'}
										label={t('auth.register.sex3')}
										size={1}
										container={1}
									/>
								</div>
						</div>
					</div>
				</div>
			</div>

			<div className='inputsP2 mt-0 m-3'>
				<div className='form-inputs  mb-3'>
					<Input
						type='email'
						name='email'
						placeholder={t('auth.register.emailPlaceholder')}
						defaultValue={values.email}
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

				<InputSelect
					name={'country'}
					value={values.country}
					onChange={handleChange}
					value1={'argentina'}
					value2={'us'}
					value3={'mexico'}
					label={t('auth.register.countrySelection')}
					option1={t('auth.register.country1')}
					option2={t('auth.register.country2')}
					option3={t('auth.register.country3')}
				/>

				{errors.country && (
					<p>{(errors.country = t('auth.register.countryError'))}</p>
				)}
				<InputDate
					placeholder={t('auth.register.dateOfBirth')}
					name='dateOfBirth'
					value={values.dateOfBirth}
					onChange={handleChange}
				/>

				{errors.dateOfBirth && (
					<p>
						{(errors.dateOfBirth = t('auth.register.dateOfBirthError'))}
					</p>
				)}
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

				<Text
					size='1'
					text={t('auth.register.termsAndConditions1')}
					className='mt-1'
				/>

				<Text
					size='1'
					color={4}
					underline
					text={t('auth.register.termsAndConditions2')}
				/>
			</div>
		</MainContainer>
	);
};

export default Register;