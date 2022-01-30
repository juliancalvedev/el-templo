import useStyles from './useStyles';
import './Exercise.scss';
import Text from '../Text/Text';
import TotalTime from '../TotalTime/TotalTime';
import DropDown from '../DropDown/DropDown';
import Chronometer from '../../components/Chronometer/Chronometer';
import ButtonPagination from '../../components/ButtonPagination/ButtonPagination';
import { useState } from 'react';

const Exercise = () => {
	const styles = useStyles();

	const [totalTime, setTotalTime] = useState({ ms: 0, s: 0, m: 0 });
	const [chronometerTime, setChronometerTime] = useState({
		ms: 0,
		s: 0,
		m: 0,
	});
	const [showChronometer, setShowChronometer] = useState(true);
	const [btnNextIsDisabled, setBtnNextIsDisabled] = useState(true);

	const timeToShow = `${totalTime.m}:${totalTime.s <= 9 ? '0' : ''}${
		totalTime.s
	}`;

	const onStop = (time) => {
		const mili = time.ms;
		const sec = time.s;
		const min = time.m;
		if (time.s > 0) {
			setBtnNextIsDisabled(false);
		}
		setTotalTime({ ms: mili, s: sec, m: min });
	};

	const handleShowChronometer = () => {
		showChronometer ? setShowChronometer(false) : setShowChronometer(true);
	};

	return (
		<div className={styles.exerciseContainer}>
			<div className={styles.titleContainer}>
				<div className={styles.titleText}>
					<div>
						<Text text='Ejercicio n°1' bold size='4' />
					</div>
					<div className={styles.exerciseName}>
						<Text text='Abdominales bolita' bold size='3' />
					</div>
				</div>
				<div className={styles.totalTime}>
					<TotalTime totalTime={timeToShow} />
				</div>
			</div>

			<div className={styles.gifContainer}>
				{/* TODO acá va el gif, y hay que eliminar el rectángulo negro */}
			</div>

			<div
				className={styles.dropDownContainer}
				onClick={handleShowChronometer}
			>
				<DropDown
					text1='Ver descripción del video'
					text2='El Templo tiene como Misión introducir al público a nuevos sistemas de entrenamientos, culturizar e instruir a sus integrantes en el mundo del movimiento como estilo de vida y no como compromiso social y fines puramente estéticos. Ser mejores humanos a través de nuestras acciones y comportamientos.'
				/>
			</div>

			{showChronometer && (
				<div className={styles.chronometerContainer}>
					<Chronometer
						onStop={onStop}
						// Value mantiene el tiempo si el componente desaparece y reaparece.
						value={{
							ms: totalTime.ms,
							s: totalTime.s,
							m: totalTime.m,
						}}
					/>
				</div>
			)}

			<div className={styles.btnNext}>
				<div className={styles.btnNextText}>
					<Text
						text={'SIGUIENTE EJERCICIO'}
						size='2'
						bold
						color={5}
					/>
				</div>
				<ButtonPagination disabled={btnNextIsDisabled} />
			</div>
		</div>
	);
};

export default Exercise;
