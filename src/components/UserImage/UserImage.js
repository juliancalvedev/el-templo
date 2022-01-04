import { useSelector } from 'react-redux';
import './UserImage.scss';

const UserImage = () => {
	const { img } = useSelector((store) => store.user);
	return (
		<div>
			<img
				className='user-profile-image'
				src={`data:image/png;base64,${img}`}
				alt='User_Image'
			/>
		</div>
	);
};

export default UserImage;
