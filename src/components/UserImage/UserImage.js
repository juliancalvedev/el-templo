import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ImgProfileAvatar from '../../assets/images/ImgProfileAvatar';
import './UserImage.scss';

const UserImage = ({ mode }) => {
	const { img } = useSelector((store) => store.user);

	const [flag, setFlag] = useState(false);

	const base64ToPng = () => {
		const showUserImg = `data:image/png;base64,${img}`;
		return showUserImg;
	};
	useEffect(() => {
		if (img === '') {
			setFlag(true);
		} else {
			setFlag(false);
		}
	}, []);

	return (
		<div className='user__profile--image'>
			{flag ? (
				<ImgProfileAvatar />
			) : (
				<img className='user__profile--image' src={base64ToPng()} />
			)}
		</div>
	);
};

export default UserImage;
