import { useSelector } from 'react-redux';

const UserImage = () => {
	const { img } = useSelector((store) => store.user);
	return (
		<div>
			<img
				className='profileImage'
				src={`data:image/png;base64,${img}`}
				alt='User_Image'
			/>
		</div>
	);
};

export default UserImage;
