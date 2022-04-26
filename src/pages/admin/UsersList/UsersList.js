import { useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import { getUsers } from '../../../services/admin';
import MainContainer from '../../../components/MainContainer/MainContainer';
import Table from '../../../components/Table/Table';
import Button from '../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../constants/paths';
import { cutDate } from '../../../utils/date';
import { useTranslation } from 'react-i18next';
import Point from '../../../assets/Icons/Point';

const UsersList = () => {

	const [search, setSearch] = useState('');
	const [offset, setOffset] = useState(0);
	const [call, setCall] = useState(false);

	const { t } = useTranslation();

	const navigate = useNavigate();

	const [data, error, apiCall] = useFetch({
		service: () => getUsers({ search, offset }),
		globalLoader: true,
	});

	const handleClick = (id) => {
		navigate(`/${PATHS.ADMIN_USER_INFO}?id=${id}`);
	};

	const onPressSearch = () => {
		setOffset(0);
		setCall(!call);
	}

	const onSetPage = (newPage) => {
		setOffset(newPage);
		setCall(!call);
	}

	useEffect(() => {
		apiCall();
	}, [call]);

	return (
		<MainContainer scroll navbar back text='Users' shadow >
			<div className='my-3'>
				<Table
					paginator
					showSearch
					search={search}
					onChangeSearch={setSearch}
					onPressSearch={onPressSearch}
					offset={offset}
					total={data?.total}
					onSetPage={onSetPage}
					columns={[
						{ title: t('admin.userTable.enabled'), field: 'enabled' },
						{ title: t('admin.userTable.email'), field: 'email' },
						{ title: t('admin.userTable.name'), field: 'name' },
						{ title: t('admin.userTable.sex'), field: 'sex' },
						{ title: t('admin.userTable.country'), field: 'country' },
						{ title: t('admin.userTable.level'), field: 'level' },
						{ title: t('admin.userTable.enabledDate'), field: 'startEnabledDate' },
						{ title: t('admin.userTable.disabledDate'), field: 'endEnabledDate' },
						{ title: t('admin.userTable.options'), field: 'options' },
					]}
					data={data?.users?.map(u => ({
						...u,
						startEnabledDate: cutDate(u.startEnabledDate),
						endEnabledDate: cutDate(u.endEnabledDate),
						name: `${u.firstName} ${u.lastName}`,
						enabled: <Point active={new Date() > u.endEnabledDate}/>,
						options: <Button
							text='Ver'
							size={3}
							type={3}
							onClick={() =>
								handleClick(u._id)
							}
						/>
					}))}
				/>
			</div>
		</MainContainer>
	);
};

export default UsersList;
