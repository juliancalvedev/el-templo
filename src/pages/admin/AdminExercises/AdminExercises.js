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
import Table from '../../../components/Table/Table';
import UseTable from '../../../hooks/useTable';

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
        service: () => getExercises({ offset: tableData.offset, search: tableData.search }),
        callNow: true,
        globalLoader: true,
        callback: () => { },
    });

    const tableData = UseTable({ apiCall: apiCallExercisesList });


    const navigateToCreateExercise = () => {
        navigate(`/${PATHS.ADMIN_CREATE_EDIT_EXERCISE}`)
    }
    const navigateToEditExercise = (id) => {
        navigate(`/${PATHS.ADMIN_CREATE_EDIT_EXERCISE}`, { state: { id: id } })
    }

    return (
        <MainContainer col='12' navbar scroll shadow back text='Administrar Ejercicios' >
            <Table
                paginator
                total={exercisesListFetch?.total}
                {...tableData}
                columns={[
                    { title: t('admin.userTable.name'), field: `title${localStorage.getItem('lang').toUpperCase()}` },
                    { title: t('editar'), field: `edit` },

                ]}
                extraSearch={<Button
                    text={
                        // t('admin.tags.createNewTag'),
                        'Crear Nuevo Ejercicio'}
                    onClick={navigateToCreateExercise}
                    size='3'
                    type={2}
                />}
                data={exercisesListFetch?.exercises.map(e => ({
                    ...e,
                    edit: <Button text={'Editar'} size={1} onClick={() => navigateToEditExercise(e._id)} />
                }))}
            />

        </MainContainer>
    )
}

export default AdminExercises