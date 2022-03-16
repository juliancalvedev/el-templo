import AdminBar from '../../components/AdminBar/AdminBar';
import MainContainer from '../../components/MainContainer/MainContainer';

const Admin = () => {
	console.log('ADMIN PAGE')
	return (
		<MainContainer col='12' navbar scroll>
			<AdminBar />
		
		</MainContainer>
	);
};

export default Admin;
