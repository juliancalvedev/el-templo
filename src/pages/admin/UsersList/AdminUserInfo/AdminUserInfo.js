import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../../../hooks/useFetch';
import { getUserById, enableOrDisableUser, changeUserLevel } from '../../../../services/admin';
import Text from '../../../../components/Text/Text';
import { useTranslation } from 'react-i18next';
import Point from '../../../../assets/Icons/Point';
import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import { compareWithCurrDate, cutDate } from '../../../../utils/date';

export const AdminUserInfo = () => {

	const { t } = useTranslation();

	const navigate = useNavigate();
	const [user, setUser] = useState({});
	const [changeLevel, setChangeLevel] = useState(false);
	const [newLevel, setNewLevel] = useState(0);

	const id = useLocation()?.search?.split('id=')?.[1];
	if (!id) {
		navigate(-1);
	}

	const [data, error, apiCall] = useFetch({
		service: () => getUserById(id),
		globalLoader: true,
		callback: () => {setUser(data?.user); setChangeLevel(false);}
	})
	const [activateDate, activateError, activateApiCall] = useFetch({
		service: () => enableOrDisableUser(id, user.endEnabledDate && !compareWithCurrDate(user.endEnabledDate)),
		globalLoader: true,
		callback: () => apiCall()
	})
	const [changeLevelData, changeLevelError, changeLevelApiCall] = useFetch({
		service: () => changeUserLevel(id, newLevel),
		globalLoader: true,
		callback: () => apiCall()
	})

	const onChangeLevelInput = (e) => {
		const { value } = e.target;
		if (value >= 0 && value <= 12) {
			setNewLevel(value);
		}
	}

	useEffect(() => {
		if (id) {
			apiCall();
		}
	}, [id])

	return (
			<div class="card col-10 m-auto mt-3">
				<div class="card-body">
					<div className='d-flex flex-column align-items-start col-12'>
						<div className='col-12'>
							<div className='d-flex col-6 align-items-center'>
								<Text text={`${t('admin.userTable.level')}: `} />
								{changeLevel ? <Input value={newLevel} onChange={onChangeLevelInput} type='number' /> : <Text text={user.level} />}
							{!changeLevel && <div className='col-6'>

								<Button onClick={() => { setChangeLevel(true); setNewLevel(user.level); }} text={t('global.edit')} size={2} type={3} />
							</div>}
								<div className='d-flex'>

									{changeLevel && <Button text={t('global.confirm')} onClick={changeLevelApiCall} />}
									{changeLevel && <Button text={t('global.close')} type={2} onClick={() => setChangeLevel(false)} />}
								</div>
								<div className='col-3'>


								</div>
							</div>
						</div>
						<div className='d-flex align-items-center col-12'>
							<Text text={`${t('admin.userTable.enabled')}:`} />
							<Point active={user.endEnabledDate && !compareWithCurrDate(user.endEnabledDate)} />
							<Button onClick={activateApiCall} text={t(`global.${!!user.endEnabledDate && !compareWithCurrDate(user.endEnabledDate) ? 'disable': 'enable'}`)}  size={1} type={3} />
						</div>
						<Text text={`${t('admin.userTable.email')}: ${user.email}`} />
						<Text text={`${t('admin.userTable.name')}: ${user.firstName} ${user.lastName}`} />
						<Text text={`${t('admin.userTable.sex')}: ${user.sex}`} />
						<Text text={`${t('admin.userTable.country')}: ${user.country}`} />
						<Text text={`${t('admin.userTable.enabledDate')}: ${cutDate(user.startEnabledDate)}`} />
						<Text text={`${t('admin.userTable.disabledDate')}: ${cutDate(user.endEnabledDate)}`} />
					</div>

				</div>
			</div>
	);
};
