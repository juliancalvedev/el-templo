import {randomHexadecimal as rndKey} from '../../../../utils/mathUtils';
import {useNavigate} from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import {PATHS} from '../../../../constants/paths';

const UsersTable = ({columns = [], users = []}) => {
	const navigate = useNavigate();

	const handleClick = ({user}) => {
		navigate(`/${PATHS.ADMIN_USER_INFO}`, {state: {user: user}});
	};

	return (
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
										{' '}
										<td key={rndKey()}>
											{c === 'options' ? (
												<div>
													<Button
														text='Ver'
														size={3}
														type={1}
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
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
	);
};

export default UsersTable;
