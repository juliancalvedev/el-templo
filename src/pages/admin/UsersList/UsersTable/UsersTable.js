import MainContainer from '../../../../components/MainContainer/MainContainer';
import { randomHexadecimal as rndKey } from '../../../../utils/mathUtils';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import { PATHS } from '../../../../constants/paths';

const UsersTable = ({ columns = [], users = [] }) => {
	const navigate = useNavigate();

	const handleClick = ({ user }) => {
		navigate(`/${PATHS.ADMIN_USER_INFO}`, { state: { user: user } });
	};

	return (
<<<<<<< HEAD
		<div>
			<table className='table'>
				<thead>
					<tr>
						{columns?.map((column) => (
							<th scope='col' key={rndKey()}>
								{column}
							</th>
						))}
					</tr>
				</thead>

				<tbody>
					{users?.map((user) => (
						<tr key={rndKey()}>
							{columns?.map((c) => (
								<td key={rndKey()}>
									{c === 'options' ? (
										<div>
											<Button
												text='Ver'
												onClick={() =>
													handleClick({
														user: user,
													})
												}
											/>
										</div>
									) : (
										user[c]
									)}
								</td>
=======
		<MainContainer>
			<div>
				<table className='table'>
					<thead>
						<tr>
							{columns?.map((column) => (
								<th scope='col' key={rndKey()}>
									{column}
								</th>
>>>>>>> 2527f8a73775f31a48182af43d9063b4c5382067
							))}
						</tr>
					</thead>

					<tbody>
						{users?.map((user) => (
							<tr key={rndKey()}>
								{columns?.map((c) => (
									<td key={rndKey()}>{user[c]}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</MainContainer>
	);
};

export default UsersTable;
