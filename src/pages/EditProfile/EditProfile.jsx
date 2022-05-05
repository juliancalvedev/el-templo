import { useDispatch } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import Text from '../../components/Text/Text';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import InputSelect from '../../components/InputSelect/InputSelect';
import SexSelector from '../../components/SexSelector/SexSelector';
import MainContainer from '../../components/MainContainer/MainContainer';
import { Countries } from '../../constants/countries';
import { editProfile, getUserInfo } from '../../services/user';
import { useTranslation } from 'react-i18next';
import { PATHS } from '../../constants/paths';
import { useSelector } from 'react-redux';
import useStyles from './useStyles.js';
import './EditProfile.scss';
import { getUserInfoAction } from '../../redux/user';
import InputAvatar from '../../components/InputAvatar/InputAvatar';
import { maxDateOfBirth } from '../../utils/date';

const EditProfile = () => {
	const { t } = useTranslation();
	const styles = useStyles();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const countries = Countries({ t });
	const { firstName, lastName, sex, country, dateOfBirth, img } = useSelector(
		(store) => store.user
	);

	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		sex: '',
		dateOfBirth: '',
		country: '',
	})

	useEffect(() => {
		setValues({
			firstName: firstName,
			lastName: lastName,
			sex: sex,
			dateOfBirth: dateOfBirth,
			country: country?.toLowerCase(),
		})
	}, [firstName, lastName, sex, country, dateOfBirth, img])

	const [callGetUserInfo, setCallGetUserInfo] = useState(false);
	const [showAvatarModal, setShowAvatarModal] = useState(false);
	const [avatarImg, setAvatarImg] = useState(img ? img : 0);

	const [updated, errorUpdateInfo, updateInfo] = useFetch({
		service: () => getUserInfo(),
		globalLoader: true,
		callback: () => {
			dispatch(getUserInfoAction(updated?.user));
			navigate(`/${PATHS.MY_PROFILE}`, { replace: true });
		},
	});

	const [data, error, apiCall] = useFetch({
		service: () => editProfile(values),
		globalLoader: true,
		callback: () => setCallGetUserInfo(true),
	});

	useEffect(() => {
		if (callGetUserInfo) {
			updateInfo();
		}
	}, [callGetUserInfo]);

	const [type, setType] = useState('text');
	const onFocus = () => setType('date');
	const onBlur = () => setType('text');

	const onClickInputAvatar = () => {
		setShowAvatarModal(true);
	};
	const onCloseInputAvatar = () => {
		setShowAvatarModal(false);
	};

	const handleChangeInput = (e) => {
		console.log(e.target.name)
		setValues({ ...values, [e.target.name]: e.target.value })
	}

	return (
		<MainContainer back text='Edición de perfil' shadow>
			<div className={styles.ImgAndName}>
				<div className={styles.userImg} style={{ marginLeft: '-5px' }}>
					<div>
						<InputAvatar
							isEditing
							showModal={showAvatarModal}
							onClickInputAvatar={onClickInputAvatar}
							onCloseInputAvatar={onCloseInputAvatar}
							onChangeAvatar={(value) => setAvatarImg(value)}
							img={avatarImg ? avatarImg : 0}
						/>
					</div>
				</div>
				<div className={styles.userName}>
					<Input
						name='firstName'
						placeholder={t('auth.register.firstNamePlaceholder')}
						value={values?.firstName || ''}
						onChange={handleChangeInput}
					/>
					<Input
						name='lastName'
						placeholder={t('auth.register.lastNamePlaceholder')}
						value={values?.lastName || ''}
						onChange={handleChangeInput}
					/>
				</div>
			</div>
			<div className={styles.SexSelection}>
				<div className={styles.textSex}>
					<Text text='Sexo' bold />
				</div>
				<SexSelector
					checkedF={values?.sex === 'F' ? true : false}
					checkedM={values?.sex === 'M' ? true : false}
					checkedO={values?.sex === 'O' ? true : false}
					handleChange={handleChangeInput}
				/>
			</div>

			<div className={styles.inputBox}>
				<InputSelect
					name='country'
					value={values?.country || ''}
					onChange={handleChangeInput}
					options={countries}
				/>

				<Input
					max={maxDateOfBirth()}
					placeholder={t('auth.register.dateOfBirth')}
					name='dateOfBirth'
					value={values?.dateOfBirth || ''}
					onChange={handleChangeInput}
					icon={'date'}
					type={type}
					onBlur={onBlur}
					onFocus={onFocus}
				/>
			</div>

			<div className={styles.buttonBox}>
				<Button text='Guardar Cambios' onClick={apiCall} />
			</div>
		</MainContainer>
	);
};

export default EditProfile;
