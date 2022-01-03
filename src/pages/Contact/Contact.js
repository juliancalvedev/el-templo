import MainContainer from '../../components/MainContainer/MainContainer';
import Title from '../../components/Title/Title';
import ImgArrobaElTemplo from '../../images/ImgArrobaElTemplo';
import ImgBlueSeparator from '../../images/ImgBlueSeparator';
import { ImgDiagonalRectangle } from '../../images/ImgDiagonalRectangle';
import './Contact.scss';

const Contact = () => {
	return (
		<MainContainer top>
			<div
				className='d-flex flex-column align-items-center justify-content-between col-12'
				style={{ height: '25%', marginTop: '15%' }}
			>
				<ImgBlueSeparator customStyles={'top-separator'} />
				<Title text={`Av.Constitución`} style={{ margin: '0px' }} />
				<Title text={`6745`} />
				<ImgArrobaElTemplo />
				<ImgBlueSeparator customStyles='bottom-separator' />

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
