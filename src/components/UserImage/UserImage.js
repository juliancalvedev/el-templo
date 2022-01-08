import { useSelector } from 'react-redux';
import ImgProfileAvatar from '../../assets/images/ImgProfileAvatar';
import './UserImage.scss';

const UserImage = ({ mode }) => {
	const { img } = useSelector((store) => store.user);

	const base64ToPng = () => {
		const showUserImg = `data:image/png;base64,${img}`;
		return showUserImg;
	};

	return (
		<div className='user__profile--image'>
			{img ? (
				<img
					className={`user__profile--image user__profile--image--${mode}`}
					src={base64ToPng()}
					alt=''
				/>
			) : (
				<ImgProfileAvatar />
			)}
		</div>
	);
};

export default UserImage;
