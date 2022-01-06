import { useSelector } from 'react-redux';

import './UserImage.scss';

const UserImage = ({ mode }) => {
	const { img } = useSelector((store) => store.user);

	let avatar;

	const base64ToPng = () => {
		avatar = `data:image/png;base64,${img}`;
	};
	if (img != '') {
		base64ToPng();
	} else {
		avatar =
			'https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg';
	}
	return (
		<div>
			<img
				className={`user-profile-image user-profile-image--${mode}`}
				src={avatar}
				alt='User_Image'
			/>
		</div>
	);
};

export default UserImage;
