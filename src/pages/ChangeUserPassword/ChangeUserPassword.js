import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { changePassword } from '../../services/user';
import { useNavigate } from 'react-router';
import MainContainer from '../../components/MainContainer/MainContainer';
import TopSpacing from '../../components/TopSpacing/TopSpacing';

import Input from '../../components/Input/Input';

import Button from '../../components/Button/Button';
import useStyles from './useStyles';

const ChangeUserPassword = () => {
	const { t } = useTranslation();

	const navigate = useNavigate();
	const styles = useStyles();
	const [showCurrentPassword, setShowCurrentPassword] = useState('password');

	const [showNewPasword, setShowNewPassword] = useState('password');

	const [showRepeatPassword, setShowRepeatPassword] = useState('password');

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
	const onClickCurrentPassword = () => {
		if (showCurrentPassword === 'password') {
			setShowCurrentPassword('text');
		}
		if (showCurrentPassword === 'text') {
			setShowCurrentPassword('password');
		}
	};
	const onClickNewPassword = () => {
		if (showNewPasword === 'password') {
			setShowNewPassword('text');
		}
		if (showNewPasword === 'text') {
			setShowNewPassword('password');
		}
	};
	const onClickRepeatPassword = () => {
		if (showRepeatPassword === 'password') {
			setShowRepeatPassword('text');
		}
		if (showRepeatPassword === 'text') {
			setShowRepeatPassword('password');
		}
	};

	return (
		<MainContainer back shadow text={t('user.changeUserPassword.title')}>
			<TopSpacing />
			<div className={styles.container}>
				<div className={styles.inputs}>
					<Input
						icon='eye'
						placeholder={t(
							'user.changeUserPassword.currentPassword'
						)}
						onChange={handleChangeCurrentPassword}
						className='col-11'
						type={showCurrentPassword}
						onClickIcon={onClickCurrentPassword}
					/>
					<Input
						placeholder={t('user.changeUserPassword.newPassword')}
						onChange={handleNewPassword}
						className='col-11'
						type={showNewPasword}
						icon='eye'
						onClickIcon={onClickNewPassword}
						feedback={t('global.errors.validPassword')}
					/>
					<Input
						placeholder={t(
							'user.changeUserPassword.repeatNewPassword'
						)}
						onChange={handleRepeatPassword}
						className='col-11'
						type={showRepeatPassword}
						icon='eye'
						onClickIcon={onClickRepeatPassword}
					/>
				</div>

				<div className={styles.button}>
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
