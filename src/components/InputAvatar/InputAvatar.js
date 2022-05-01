import UserImage from '../../components/UserImage/UserImage';
import Modal from '../../components/Modal/Modal'
import avatar1 from '../../assets/images/avatars/1.jpg'
import avatar2 from '../../assets/images/avatars/2.jpg'
import avatar3 from '../../assets/images/avatars/3.jpg'
import { useState } from 'react';

const AVATAR = [
    '',
    avatar1,
    avatar2,
    avatar3
]

const InputAvatar = ({ showModal, onCloseInputAvatar, onClickInputAvatar, onChangeAvatar, img = '' }) => {

    const onSelectAvatar = (avatarNumber) => {
        onChangeAvatar(avatarNumber.toString())
        showModal = false
    }

    return (<div>
        <div className='input-Avatar'>
            <UserImage edit onClick={onClickInputAvatar} img={AVATAR[img]} />
        </div>
        <Modal show={showModal} onClose={onCloseInputAvatar} >
            {AVATAR.map((avatar, index) => {
                return index != 0 && <img
                    key={index}
                    onClick={() => onSelectAvatar(index)}
                    src={avatar}
                    height='85px'
                    style={{
                        margin: '5px',
                        borderRadius: '50px',
                        boxShadow: '2px 2px 10px rgba(0,0,0,.2)',
                        border: `${img == index ? '2px solid rgba(0,200,0,.4)' : '2px solid rgba(0,0,0,0)'}`
                    }}
                />
            })}
        </Modal>
    </div>)
}

export default InputAvatar