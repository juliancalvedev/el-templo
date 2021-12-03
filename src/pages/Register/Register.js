
import useForm from './UseForm';
import { RegisterValidate } from './RegisterValidate';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useTranslation } from 'react-i18next';
import Title from '../../components/Title/Title';


export const Register = () => {
	const { t } = useTranslation();
	const { handleChange, values, handleSubmit, errors } =
		useForm(RegisterValidate);


	return (
		<div className='container d-flex justify-content-center col '>
			<form className='Register' onSubmit={handleSubmit}>
				<Title text={t('auth.register.title')} />

				<div className='form-inputs'>
					<Input
						type='firstName'
						name='firstName'
						placeholder='Nombre'
						value={values.firstName}
						handleChange={handleChange}
					/>
					{errors.firstName && <p>{errors.firstName}</p>}
				</div>
				<div className='form-inputs'>
					<Input
						type='lastName'
						name='lastName'
						placeholder='Apellido'
						value={values.lastName}
						handleChange={handleChange}
					/>
					{errors.lastName && <p>{errors.lastName}</p>}
				</div>

				<div class='form-input' name='sex' value={values.sex}>
					<input
						type='radio'
						class='btn-check'
						name='sex'
						id='btnradio1'
						value='M'
						checked={values.sex === 'M' ? true : false}
						onChange={handleChange}
					/>
					<label class='btn btn-outline-primary' for='btnradio1'>
						{t('auth.register.sex1')}
					</label>

					<input
						type='radio'
						class='btn-check'
						name='sex'
						id='btnradio2'
						value='F'
						checked={values.sex === 'F' ? true : false}
						onChange={handleChange}
					/>
					<label class='btn btn-outline-primary' for='btnradio2'>
						{t('auth.register.sex2')}
					</label>

					<input
						type='radio'
						class='btn-check'
						name='sex'
						id='btnradio3'
						value='O'
						checked={values.sex === 'O' ? true : false}
						onChange={handleChange}
					/>
					<label class='btn btn-outline-primary' for='btnradio3'>
						{t('auth.register.sex3')}
					</label>
				</div>

				<div className='form-inputs'>
					<Input
						type='email'
						name='email'
						placeholder={t('auth.register.emailPlaceholder')}
						value={values.email}
						handleChange={handleChange}
					/>
					{errors.email && <p>{errors.email}</p>}
				</div>
				<div className='form-inputs'>
					<Input
						type='password'
						name='password'
						placeholder={t('auth.register.passwordPlaceholder')}
						value={values.password}
						handleChange={handleChange}
					/>
					{errors.password && <p>{errors.password}</p>}
				</div>
				<div className='form-inputs'>
					<Input
						type='password'
						name='password2'
						placeholder={t('auth.register.password2Placeholder')}
						value={values.password2}
						handleChange={handleChange}
					/>
					{errors.password2 && <p>{errors.password2}</p>}
				</div>
				<div className='form-inputs'>
					<select
						class='col-6'
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

					{errors.country && <p>{errors.country}</p>}
				</div>
				<div className='form-inputs'>
					<label>{t('auth.register.dateOfBirth')}</label>
					<Input
						type='date'
						name='dateOfBirth'
						value={values.dateOfBirth}
						handleChange={handleChange}
					/>
					{errors.dateOfBirth && <p>{errors.dateOfBirth}</p>}
				</div>
				<Button
					disabled={(!values.sex, !values.dateOfBirth)}
					onClick={handleSubmit}
					title={t('auth.register.btnRegister')}
				/>
			</form>
		</div>
	);
};

export default Register;
