import { useState } from 'react';
import useForm from './UseForm';
import { RegisterValidate } from './RegisterValidate';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useTranslation } from 'react-i18next';
import Title from '../../components/Title/Title';
import './Register.scss'


export const Register = () => {
	const { t } = useTranslation();
	const { handleChange, values, handleSubmit, errors } =
		useForm(RegisterValidate);

	
	//Base64

	const [baseImage, setBaseImage] = useState('');

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
		<div className='formtotal'>
			<form className='Register col-12' onSubmit={handleSubmit}>
				
				<div className='Base64img'>
					<input id='file' type='file' onChange={handleClickimg} hidden />
					<img src={baseImage} onClick={clickFile} />
				</div>

				<div className='form-inputs mb-2 text-center'>
					<Input
						className='input1 col-8 rounded-pill'
						type='firstName'
						name='firstName'
						placeholder={t('auth.register.firstNamePlaceholder')}
						value={values.firstName}
						handleChange={handleChange}
					/>
					{errors.firstName && (
						<p>
							{(errors.firstName = t('auth.register.firstNameError'))}
						</p>
					)}
				</div>
				<div className='form-inputs mb-5 text-center '>
					<Input
						className='input1 col-8 rounded-pill'
						type='lastName'
						name='lastName'
						placeholder={t('auth.register.lastNamePlaceholder')}
						value={values.lastName}
						handleChange={handleChange}
					/>
					{errors.lastName && (
						<p>{(errors.lastName = t('auth.register.lastNameError'))}</p>
					)}
				</div>

				<div className='form-input mb-5' name='sex' value={values.sex}>
					<div className='mb-0'>
						<label className='nameInput'>
							{t('auth.register.sexTitle')}
						</label>
					</div>

					<input
						type='radio'
						className='btn-check '
						name='sex'
						id='btnradio1'
						value='M'
						checked={values.sex === 'M' ? true : false}
						onChange={handleChange}
					/>
					<label
						className='btn btn-outline btnCheck1 col-3 '
						htmlFor='btnradio1'
					>
						{t('auth.register.sex1')}
					</label>

					<input
						type='radio'
						className='btn-check'
						name='sex'
						id='btnradio2'
						value='F'
						checked={values.sex === 'F' ? true : false}
						onChange={handleChange}
					/>
					<label
						className='btn btn-outline btnCheck2 col-3   '
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
						className='btn btn-outline btnCheck3 col-3 '
						htmlFor='btnradio3'
					>
						{t('auth.register.sex3')}
					</label>
				</div>

				<div className='form-inputs mb-2'>
					<Input
						className='input1 col-10 rounded-pill'
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
						className='input1 col-10 rounded-pill'
						type='password'
						name='password'
						placeholder={t('auth.register.passwordPlaceholder')}
						value={values.password}
						handleChange={handleChange}
					/>
					{errors.password && (
						<p>{(errors.password = t('auth.register.password1Error'))}</p>
					)}
				</div>
				<div className='form-inputs mb-2'>
					<Input
						className='input1 col-10 rounded-pill '
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
				<div className='form-inputs '>
					<select
						className='input1 col-10 rounded-pill'
						value={values.country}
						onChange={handleChange}
						name='country'
					>
						<option>{t('auth.register.countrySelection')}</option>
						<option value='argentina'>
							{t('auth.register.country1')}
						</option>
						<option value='us'>{t('auth.register.country2')}</option>
						<option value='mexico'>{t('auth.register.country3')}</option>
					</select>

					{errors.country && (
						<p>{(errors.country = t('auth.register.countryError'))}</p>
					)}
				</div>
				<div className='form-inputs mb-5'>
					<label className='nameInput'>{t('auth.register.dateOfBirth')}</label>
					<Input
						className='input1 col-10 rounded-pill '
						type='date'
						name='dateOfBirth'
						value={values.dateOfBirth}
						handleChange={handleChange}
					/>
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
			</form>
		</div>
	);
};

export default Register;
