import MainContainer from '../../components/MainContainer/MainContainer';
import Text from '../../components/Text/Text';
import ImgArrobaElTemplo from '../../assets/images/ImgArrobaElTemplo';
import ImgBlueSeparator from '../../assets/images/ImgBlueSeparator';
import { ImgDiagonalRectangle } from '../../assets/images/ImgDiagonalRectangle';
import useStyles from './useStyles';
const Contact = () => {
	const styles=useStyles();
	return (
		<MainContainer>
			<div className={styles.container}>
				<ImgBlueSeparator customStyles={styles.custom1} />
				<Text text={`Av.Constitución`} style={{ margin: '0px' }} />
				<Text text={`6745`} style={{ marginBottom: '15px' }} />
				<ImgArrobaElTemplo />
				<ImgBlueSeparator customStyles={styles.custom2} />

				<div className={styles.diagonal}>
					<ImgDiagonalRectangle />
					<ImgDiagonalRectangle />
					<ImgDiagonalRectangle />
				</div>
			</div>
		</MainContainer>
	);
};

export default Contact;
