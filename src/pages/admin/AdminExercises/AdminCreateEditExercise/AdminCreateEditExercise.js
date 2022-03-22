import React from 'react'
import Input from '../../../../components/Input/Input'
import MainContainer from '../../../../components/MainContainer/MainContainer'
import TextArea from '../../../../components/TextArea/TextArea'

const AdminCreateEditExercise = () => {
    return (
        <MainContainer col='12' navbar scroll topbar back bg={1} color={2} text={'Crear Nuevo Ejercicio'} >
            <div className='col-12 d-flex flex-column justify-content-start align-items-center h-100'>
                <div className='col-10 d-flex flex-column align-items-center'>
                    <Input
                        label={
                            // t(`admin.tags.englishName`)
                            'Nombre en Español'
                        }
                    />
                    <Input
                        label={
                            // t(`admin.tags.englishName`)
                            'Nombre en inglés'
                        }
                    />

                    <TextArea label='Descripción en Español' />

                </div>
            </div>
        </MainContainer>
    )
}

export default AdminCreateEditExercise