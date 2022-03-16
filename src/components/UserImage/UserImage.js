import EditAvatar from '../../assets/Icons/EditAvatar';
import './UserImage.scss';
import useStyles from './useStyles';
import { PROFILE_IMAGE_DEFAULT } from '../../constants/profileImageDefault';

const UserImage = ({ edit, onClick, img }) => {
	const styles = useStyles()
	console.log('IMG', img);
	return (
		<div className={styles.userImage} onClick={onClick} >
			
			  {img ? (
			<div className='user__profile--image' style={{ backgroundImage: `url('${img}')`, height: '80px', width: '80px', backgroundSize: '100%'}}>
				{ edit &&  <EditAvatar />}
			</div>
			) : (
			<div className='user__profile--image' style={{ backgroundImage: `url('${PROFILE_IMAGE_DEFAULT}')`, height: '80px', width: '80px', backgroundSize: '100%'}}>
				{ edit &&  <EditAvatar />}
			</div>
			)} 
		</div>
	);
};

export default UserImage;
