import { useSelector } from 'react-redux';
import './UserImage.scss';

const UserImage = ({ mode,onClick,src,value,name }) => {
	const { img } = useSelector((store) => store.user);
	return (
		<div>
			<img
				className={`user-profile-image user-profile-image--${mode}`}
				src={`data:image/png;base64,${img}`,src}
				alt='User_Image'
				onClick={onClick}
				value={value}
				name={name}
				
			/>
		</div>
	);
};

export default UserImage;
