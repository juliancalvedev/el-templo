import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { changePassword } from '../../services/user';
import { useNavigate } from 'react-router';
import MainContainer from '../../components/MainContainer/MainContainer';

import Input from '../../components/Input/Input';

import Button from '../../components/Button/Button';

const ChangeUserPassword = () => {
	const { t } = useTranslation();

	const navigate = useNavigate();

	const [inputType, setInputType] = useState('password');

	const [currentPassword, setCurrentPassword] = useState('');

	const [newPassword, setNewPassword] = useState('');

	const [repeatPassword, setRepeatPassword] = useState('');

	const handleChangeCurrentPassword = (e) => {
		setCurrentPassword(e.target.value);
	};

	const handleNewPassword = (e) => {
		setNewPassword(e.target.value);
	};

	const handleRepeatPassword = (e) => {
		setRepeatPassword(e.target.value);
	};

	const handleSubmit = async ({ problem }) => {
		await changePassword({ currentPassword, newPassword });
		if (!problem) {
			navigate(-1, { replace: true });
		}
	};
	const onClickIcon = () => {
		if (inputType === 'password') {
			setInputType('text');
		}
		if (inputType === 'text') {
			setInputType('password');
		}
	};

	return (
		<MainContainer back shadow text='Chage User Password'>
			<div className='col-12 d-flex h-75 flex-column align-items-center justify-content-between'>
				<div className='col-12 d-flex h-100 flex-column   align-items-center '>
					<Input
						icon='eye'
						placeholder={t(
							'user.changeUserPassword.currentPassword'
						)}
						onChange={handleChangeCurrentPassword}
						className='col-11'
						type={inputType}
						onClickIcon={onClickIcon}
					/>
					<Input
						placeholder={t('user.changeUserPassword.newPassword')}
						onChange={handleNewPassword}
						className='col-11'
						type={inputType}
						icon='eye'
						onClickIcon={onClickIcon}
						feedback={t('global.errors.validPassword')}
					/>
					<Input
						placeholder={t(
							'user.changeUserPassword.repeatNewPassword'
						)}
						onChange={handleRepeatPassword}
						className='col-11'
						type={inputType}
						icon='eye'
						onClickIcon={onClickIcon}
					/>
				</div>

				<div className='col-10 '>
					<Button
						text={t('user.changeUserPassword.submitPassword')}
						disabled={
							!currentPassword ||
							newPassword !== repeatPassword ||
							!newPassword ||
							newPassword.length <= 6
						}
						onClick={handleSubmit}
					/>
				</div>
			</div>
		</MainContainer>
	);
};

export default ChangeUserPassword;
