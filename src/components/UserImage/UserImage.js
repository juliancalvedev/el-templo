import { useSelector } from 'react-redux';
import './UserImage.scss';

const UserImage = ({ mode }) => {
	const { img } = useSelector((store) => store.user);
	return (
		<div>
			<img
				className={`user-profile-image user-profile-image--${mode}`}
				src={`data:image/png;base64,${img}`}
				alt='User_Image'
			/>
		</div>
	);
};

export default UserImage;
