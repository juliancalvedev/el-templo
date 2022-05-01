import { useDispatch } from 'react-redux';
import { cutDate } from '../../utils/date';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import Text from '../../components/Text/Text';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import UserImage from '../../components/UserImage/UserImage';
import InputSelect from '../../components/InputSelect/InputSelect';
import SexSelector from '../../components/SexSelector/SexSelector';
import MainContainer from '../../components/MainContainer/MainContainer';
import { Countries } from '../../constants/countries';
import { editProfile, getUserInfo } from '../../services/user';
import { imgToBase64 } from '../../utils/base64';
import { useTranslation } from 'react-i18next';
import { PATHS } from '../../constants/paths';
import { useSelector } from 'react-redux';
import useStyles from './useStyles.js';
import './EditProfile.scss';
import { getUserInfoAction } from '../../redux/user';
import InputAvatar from '../../components/InputAvatar/InputAvatar';

const EditProfile = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { firstName, lastName, sex, country, dateOfBirth, img } = useSelector(
		(store) => store.user
	);
	const [values, setValues] = useState({
		firstName,
		lastName,
		country,
		dateOfBirth,
		sex,
	});
	const [baseImage, setBaseImage] = useState(img);
	const [callGetUserInfo, setCallGetUserInfo] = useState(false);
	const [showAvatarModal, setShowAvatarModal] = useState(false);

	const { t } = useTranslation();
	const countries = Countries({ t });

	const onChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		setValues({
			firstName,
			lastName,
			country,
			dateOfBirth: cutDate(dateOfBirth),
			sex,
		});
		setBaseImage(img);
	}, [firstName]);

	const [updated, errorUpdateInfo, updateInfo] = useFetch({
		service: () => getUserInfo(),
		globalLoader: true,
		callback: () => {
			dispatch(getUserInfoAction(updated?.user));
			navigate(`/${PATHS.MY_PROFILE}`, { replace: true });
		},
	});

	const [data, error, apiCall] = useFetch({
		service: () => editProfile({ ...values, img: baseImage }),
		globalLoader: true,
		callback: () => setCallGetUserInfo(true),
	});

	useEffect(() => {
		if (callGetUserInfo) {
			updateInfo();
		}
	}, [callGetUserInfo]);

	const styles = useStyles();
	const clickFile = () => {
		document.getElementById('file').click();
	};

	const [type, setType] = useState('text');
	const onFocus = () => setType('date');
	const onBlur = () => setType('text');

	const onClickInputAvatar = () => {
		setShowAvatarModal(true);
	};
	const onCloseInputAvatar = () => {
		setShowAvatarModal(false);
	};

	const handleClickImage = (e) => imgToBase64({ e, setter: setBaseImage });

	return (
		<MainContainer back text='Edicion de perfil' shadow>
			<div className={styles.ImgAndName}>
				<div className={styles.userImg}>
					<div>
						<InputAvatar
							showModal={showAvatarModal}
							onClickInputAvatar={onClickInputAvatar}
							onCloseInputAvatar={onCloseInputAvatar}
							onChangeAvatar={(value) => setBaseImage(value)}
							img={baseImage}
						/>
					</div>
				</div>
				<div className={styles.userName}>
					<Input name='firstName' onChange={onChange} value={values.firstName} />
					<Input name='lastName' onChange={onChange} value={values.lastName} />
				</div>
				{/*  */}
			</div>
			<div className={styles.SexSelection}>
				<div className={styles.textSex}>
					<Text text='Sexo' bold />
				</div>
				<SexSelector handleChange={onChange} />
			</div>

			<div className={styles.inputBox}>
				<InputSelect
					value={values.country}
					defaulValue={values.country}
					onChange={onChange}
					options={countries}
					name='country'
				/>

				<Input
					onChange={onChange}
					type={type}
					name='dateOfBirth'
					value={values.dateOfBirth}
					onBlur={onBlur}
					onFocus={onFocus}
					icon='date'
				/>
			</div>

			<div className={styles.buttonBox}>
				<Button text='Guardar Cambios' onClick={apiCall} />
			</div>
		</MainContainer>
	);
};

export default EditProfile;
