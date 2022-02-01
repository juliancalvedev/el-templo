import React from 'react';
import './NewLevel.scss';
import MainContainer from '../../components/MainContainer/MainContainer';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import { PATHS } from '../../constants/paths';
import { useNavigate } from 'react-router-dom';

const NewLevel = () => {
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate(`${PATHS.TRAINING}`);
	};
	return (
		<MainContainer col='12' back>
			<div className='d-flex flex-column h-100 align-items-center justify-content-between py-5 '>
				<div className='textContainer m '>
					<Text text='¡Felicitaciones!' font='2' size='5' />
					<Text text='Tu nivel es' font='1' size='3' bold />
				</div>
				<div>
					<div className='NewLevelAnimated '>
						<Text
							className='AnimatedLevel'
							text='3'
							color='5'
							bold
							font='2'
							size='5'
						/>
					</div>
				</div>
				<div className='col-11 my-5 '>
					<Button text='Ir a Mi Entrenamiento' />
				</div>
			</div>
		</MainContainer>
	);
};

export default NewLevel;
