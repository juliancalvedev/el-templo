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

    const navigateToCreateEditExercise = () => {
        navigate(`/${PATHS.ADMIN_CREATE_EDIT_EXERCISE}`)
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
                        onClick={navigateToCreateEditExercise}
                        size='3'
                        type={2}
                    />
                </div>

            </div>
            {/* ▲▲▲▲▲▲ TopBar ▲▲▲▲▲▲ */}

        </MainContainer>
    )
}

export default AdminExercises