import MainContainer from '../../components/MainContainer/MainContainer';
import Title from '../../components/Title/Title';
import ImgArrobaElTemplo from '../../assets/images/ImgArrobaElTemplo';
import ImgBlueSeparator from '../../assets/images/ImgBlueSeparator';
import { ImgDiagonalRectangle } from '../../assets/images/ImgDiagonalRectangle';

const Contact = () => {
	return (
		<MainContainer>
			<div className='d-flex flex-column align-items-center justify-content-between col-12 h-25 mt-5'>
				<ImgBlueSeparator customStyles='mb-4 mt-3' />
				<Title text={`Av.Constitución`} style={{ margin: '0px' }} />
				<Title text={`6745`} style={{ marginBottom: '15px' }} />
				<ImgArrobaElTemplo />
				<ImgBlueSeparator customStyles='mt-1' />

				<div className='align-self-end mt-5'>
					<ImgDiagonalRectangle />
					<ImgDiagonalRectangle />
					<ImgDiagonalRectangle />
				</div>
			</div>
		</MainContainer>
	);
};

export default Contact;
