import MainContainer from '../../../../components/MainContainer/MainContainer';
import { randomHexadecimal as rndKey } from '../../../../utils/mathUtils';

const UsersTable = ({ columns = [], users = [] }) => {
	return (
		<MainContainer>
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
