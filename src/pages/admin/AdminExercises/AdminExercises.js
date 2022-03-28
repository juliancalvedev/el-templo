import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import InputSelect from '../../../components/InputSelect/InputSelect';
import MainContainer from '../../../components/MainContainer/MainContainer'
import Modal from '../../../components/Modal/Modal';
import TextArea from '../../../components/TextArea/TextArea';
import { PATHS } from '../../../constants/paths';
import useFetch from '../../../hooks/useFetch';
import { getExercises } from '../../../services/admin';

const AdminExercises = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false)
    const [newExerciseData, setNewExerciseData] = useState({
        titleES: '',
        descriptionES: '',
        titleEN: '',
        descriptionEN: '',
        tags: [],
        vide: ''
    });

    const [exercisesListFetch, exercisesListError, apiCallExercisesList] = useFetch({
        service: () => getExercises(),
        callNow: true,
        globalLoader: true,
        callback: () => { },
    });

    const navigateToCreateExercise = () => {
        navigate(`/${PATHS.ADMIN_CREATE_EDIT_EXERCISE}`)
    }
    const navigateToEditExercise = (id) => {
        navigate(`/${PATHS.ADMIN_CREATE_EDIT_EXERCISE}`, { state: { id: id } })
    }

    return (
        <MainContainer col='12' navbar scroll shadow back text='Administrar Ejercicios' >
            {/* ▼▼▼▼▼▼ TopBar ▼▼▼▼▼▼ */}
            <div
                style={{
                    position: 'fixed',
                    top: 53,
                    width: '100%',
                    maxWidth: '800px',
                    backgroundColor: 'rgba(11,11,11,.5)',
                }}
            >
                <div className='mt-4'>
                    <Button
                        text={
                            // t('admin.tags.createNewTag'),
                            'Crear Nuevo Ejercicio'}
                        onClick={navigateToCreateExercise}
                        size='3'
                        type={2}
                    />
                </div>

            </div>
            {/* ▲▲▲▲▲▲ TopBar ▲▲▲▲▲▲ */}
            <div className='auxiliar-map mt-5 pt-4' >
                {exercisesListFetch?.exercises.map(exercise =>
                    <ul key={exercise._id} style={{ border: '1px solid black' }}>
                        <li>{exercise.titleES}</li>
                        <li>{exercise.tags[0].titleES}</li>
                        <Button text={'Editar'} size={1} onClick={() => navigateToEditExercise(exercise._id)} />
                    </ul>)}
            </div>

        </MainContainer>
    )
}

export default AdminExercises