import { useSelector } from 'react-redux';
import ImgProfileAvatar from '../../assets/images/ImgProfileAvatar';
import './UserImage.scss';

const UserImage = ({ mode, onClick, src, value, name }) => {
	const { img } = useSelector((store) => store.user);


	return (
		<div className='user__profile--image'>
			{img ? (
				<img
				className={`user__profile--image user__profile--image--${mode}`}
				src={img}
				alt='no hay foto'
			/>
				) : (
					<ImgProfileAvatar />
			)}
		</div>
	);
};

export default UserImage;
