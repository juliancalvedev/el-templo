import React, { useState } from 'react';
import useForm from './UseForm';
import { RegisterValidate } from './RegisterValidate';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useDispatch } from 'react-redux';
import { registerAction } from '../../redux/auth';

export const Register = ({ submitRegisterForm }) => {
	const { handleChange, values, handleSubmit, errors } =
		useForm(RegisterValidate);
	const [radioButton, setRadioButton] = useState(false);

	return (
		<div className='container d-flex justify-content-center col '>
			<form className='Register' onSubmit={handleSubmit}>
				<h1 className='d-flex justify-content-center'>Registro</h1>

				<div className='form-inputs'>
					<Input
						type='name'
						name='name'
						placeholder='Nombre'
						value={values.name}
						handleChange={handleChange}
					/>
					{errors.name && <p>{errors.name}</p>}
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
						Male
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
						Female
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
						Other
					</label>
				</div>

				<div className='form-inputs'>
					<Input
						type='email'
						name='email'
						placeholder='email@gmail.com'
						value={values.email}
						handleChange={handleChange}
					/>
					{errors.email && <p>{errors.email}</p>}
				</div>
				<div className='form-inputs'>
					<Input
						type='password'
						name='password'
						placeholder='Enter your password'
						value={values.password}
						handleChange={handleChange}
					/>
					{errors.password && <p>{errors.password}</p>}
				</div>
				<div className='form-inputs'>
					<Input
						type='password'
						name='password2'
						placeholder='Confirme su contraseña'
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
						<option>seleccione un país</option>
						<option value='argentina'>Argentina</option>
						<option value='us'>U.S</option>
						<option value='mexico'>Mexico</option>
					</select>

					{errors.country && <p>{errors.country}</p>}
				</div>
				<div className='form-inputs'>
					<Input
						type='date'
						max='01-01-1921'
						name='birth'
						placeholder='Fecha de nacimiento'
						value={values.birth}
						handleChange={handleChange}
					/>
					{errors.birth && <p>{errors.birth}</p>}
				</div>
				<Button
					disabled={(!values.sex, !values.birth)}
					onClick={handleSubmit}
					title={'Registro'}
				/>
				<span className='form-input-login'>
					Ya tienes una cuenta? Login <a href='#'>Click aquí</a>
				</span>
			</form>
		</div>
	);
};

export default Register;
