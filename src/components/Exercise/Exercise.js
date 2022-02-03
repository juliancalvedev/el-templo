import useStyles from './useStyles';
import './Exercise.scss';
import Text from '../Text/Text';
import TotalTime from '../TotalTime/TotalTime';
import DropDown from '../DropDown/DropDown';
import Chronometer from '../../components/Chronometer/Chronometer';
import ButtonPagination from '../../components/ButtonPagination/ButtonPagination';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MainContainer from '../MainContainer/MainContainer';

const Exercise = () => {
	const styles = useStyles();
	const { t } = useTranslation();

	//Cambiar el totalTime para que sume uno cada vez que el reloj cambia de estado con useEffect
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
		<MainContainer col='12' scroll={true}>
			<div className={styles.exerciseContainer}>
				<div className={styles.titleContainer}>
					<div className={styles.titleText}>
						<div>
							<Text
								//  TODO Poner el numero de ejecicio del objeto
								text={`${t('exercise.exerciseNumber')}1`}
								bold
								size='4'
							/>
						</div>
						<div className={styles.exerciseName}>
							<Text
								// TODO Hacer la traducción para los ejercicios con una constante
								text='Abdominales bolita'
								bold
								size='3'
							/>
						</div>
					</div>
					<div className={styles.totalTime}>
						<TotalTime totalTime={timeToShow} />
					</div>
				</div>

				<div className={styles.gifContainer}>
					<img
						className={styles.gif}
						src='https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/580a5a1f-5c74-4979-b281-ba5db2377742.gif?ClientID=vimeo-core-prod&Date=1643826390&Signature=58c0ed026f7d7b278ff1cd28f28d1b3997f1eba8'
					></img>
				</div>

				<div
					className={styles.dropDownContainer}
					onClick={handleShowChronometer}
				>
					<DropDown
						shadow
						fold='unfold'
						text={t('exercise.watchVideoDescription')}
					>
						<Text
							text='Descripción del video'
							size='2'
							justify='left'
						/>
					</DropDown>
				</div>
				{/* TODO Manejar qué hace el cronómetro si, mientras está corriendo, se dezpliega el DropDown. */}
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

				<div className={styles.btnNextContainer}>
					<ButtonPagination
						textLeft={t('exercise.nextExercise')}
						textBold
						disabled={btnNextIsDisabled}
					/>
				</div>
			</div>
		</MainContainer>
	);
};

export default Exercise;
