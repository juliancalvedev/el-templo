import { useState } from 'react';
import useForm from './UseForm';
import { RegisterValidate } from './RegisterValidate';
import Input from '../../components/Input/Input';
import { useTranslation } from 'react-i18next';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';
import InputSelect from '../../components/InputSelect/InputSelect';
import useStyles from './useStyles';
import SexSelector from '../../components/SexSelector/SexSelector';
import './Register.scss';
import { Countries } from '../../constants/countries';
import { imgToBase64 } from '../../utils/base64';
import UserImage from '../../components/UserImage/UserImage';
import { PROFILE_IMAGE_DEFAULT } from '../../constants/profileImageDefault';


export const Register = () => {
	const { t } = useTranslation();
	const styles = useStyles();
	const countries = Countries({ t });


	const [type, setType] = useState('text');
	const onFocus = () => setType('date');
	const onBlur = () => setType('text');

	/*.....................................................................*/

	const [baseImage, setBaseImage] = useState('');

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


	const clickFile = () => {
		document.getElementById('file').click();
	};
	const onChangeImg64 = (e) => imgToBase64({ e, setter: setBaseImage });

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
			<div className={styles.main}>
				<div className={styles.Rcontainer}>
					<div className={styles.base64}>
						<input
							className={styles.base1}
							id='file'
							type='file'
							onChange={onChangeImg64}
							hidden
						/>
						<UserImage edit onClick={clickFile} img={baseImage} />

						<div className={styles.NL}>
							<div className={styles.Fname}>
								<Input
									name='firstName'
									placeholder={t(
										'auth.register.firstNamePlaceholder'
									)}
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
									placeholder={t(
										'auth.register.lastNamePlaceholder'
									)}
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
				<div className={styles.inputsRadio}>
					<div className={styles.sexTitle} value={values.sex}>
						<div className={styles.labelSex}>
							<Text
								size='3'
								text={t('auth.register.sexTitle')}
								bold
							/>
						</div>
						<SexSelector
							checkedF={values.sex === 'F' ? true : false}
							checkedM={values.sex === 'M' ? true : false}
							checkedO={values.sex === 'O' ? true : false}
							handleChange={handleChange}
						/>
					</div>
				</div>

				<div className={styles.Rcontainer2}>
					<div>
						<Input
							type='email'
							name='email'
							placeholder={t('auth.register.emailPlaceholder')}
							value={values.email}
							onChange={handleChange}
						/>
						{errors.email && (
							<p>
								{(errors.email = t('auth.register.emailError'))}
							</p>
						)}
					</div>
					<div>
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
							feedback={t('global.errors.validPassword')}
						/>
					</div>

					<div>
						<Input
							onChange={handleChange}
							isInvalid={errors.password}
							invalidText={t('auth.register.password2Error')}
							icon='eye'
							type={inputTypePassword2}
							onClickIcon={onClickIconPassword2}
							name='password2'
							placeholder={t(
								'auth.register.password2Placeholder'
							)}
							value={values.password2}
						/>
					</div>

					<InputSelect
						name='country'
						defaulValue={values.country}
						onChange={handleChange}
						options={countries}
					/>

					{errors.country && (
						<p>
							{(errors.country = t('auth.register.countryError'))}
						</p>
					)}
					<Input
						placeholder={t('auth.register.dateOfBirth')}
						name='dateOfBirth'
						value={values.dateOfBirth}
						onChange={handleChange}
						icon={'date'}
						type={type}
						onBlur={onBlur}
						onFocus={onFocus}
					/>
				</div>

				<div className={styles.buttonInput}>
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
						className={styles.textTermsAndConditions1}
					/>

					<Text
						size='1'
						color={4}
						underline
						text={t('auth.register.termsAndConditions2')}
					/>
				</div>
			</div>
		</MainContainer>
	);
};

export default Register;
